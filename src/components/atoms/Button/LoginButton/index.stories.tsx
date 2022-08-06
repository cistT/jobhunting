import React from "react";

import { css } from "@emotion/react";

import { ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import LoginButton from ".";

export default {
  title: "Button/LoginButton",
  component: LoginButton,
} as ComponentMeta<typeof LoginButton>;

export const Original = () => {
  const login = action("login");

  const [isLogged, setIsLogged] = React.useState(false);
  const onClick = (e: React.MouseEvent) => {
    setIsLogged(!isLogged);
    login(e, !isLogged);
  };

  return <LoginButton onClick={onClick} />;
};

export const Header = () => {
  const login = action("login");

  const [isLogged, setIsLogged] = React.useState(false);
  const onClick = (e: React.MouseEvent) => {
    setIsLogged(!isLogged);
    login(e, !isLogged);
  };

  return <LoginButton onClick={onClick} css={styles.header} />;
};

const styles = {
  header: css`
    color: white;
    background-color: #3f51b5;
  `,
};
