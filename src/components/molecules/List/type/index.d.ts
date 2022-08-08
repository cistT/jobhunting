import { React } from "react";
type ListProps = {
  items: {
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }[];
  className?: string;
};

export default ListProps;
