import React from "react";

import { css } from "@emotion/react";

import DateBox from "components/atoms/Box/DateBox";
import CompanyListItem from "components/molecules/CompanyListItem";

import { CompanyType } from "types";
import useWindowSize from "hooks/useWindowSize";

export type CompanyDateListProps = {
  companies: (CompanyType & {
    onClick?: (event?: React.MouseEvent) => void;
    className?: string;
  })[];
  className?: string;
};

const CompanyList = (props: CompanyDateListProps) => {
  const { companies, className = "" } = props;
  const { width } = useWindowSize();

  return (
    <div className={className}>
      {companies.map((company) => (
        <CompanyListItem
          label={company.name}
          onClick={company.onClick}
          item={
            company?.interviewDate && (
              <DateBox date={company.interviewDate} css={styles.date} />
            )
          }
          bottom={width < 600}
          className={company.className}
          key={company.id}
        />
      ))}
    </div>
  );
};

export default CompanyList;

const styles = {
  date: css`
    font-size: clamp(1rem, 1vw + 1rem, 2.25rem);
  `,
};
