import React from "react";

import { useRouter } from "next/router";

import { css } from "@emotion/react";

import ListTitle from "components/molecules/ListTitle";
import QuestionHeadline from "components/atoms/Headline/QuestionHeadline";
import LabelField from "components/molecules/LabelField";
import TwoLinedButton from "components/molecules/TwoLinedButton";

const Step2 = () => {
  const router = useRouter();

  return (
    <>
      <ListTitle title="企業登録" />
      <QuestionHeadline headline="Step2 企業のURLを入力してください" />
      <LabelField label="ホームページURL" css={styles.field} />
      <LabelField label="採用ページURL" css={styles.field} />

      <TwoLinedButton
        rightLabel="次へ"
        leftLabel="戻る"
        rightClick={() => router.push("/add/step3")}
        leftClick={() => router.push("/add")}
        css={styles.buttonGroup}
      />
    </>
  );
};

export default Step2;

const styles = {
  field: css`
    margin: 30px;
  `,
  buttonGroup: css`
    margin-top: 100px;
  `,
};
