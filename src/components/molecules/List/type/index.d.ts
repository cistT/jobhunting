import { React } from "react";
type ListProps = {
  items: {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
      muiName: string;
    };
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }[];
  className?: string;
};

export default ListProps;
