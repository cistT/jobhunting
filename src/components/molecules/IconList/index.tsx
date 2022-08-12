import React from "react";

import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

import IconListItem, {
  IconListItemProps,
} from "components/atoms/ListItem/IconListItem";

export type IconListProps = {
  items: IconListItemProps[];
  className?: string;
};

const IconList = (props: IconListProps) => {
  const { items, className = "" } = props;
  return (
    <div className={className}>
      {items.map(({ icon, label, onClick }, i) => (
        <IconListItem
          icon={icon}
          label={label}
          onClick={onClick}
          key={label + i}
        />
      ))}
    </div>
  );
};

export default IconList;
