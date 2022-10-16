import React from "react";

import Link from "next/link";

import { CompanyType } from "types";

import { Button, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import DateBox from "components/atoms/Box/DateBox";
import CompanyDitailItem from "components/molecules/CompanyDitailItem";
import DitailLayout from "components/templetes/DitailLayout/DitailLayout";

import styles from "./CompanyDitail.module.scss";

export type CompanyDitailProps = {
  company: CompanyType;
  editHref: string;
};

const CompanyDitail = (props: CompanyDitailProps) => {
  const { company, editHref } = props;

  const items: { label: string; element: JSX.Element | undefined }[] = [
    {
      label: "ホームページURL",
      element: (
        <Typography variant="h5" component="h5" className={styles["text"]}>
          {company?.homepageURL ?? ""}
        </Typography>
      ),
    },
    {
      label: "採用ページURL",
      element: (
        <Typography variant="h5" component="h5" className={styles["text"]}>
          {company?.adoptionURL ?? ""}
        </Typography>
      ),
    },
    {
      label: "説明会日",
      element: company?.explanatoryMeetingDate && (
        <DateBox date={company.explanatoryMeetingDate} />
      ),
    },
    {
      label: "面接日",
      element: company?.interviewDate && (
        <DateBox date={company.interviewDate} />
      ),
    },
    {
      label: "インターンシップ日",
      element: company?.internshipDate && (
        <DateBox date={company.internshipDate} />
      ),
    },
    {
      label: "合否",
      element: company?.result && (
        <Typography variant="h5" component="h5" className={styles["text"]}>
          {company.result}
        </Typography>
      ),
    },
  ];

  return (
    <DitailLayout companyName={company?.name ?? ""}>
      <>
        <Link href={editHref}>
          <Button className={styles["edit-button"]}>
            <EditIcon className={styles["icon"]} />
          </Button>
        </Link>

        {items.map((item) => (
          <CompanyDitailItem
            label={item.label}
            element={item.element}
            key={`${item.label}`}
          />
        ))}
      </>
    </DitailLayout>
  );
};

export default CompanyDitail;
