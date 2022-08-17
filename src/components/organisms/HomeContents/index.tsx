import React from "react";

import ListTitle from "components/molecules/ListTitle";
import CompanyDateList, { CompanyDateListProps } from "../CompanyDateList";

export type HomeContentsProps = CompanyDateListProps;

const HomeContents = (props: HomeContentsProps) => {
  const { companies } = props;

  return (
    <>
      <ListTitle title="直近の予定" />
      <CompanyDateList companies={companies} />
    </>
  );
};

export default HomeContents;
