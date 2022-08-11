import React from "react";

import CompanyListItem, {
  CompanyListItemProps,
} from "components/molecules/CompanyListItem";

export type CompanyListProps = {
  companies: (CompanyListItemProps & { id: string })[];
  className?: string;
};

const CompanyList = (props: CompanyListProps) => {
  const { companies, className = "" } = props;

  return (
    <div>
      {companies.map(({ label, date, className, id }) => (
        <CompanyListItem
          label={label}
          date={date}
          className={className}
          key={id}
        />
      ))}
    </div>
  );
};

export default CompanyList;
