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
    <header css={styles.header}>
      <AppBar>
        <Toolbar css={styles.toolbar}>
          <Typography variant="h1" component="h1" css={styles.text}>
            就活管理アプリ
          </Typography>

          {isLogin ? (
            <LogoutButton onClick={logout} css={styles.button} />
          ) : (
            <LoginButton onClick={login} css={styles.button} />
          )}
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;

const styles = {
  header: css`
    padding-bottom: 80px;
  `,
  toolbar: css`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  `,
  text: css`
    font-size: 30px;
    vertical-align: middle;
    flex-basis: 8;
  `,
  button: css`
    color: white;
    flex-basis: 2;
  `,
};
