import React from "react";

type ListItemProps = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  className?: string;
};

export default ListItemProps;
