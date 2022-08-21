import React from "react";

import { useRouter } from "next/router";

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

  const router = useRouter();

  return (
    <div css={styles.container}>
      <HomeButton
        onClick={() => router.push("/")}
        css={styles.button(focus === "Home")}
      />
      <ListButton
        onClick={() => router.push("/list")}
        css={styles.button(focus === "List")}
      />
      <AddButton
        onClick={() => router.push("/add")}
        css={styles.button(focus === "Add")}
      />
      <CalenderButton
        onClick={() => router.push("/schedule")}
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
