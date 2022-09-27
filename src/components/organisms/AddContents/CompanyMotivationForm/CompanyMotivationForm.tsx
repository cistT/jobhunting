import React from "react";

import { css } from "@emotion/react";

import { useForm } from "react-hook-form";

import ListTitle from "components/molecules/ListTitle";
import QuestionHeadline from "components/atoms/Headline/QuestionHeadline";
import LabelField from "components/molecules/LabelField";
import TwoLinedButton from "components/molecules/TwoLinedButton";

import { LeftClick, RightClick } from "../type/ButtonClick";

export type CompanyMotivationFormProps = {
  rightClick: RightClick;
  leftClick: LeftClick;
};

const CompanyMotivationForm: React.FC<CompanyMotivationFormProps> = (props) => {
  const { rightClick, leftClick } = props;
  const { register, watch } = useForm();

  return (
    <>
      <ListTitle title="企業登録" />
      <QuestionHeadline headline="Step4 志望動機を入力してください" />
      <LabelField
        label="志望動機"
        register={register("motivation")}
        css={styles.field}
      />

      <TwoLinedButton
        rightLabel="登録する"
        leftLabel="戻る"
        rightClick={() => rightClick({ motivation: watch("motivation") })}
        leftClick={leftClick}
        css={styles.buttonGroup}
      />
    </>
  );
};

export default CompanyMotivationForm;

const styles = {
  field: css`
    margin: 30px;
  `,
  buttonGroup: css`
    margin-top: 100px;
  `,
};
