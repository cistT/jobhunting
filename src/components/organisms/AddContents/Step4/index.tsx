import React from "react";

import { useRouter } from "next/router";

import { css } from "@emotion/react";

import ListTitle from "components/molecules/ListTitle";
import QuestionHeadline from "components/atoms/Headline/QuestionHeadline";
import LabelField from "components/molecules/LabelField";
import TwoLinedButton from "components/molecules/TwoLinedButton";

const Step4 = () => {
  const router = useRouter();

  return (
    <>
      <ListTitle title="企業登録" />
      <QuestionHeadline headline="Step4 志望動機を入力してください" />
      <LabelField label="志望動機" css={styles.field} />

      <TwoLinedButton
        rightLabel="登録する"
        leftLabel="戻る"
        rightClick={() => router.push("/add/finish")}
        leftClick={() => router.push("/add/step3")}
        css={styles.buttonGroup}
      />
    </>
  );
};

export default Step4;

const styles = {
  field: css`
    margin: 30px;
  `,
  buttonGroup: css`
    margin-top: 100px;
  `,
};
