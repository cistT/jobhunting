import React from "react";

import IconListItem, {
  IconListItemProps,
} from "features/Layout/SideMenu/IconList/IconListItem";

export type IconListProps = {
  items: IconListItemProps[];
  className?: string;
};

const IconList = (props: IconListProps) => {
  const { items, className = "" } = props;

  return (
    <div className={className}>
      {items.map(({ icon, label, onClick }) => (
        <IconListItem icon={icon} label={label} onClick={onClick} key={label} />
      ))}
    </div>
  );
};

export default IconList;
