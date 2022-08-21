import React from "react";

import { useRouter } from "next/router";

import { css } from "@emotion/react";

import ListTitle from "components/molecules/ListTitle";
import QuestionHeadline from "components/atoms/Headline/QuestionHeadline";
import LabelField from "components/molecules/LabelField";
import TwoLinedButton from "components/molecules/TwoLinedButton";

const Step1 = () => {
  const router = useRouter();

  return (
    <>
      <ListTitle title="企業登録" />
      <QuestionHeadline headline="Part1 企業名を入力してください" />
      <LabelField label="企業名" css={styles.field} />

      <TwoLinedButton
        rightLabel="次へ"
        leftLabel="戻る"
        rightClick={() => router.push("/add/step2")}
        leftClick={() => router.push("/list")}
        css={styles.buttonGroup}
      />
    </>
  );
};

export default Step1;

const styles = {
  field: css`
    margin: 30px;
  `,
  buttonGroup: css`
    margin-top: 100px;
  `,
};
