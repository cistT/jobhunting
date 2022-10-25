import React from "react";

import useIsSmartphone from "hooks/useIsSmartphone";

import BothEndsTextButton from "./BothEnds/BothEndsTextButton/BothEndsTextButton";
import VerticalArrangementTextButton from "./VerticalArrangement/VerticalArrangementTextButton/VerticalArrangementTextButton";

export type ListItemBothEndsTextButtonProps = Readonly<{
  label: string | undefined;
  explanation: string | undefined;
  underline?: boolean;
  onClick: (e?: React.MouseEvent) => void;
  className?: string;
}>;

const ListItemBothEndsTextButton = (props: ListItemBothEndsTextButtonProps) => {
  const {
    label = "",
    explanation = "",
    underline = false,
    onClick,
    className = "",
  } = props;
  const { isSmartphone } = useIsSmartphone();

  if (isSmartphone) {
    return (
      <VerticalArrangementTextButton
        upText={label}
        underText={explanation}
        underline={underline}
        onClick={onClick}
        className={className}
      />
    );
  }

  return (
    <BothEndsTextButton
      leftText={label}
      rightText={explanation}
      underline={underline}
      onClick={onClick}
      className={className}
    />
  );
};

export default ListItemBothEndsTextButton;
