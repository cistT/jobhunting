import React from "react";

import ListTitle from "components/molecules/ListTitle";
import CompanyResultList, {
  CompanyResultListProps,
} from "../CompanyResultList";

export type ListContentsProps = CompanyResultListProps;

const ListContents = (props: ListContentsProps) => {
  const { companies, className = "" } = props;
  return (
    <>
      <ListTitle title="企業一覧" />
      <CompanyResultList companies={companies} className={className} />
    </>
  );
};

export default ListContents;
