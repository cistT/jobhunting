import React from "react";

import { useRouter } from "next/router";

import { css } from "@emotion/react";

import ListTitle from "components/molecules/ListTitle";
import QuestionHeadline from "components/atoms/Headline/QuestionHeadline";
import LabelField from "components/molecules/LabelField";
import TwoLinedButton from "components/molecules/TwoLinedButton";

const Step3 = () => {
  const router = useRouter();

  return (
    <>
      <ListTitle title="企業登録" />
      <QuestionHeadline headline="Step3 イベントの日程を入力してください" />
      <LabelField label="説明会" css={styles.field} />
      <LabelField label="面接" css={styles.field} />
      <LabelField label="インターンシップ" css={styles.field} />

      <TwoLinedButton
        rightLabel="次へ"
        leftLabel="戻る"
        rightClick={() => router.push("/add/step4")}
        leftClick={() => router.push("/add/step2")}
        css={styles.buttonGroup}
      />
    </>
  );
};

export default Step3;

const styles = {
  field: css`
    margin: 30px;
  `,
  buttonGroup: css`
    margin-top: 100px;
  `,
};
