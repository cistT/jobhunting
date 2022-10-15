import React from "react";

import useGetURLQuery from "hooks/useGetURLQuery";

import ListTitle from "components/molecules/ListTitle";
import DitailContentsDisplaySwitching from "components/organisms/DitailContentsDisplaySwitching/DitailContentsDisplaySwitching";

export type DitaliLayoutProps = {
  companyName: string;
  children: React.ReactNode;
  className?: string;
};

const DitailLayout = (props: DitaliLayoutProps) => {
  const { companyName, children, className } = props;
  const { id } = useGetURLQuery("id");
  const buttons = [
    { label: "基本情報", href: `/list/${id}` },
    { label: "志望動機", href: `/list/${id}/motivation` },
  ];

  return (
    <div className={className}>
      <ListTitle title={companyName} />
      <DitailContentsDisplaySwitching buttons={buttons} />
      {children}
    </div>
  );
};

export default DitailLayout;
