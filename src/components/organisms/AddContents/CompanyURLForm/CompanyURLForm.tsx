import React from "react";

import { css } from "@emotion/react";

import { useForm } from "react-hook-form";

import ListTitle from "components/molecules/ListTitle";
import QuestionHeadline from "components/atoms/Headline/QuestionHeadline";
import LabelField from "components/molecules/LabelField";
import TwoLinedButton from "components/molecules/TwoLinedButton";
import { LeftClick, RightClick } from "../type/ButtonClick";

export type CompanyURLFormProps = {
  rightClick: RightClick;
  leftClick: LeftClick;
};

const CompanyURLForm: React.FC<CompanyURLFormProps> = (props) => {
  const { rightClick, leftClick } = props;
  const { register, watch } = useForm();

  return (
    <>
      <ListTitle title="企業登録" />
      <QuestionHeadline headline="Step2 企業のURLを入力してください" />
      <LabelField
        label="ホームページURL"
        css={styles.field}
        register={register("companyUrl")}
      />
      <LabelField
        label="採用ページURL"
        css={styles.field}
        register={register("adoptionUrl")}
      />

      <TwoLinedButton
        rightLabel="次へ"
        leftLabel="戻る"
        rightClick={() =>
          rightClick({
            companyUrl: watch("companyUrl"),
            adoptionUrl: watch("adoptionUrl"),
          })
        }
        leftClick={leftClick}
        css={styles.buttonGroup}
      />
    </>
  );
};

export default CompanyURLForm;

const styles = {
  field: css`
    margin: 30px;
  `,
  buttonGroup: css`
    margin-top: 100px;
  `,
};
