import TwoLinedButton from "components/molecules/TwoLinedButton";
import React from "react";

import { useRouter } from "next/router";

import { css } from "@emotion/react";
import ListTitle from "components/molecules/ListTitle";
import QuestionHeadline from "components/atoms/Headline/QuestionHeadline";
import { Typography } from "@mui/material";

const Finish = () => {
  const router = useRouter();

  return (
    <>
      <ListTitle title="企業登録" />
      <QuestionHeadline headline="登録が完了しました!" />
      <Typography variant="h3" component="h3" css={styles.text}>
        次に何をしますか?
      </Typography>
      <TwoLinedButton
        rightLabel="再び登録する"
        leftLabel="一覧画面へ移動"
        rightClick={() => router.push("/add")}
        leftClick={() => router.push("/list")}
        css={styles.buttonGroup}
      />
    </>
  );
};

export default Finish;

const styles = {
  text: css`
    text-align: center;
    font-size: 26px;
    margin-top: 20px;
  `,
  buttonGroup: css`
    margin-top: 100px;
  `,
};
