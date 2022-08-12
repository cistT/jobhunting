import React from "react";

import { css } from "@emotion/react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import LoginButton from "components/atoms/Button/LoginButton";
import LogoutButton from "components/atoms/Button/LogoutButton";
import MenuButton from "components/atoms/Button/MenuButton";

export type HeaderProps = {
  visible?: boolean;
};

const Header = (props: HeaderProps) => {
  const { visible = false } = props;

  const [isLogin, setIsLogin] = React.useState(false);
  const login = () => setIsLogin(true);
  const logout = () => setIsLogin(false);

  return (
    <header css={styles.header}>
      <AppBar>
        <Toolbar css={styles.toolbar(visible)}>
          {visible && (
            <MenuButton onClick={() => undefined} css={styles.button} />
          )}

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
  toolbar: (visible: boolean) => css`
    width: 100vw;
    display: grid;
    grid-template-columns: ${visible ? "80px 1fr 100px" : "1fr 100px"};
  `,
  button: css`
    color: white;
  `,
  text: css`
    font-size: 30px;
    vertical-align: middle;
  `,
};
