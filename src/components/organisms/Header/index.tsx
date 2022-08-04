import React from "react";

import { css } from "@emotion/react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import LoginButton from "components/atoms/Button/LoginButton";
import LogoutButton from "components/atoms/Button/LogoutButton";

const Header = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  const login = () => setIsLogin(true);
  const logout = () => setIsLogin(false);

  return (
    <AppBar>
      <Toolbar css={styles.toolbar}>
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
    display: flex;
    justify-content: space-between;
  `,
};
