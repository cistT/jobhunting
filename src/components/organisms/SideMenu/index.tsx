import React from "react";

import { css } from "@emotion/react";

import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import AddIcon from "@mui/icons-material/Add";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Divider } from "@mui/material";

import IconList from "components/molecules/IconList";

const SideMenu = () => {
  const onClickHoge = () => undefined;
  const items = [
    {
      icon: <HomeIcon />,
      label: "Home",
      onClick: onClickHoge,
    },
    {
      icon: <ListIcon />,
      label: "企業一覧",
      onClick: onClickHoge,
    },
    {
      icon: <AddIcon />,
      label: "企業の追加",
      onClick: onClickHoge,
    },
    {
      icon: <CalendarMonthIcon />,
      label: "予定",
      onClick: onClickHoge,
    },
  ];

  return (
    <div css={styles.container}>
      <div />
      <IconList items={items} />
      <Divider />
    </div>
  );
};

export default SideMenu;

const styles = {
  container: css`
    display: grid;
    grid-template-rows: 40px 240px 0px;
    gap: 2.5px;
  `,
};
