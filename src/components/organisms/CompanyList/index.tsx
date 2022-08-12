import React from "react";

import CompanyListItem from "components/molecules/CompanyListItem";

import { companiesType } from "types";

export type CompanyListProps = {
  companies: (companiesType & {
    onClick?: React.MouseEventHandler<HTMLLIElement>;
    className?: string;
  })[];
  className?: string;
};

const CompanyList = (props: CompanyListProps) => {
  const { companies, className = "" } = props;

  return (
    <div className={className}>
      {companies.map(({ name, interviewDate, className, id }) => (
        <CompanyListItem
          label={name}
          date={interviewDate}
          className={className}
          key={id}
        />
      ))}
    </div>
  );
};

export default CompanyList;
