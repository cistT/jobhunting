import React from "react";

import { css } from "@emotion/react";

import { Typography } from "@mui/material";

import CompanyListItem from "components/molecules/CompanyListItem";

import { CompanyType } from "types";
import useWindowSize from "hooks/useWindowSize";

export type CompanyResultListProps = {
  companies: (CompanyType & {
    onClick?: (event?: React.MouseEvent) => void;
    className?: string;
  })[];
  className?: string;
};

const CompanyResultList = (props: CompanyResultListProps) => {
  const { companies, className = "" } = props;
  const { width } = useWindowSize();

  return (
    <div className={className}>
      {companies.map((company) => (
        <CompanyListItem
          label={company.name}
          onClick={company.onClick}
          item={
            <Typography variant="h3" component="h3" css={styles.resultItem}>
              {company.result}
            </Typography>
          }
          className={company.className}
          bottom={width < 600}
          key={company.id}
        />
      ))}
    </div>
  );
};

export default CompanyResultList;

const styles = {
  resultItem: css`
    height: 100%;
    width: 100%;
    font-size: clamp(1rem, 1vw + 1rem, 2.25rem);
  `,
};
