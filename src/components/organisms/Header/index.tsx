import React from "react";

import { css } from "@emotion/react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import LoginButton from "components/atoms/Button/LoginButton";
import LogoutButton from "components/atoms/Button/LogoutButton";
import MenuButton from "components/atoms/Button/MenuButton";
import useWindowSize from "hooks/useWindowSize";

const Header = () => {
  const { width } = useWindowSize();

  const [isLogin, setIsLogin] = React.useState(false);
  const login = () => setIsLogin(true);
  const logout = () => setIsLogin(false);

  return (
    <AppBar>
      <Toolbar css={styles.toolbar}>
        {width <= 750 && <MenuButton />}

        <Typography variant="h6" component="div">
          就活管理アプリ
        </Typography>

        {isLogin ? (
          <LogoutButton onClick={logout} />
        ) : (
          <LoginButton onClick={login} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const styles = {
  toolbar: css`
    display: grid;
    @media (max-width: 750px) {
      grid-template-columns: 80px 1fr 100px;
    }
    @media (min-width: 751px) {
      grid-template-columns: 1fr 100px;
    }
  `,
};
