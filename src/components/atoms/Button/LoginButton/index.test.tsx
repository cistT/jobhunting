import React from "react";
import { render, screen } from "@testing-library/react";
import LoginButton from ".";

it("LoginButton", () => {
  const onClick = () => undefined;
  render(<LoginButton onClick={onClick} />);
  screen.debug();
});
