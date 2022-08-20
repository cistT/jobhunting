import React from "react";

import { css } from "@emotion/react";

import { Typography } from "@mui/material";

import CompanyListItem from "components/molecules/CompanyListItem";

import { CompanyType } from "types";

export type CompanyResultListProps = {
  companies: (CompanyType & {
    onClick?: (event?: React.MouseEvent) => void;
    className?: string;
  })[];
  className?: string;
};

const CompanyResultList = (props: CompanyResultListProps) => {
  const { companies, className = "" } = props;

  return (
    <div className={className}>
      {companies.map((company) => (
        <CompanyListItem
          label={company.name}
          onClick={company.onClick}
          rightItem={
            <Typography variant="h3" component="h3" css={styles.rightItem}>
              {company.result}
            </Typography>
          }
          className={company.className}
          key={company.id}
        />
      ))}
    </div>
  );
};

export default CompanyResultList;

const styles = {
  rightItem: css`
    height: 100%;
    width: 100%;
    font-size: 26px;
    text-align: center;
  `,
};
