import React from "react";

import { css } from "@emotion/react";

import { Typography } from "@mui/material";

import CompanyListItem from "components/molecules/CompanyListItem";

import { CompaniesType } from "types";

export type CompanyResultListProps = {
  companies: (CompaniesType & {
    onClick?: React.MouseEventHandler<HTMLLIElement>;
    className?: string;
  })[];
  className?: string;
};

const CompanyResultList = (props: CompanyResultListProps) => {
  const { companies, className = "" } = props;
  return (
    <>
      <div className={className}>
        {companies.map(({ name, result, className, id }) => (
          <CompanyListItem
            label={name}
            rightItem={
              <Typography variant="h3" component="h3" css={styles.rightItem}>
                {result}
              </Typography>
            }
            className={className}
            key={id}
          />
        ))}
      </div>
    </>
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
