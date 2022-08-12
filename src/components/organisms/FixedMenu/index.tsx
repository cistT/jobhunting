import React from "react";

import { css } from "@emotion/react";

import AddButton from "components/atoms/Button/AddButton";
import CalenderButton from "components/atoms/Button/CalenderButton";
import HomeButton from "components/atoms/Button/HomeButton";
import ListButton from "components/atoms/Button/ListButton";

export type Focus = "Home" | "List" | "Add" | "Calender";

export type FixedMenuProps = {
  focus?: Focus;
};

const FixedMenu = (props: FixedMenuProps) => {
  const { focus = "Home" } = props;
  const hoge = () => undefined;
  return (
    <div css={styles.container}>
      <HomeButton onClick={hoge} css={styles.button(focus === "Home")} />
      <ListButton onClick={hoge} css={styles.button(focus === "List")} />
      <AddButton onClick={hoge} css={styles.button(focus === "Add")} />
      <CalenderButton
        onClick={hoge}
        css={styles.button(focus === "Calender")}
      />
    </div>
  );
};

export default FixedMenu;

const styles = {
  container: css`
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    position: fixed;
    bottom: 0;
    background-color: rgba(180, 180, 180, 0.1);
  `,
  button: (focused: boolean) => css`
    color: ${focused && "white"};
    background-color: ${focused && "#5f76f8;"};
    :hover {
      color: white;
      background-color: #5f76f8;
    }
  `,
};
