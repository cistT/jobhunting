import React from "react";

import classNames from "classnames";

import useGetURLQuery from "hooks/useGetURLQuery";
import useBrowserBack from "hooks/useBrowserBack";

import deleteCompany from "features/api/deleteCompany";

import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

import ListTitle from "components/molecules/ListTitle";
import DitailContentsDisplaySwitching from "components/organisms/DitailContentsDisplaySwitching/DitailContentsDisplaySwitching";

import styles from "./DitailLayout.module.scss";

export type DitaliLayoutProps = {
  companyName: string;
  children: React.ReactNode;
  className?: string;
};

const DitailLayout = (props: DitaliLayoutProps) => {
  const { companyName, children, className } = props;
  const { id } = useGetURLQuery("id");
  const { browserBack } = useBrowserBack();
  const buttons = [
    { label: "基本情報", href: `/list/${id}` },
    { label: "志望動機", href: `/list/${id}/motivation` },
  ];

  const onClickDelete = async () => {
    await deleteCompany("1", id as string);
    browserBack();
  };

  return (
    <div className={classNames(styles["container"], className)}>
      <div className={styles["upper"]}>
        <ListTitle title={companyName} className={styles["title"]} />
        <Button
          onClick={onClickDelete}
          className={styles["button"]}
          variant="outlined">
          <DeleteIcon fontSize="large" />
        </Button>
      </div>

      <DitailContentsDisplaySwitching buttons={buttons} />
      {children}
    </div>
  );
};

export default DitailLayout;
