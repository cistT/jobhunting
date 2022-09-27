import React from "react";

import { css } from "@emotion/react";

import { useForm } from "react-hook-form";

import ListTitle from "components/molecules/ListTitle";
import QuestionHeadline from "components/atoms/Headline/QuestionHeadline";
import LabelField from "components/molecules/LabelField";
import TwoLinedButton from "components/molecules/TwoLinedButton";

import { LeftClick, RightClick } from "../type/ButtonClick";

export type CompanyNameFormProps = {
  rightClick: RightClick;
  leftClick: LeftClick;
};

const CompanyNameForm: React.FC<CompanyNameFormProps> = (props) => {
  const { rightClick, leftClick } = props;
  const { register, watch } = useForm();

  return (
    <>
      <ListTitle title="企業登録" />
      <QuestionHeadline headline="Part1 企業名を入力してください" />
      <LabelField
        label="企業名"
        css={styles.field}
        register={register("name")}
      />

      <TwoLinedButton
        rightLabel="次へ"
        leftLabel="戻る"
        rightClick={() => rightClick({ name: watch("name") })}
        leftClick={leftClick}
        css={styles.buttonGroup}
      />
    </>
  );
};

export default CompanyNameForm;

const styles = {
  field: css`
    margin: 30px;
  `,
  buttonGroup: css`
    margin-top: 100px;
  `,
};
