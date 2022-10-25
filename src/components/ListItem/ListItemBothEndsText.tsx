import React from "react";

import useIsSmartphone from "hooks/useIsSmartphone";

import BothEndsText from "./BothEnds/BothEndsText/BothEndsText";
import VerticalArrangementText from "./VerticalArrangement/VerticalArrangementText/VerticalArrangementText";

export type ListItemBothEndsTextProps = Readonly<{
  label: string | undefined;
  explanation: string | undefined;
  underline?: boolean;
  className?: string;
}>;

const ListItemBothEndsText = (props: ListItemBothEndsTextProps) => {
  const {
    label = "",
    explanation = "",
    underline = false,
    className = "",
  } = props;
  const { isSmartphone } = useIsSmartphone();

  if (isSmartphone) {
    return (
      <VerticalArrangementText
        upText={label}
        underText={explanation}
        underline={underline}
        className={className}
      />
    );
  }

  return (
    <BothEndsText
      leftText={label}
      rightText={explanation}
      underline={underline}
      className={className}
    />
  );
};

export default ListItemBothEndsText;
