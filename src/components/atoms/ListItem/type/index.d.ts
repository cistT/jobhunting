import React from "react";

type ListItemProps = {
  label: string;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  className?: string;
};

export default ListItemProps;
