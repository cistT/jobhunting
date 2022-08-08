import TextListItem from "components/atoms/ListItem/TextListItem";
import React from "react";

import ListProps from "./type/index";

const List = (props: ListProps) => {
  const { items } = props;
  return (
    <>
      {items.map(({ label, onClick }, i) => (
        <TextListItem label={label} onClick={onClick} key={label + i} />
      ))}
    </>
  );
};

export default List;
