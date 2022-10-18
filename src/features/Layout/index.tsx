import React from "react";

import { css } from "@emotion/react";

import Header from "features/Layout/Header";
import SideMenu from "features/Layout/SideMenu";
import FixedMenu, { Focus } from "features/Layout/FixedMenu";

import useWindowSize from "hooks/useWindowSize";

type LayoutProps = {
  children?: React.ReactNode;
  focus?: Focus;
};

const Layout = (props: LayoutProps) => {
  const { children, focus = "Home" } = props;
  const { width } = useWindowSize();

  return (
    <>
      <Header />

      <div css={styles.container(width > 600)}>
        {width > 600 && <SideMenu />}
        <main>{children}</main>
      </div>

      {width <= 600 && <FixedMenu focus={focus} />}
    </>
  );
};

export default Layout;

const styles = {
  container: (visible = false) => css`
    display: grid;
    grid-template-columns: ${visible ? "30% 1fr" : "1fr"};
    gap: 10px;
    margin-bottom: 100px;
  `,
};
