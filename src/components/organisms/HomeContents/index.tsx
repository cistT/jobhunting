import React from "react";

import { css } from "@emotion/react";

import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import AddIcon from "@mui/icons-material/Add";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Divider, Typography } from "@mui/material";

import IconList from "components/molecules/IconList";
import CompanyList, { CompanyListProps } from "../CompanyList";

import useWindowSize from "hooks/useWindowSize";

export type HomeContentsProps = CompanyListProps;

const HomeContents = (props: HomeContentsProps) => {
  const { companies } = props;

  const { width } = useWindowSize();
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
    <div css={width > 600 && styles.container}>
      {width > 600 && (
        <div css={styles.leftContainer}>
          <div></div>
          <IconList items={items} />
          <Divider />
        </div>
      )}
      <div css={styles.rightContainer}>
        <Typography variant="h1" component="h1" css={styles.title}>
          直近の予定
        </Typography>
        <Divider />
        <CompanyList companies={companies} />
      </div>
    </div>
  );
};

export default HomeContents;

const styles = {
  container: css`
    display: grid;
    grid-template-columns: 25vw 1fr;
    gap: 20px;
  `,
  leftContainer: css`
    display: grid;
    grid-template-rows: 40px 240px 0px;
    gap: 2.5px;
  `,
  rightContainer: css`
    text-align: center;
  `,
  listItem: css`
    width: 30vw;
  `,
  title: css`
    font-size: 32px;
    margin-bottom: 10px;
  `,
};
