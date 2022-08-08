import React from "react";

import { css } from "@emotion/react";

import Header from "components/organisms/Header";
import FixedMenu from "components/organisms/FixedMenu";

import LayoutProps from "./type/index";
import useWindowSize from "hooks/useWindowSize";

const Layout = (props: LayoutProps) => {
  const { children, focus = "Home" } = props;
  const { width } = useWindowSize();
  return (
    <div css={styles.container}>
      <Header visible={width <= 600} />
      <main>{children}</main>

      {width <= 600 && <FixedMenu focus={focus} />}
    </div>
  );
};

export default Layout;

const styles = {
  container: css``,
};
