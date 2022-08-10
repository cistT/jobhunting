import React from "react";

import IconListItem from "components/atoms/ListItem/IconListItem";

import ListProps from "./type/index";

const List = (props: ListProps) => {
  const { items } = props;
  return (
    <>
      {items.map(({ icon, label, onClick }, i) => (
        <IconListItem
          icon={icon}
          label={label}
          onClick={onClick}
          key={label + i}
        />
      ))}
    </>
  );
};

export default List;
