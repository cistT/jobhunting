import React from "react";

import DateBox from "components/atoms/Box/DateBox";
import CompanyListItem from "components/molecules/CompanyListItem";

import { CompaniesType } from "types";

export type CompanyDateListProps = {
  companies: (CompaniesType & {
    onClick?: React.MouseEventHandler<HTMLLIElement>;
    className?: string;
  })[];
  className?: string;
};

const CompanyList = (props: CompanyDateListProps) => {
  const { companies, className = "" } = props;

  return (
    <div className={className}>
      {companies.map(({ name, interviewDate, className, id }) => (
        <CompanyListItem
          label={name}
          rightItem={<DateBox date={interviewDate} />}
          className={className}
          key={id}
        />
      ))}
    </div>
  );
};

export default CompanyList;
