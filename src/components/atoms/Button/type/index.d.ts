import React from "react";

type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

type IconButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  className?: string;
};

export { ButtonProps, IconButtonProps };
