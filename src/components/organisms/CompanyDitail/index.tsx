import React from "react";

import { css } from "@emotion/react";

import { Typography } from "@mui/material";

import { CompanyType } from "types";
import DateBox from "components/atoms/Box/DateBox";
import CompanyItem from "components/molecules/CompanyItem";
import ListTitle from "components/molecules/ListTitle";

export type CompanyDitailProps = {
  company: CompanyType;
};

const CompanyDitail = (props: CompanyDitailProps) => {
  const { company } = props;
  const items = [
    {
      listName: "面接日",
      element: company?.interviewDate && (
        <DateBox date={company.interviewDate} />
      ),
    },
    {
      listName: "インターンシップ日",
      element: company?.internshipDate && (
        <DateBox date={company.internshipDate} />
      ),
    },
    {
      listName: "合否",
      element: (
        <Typography variant="h5" component="h5" css={styles.text}>
          {company.result}
        </Typography>
      ),
    },
  ];

  return (
    <>
      <ListTitle title={company.name} />
      {items.map((item) => (
        <CompanyItem listName={item.listName} element={item.element} />
      ))}
    </>
  );
};

export default CompanyDitail;

const styles = {
  upside: css`
    display: flex;
    justify-content: space-between;
  `,
  text: css`
    text-align: center;
  `,
};
