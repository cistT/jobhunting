import { React } from "react";

type Focus = "Home" | "List" | "Add" | "Calender";

type LayoutProps = {
  children?: React.ReactNode;
  focus?: Focus;
};

export default LayoutProps;
