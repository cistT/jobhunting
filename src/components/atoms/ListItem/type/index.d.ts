import React from "react";

type IconListItemProps = {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  label: string;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  className?: string;
};

export default IconListItemProps;
