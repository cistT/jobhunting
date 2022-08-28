import React from "react";

import { css } from "@emotion/react";

import { Typography } from "@mui/material";

import { CompanyType } from "types";
import DateBox from "components/atoms/Box/DateBox";

import ListTitle from "components/molecules/ListTitle";
import CompanyDitailItem from "components/molecules/CompanyDitailItem";

export type CompanyDitailProps = {
  company: CompanyType;
};

const CompanyDitail = (props: CompanyDitailProps) => {
  const { company } = props;
  const items = [
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
        <CompanyDitailItem label={item.label} element={item.element} />
      ))}
    </>
  );
};

export default CompanyDitail;

const styles = {
  text: css`
    text-align: center;
  `,
};
