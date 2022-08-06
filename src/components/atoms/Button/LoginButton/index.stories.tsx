import React from "react";

import { ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import LoginButton from ".";

export default {
  title: "Button/LoginButton",
  component: LoginButton,
} as ComponentMeta<typeof LoginButton>;

export const Primary = () => {
  const login = action("login");

  const [isLogged, setIsLogged] = React.useState(false);
  const onClick = (e: React.MouseEvent) => {
    setIsLogged(!isLogged);
    login(e, !isLogged);
  };

  return <LoginButton onClick={onClick} />;
};
