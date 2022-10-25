import React from "react";

import Link from "next/link";

import { CompanyType } from "types";

import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import slashDateToString from "utils/date/slashDateToString";

import DitailLayout from "components/templetes/DitailLayout/DitailLayout";
import ListItemBothEndsText from "components/ListItem/ListItemBothEndsText";

import styles from "./CompanyDitail.module.scss";

export type CompanyDitailProps = {
  company: CompanyType;
  editHref: string;
};

const CompanyDitail = (props: CompanyDitailProps) => {
  const { company, editHref } = props;

  const items: JSX.Element[] = [
    <ListItemBothEndsText
      label="ホームページURL"
      explanation={company?.homepageURL ?? "未登録"}
      underline
    />,
    <ListItemBothEndsText
      label="採用ページURL"
      explanation={company?.adoptionURL ?? "未登録"}
      underline
    />,
    <ListItemBothEndsText
      label="説明会日"
      explanation={
        company?.explanatoryMeetingDate
          ? slashDateToString(company.explanatoryMeetingDate)
          : "未定"
      }
      underline
    />,
    <ListItemBothEndsText
      label="面接日"
      explanation={
        company?.interviewDate
          ? slashDateToString(company.interviewDate)
          : "未定"
      }
      underline
    />,
    <ListItemBothEndsText
      label="インターンシップ日"
      explanation={
        company?.internshipDate
          ? slashDateToString(company.internshipDate)
          : "未定"
      }
      underline
    />,
    <ListItemBothEndsText
      label="合否"
      explanation={company?.result}
      underline
    />,
  ];

  return (
    <DitailLayout companyName={company?.name ?? ""}>
      <>
        <Link href={editHref}>
          <Button className={styles["edit-button"]}>
            <EditIcon className={styles["icon"]} />
          </Button>
        </Link>

        {items.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i}>{item}</div>
        ))}
      </>
    </DitailLayout>
  );
};

export default CompanyDitail;
