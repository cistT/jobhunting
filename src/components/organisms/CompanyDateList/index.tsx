import React from "react";

import DateBox from "components/atoms/Box/DateBox";
import CompanyListItem from "components/molecules/CompanyListItem";

import { CompanyType } from "types";

export type CompanyDateListProps = {
  companies: (CompanyType & {
    onClick?: (event?: React.MouseEvent) => void;
    className?: string;
  })[];
  className?: string;
};

const CompanyList = (props: CompanyDateListProps) => {
  const { companies, className = "" } = props;

  return (
    <div className={className}>
      {companies.map((company) => (
        <CompanyListItem
          label={company.name}
          onClick={company.onClick}
          rightItem={
            company?.interviewDate && <DateBox date={company.interviewDate} />
          }
          className={company.className}
          key={company.id}
        />
      ))}
    </div>
  );
};

export default CompanyList;
