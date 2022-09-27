import React from "react";

import { css } from "@emotion/react";

import { useForm } from "react-hook-form";

import ListTitle from "components/molecules/ListTitle";
import QuestionHeadline from "components/atoms/Headline/QuestionHeadline";

import TwoLinedButton from "components/molecules/TwoLinedButton";

import LabelCalendarField from "components/molecules/LabelCalendarField/LabelCalendarField";
import { LeftClick, RightClick } from "../type/ButtonClick";

export type CompanyDateFormProps = {
  rightClick: RightClick;
  leftClick: LeftClick;
};

const CompanyDateForm: React.FC<CompanyDateFormProps> = (props) => {
  const { rightClick, leftClick } = props;
  const { register, watch } = useForm();

  return (
    <>
      <ListTitle title="企業登録" />
      <QuestionHeadline headline="Step3 イベントの日程を入力してください" />
      <LabelCalendarField
        label="説明会"
        css={styles.field}
        register={register("explanatoryMeetingDate")}
      />
      <LabelCalendarField
        label="面接"
        css={styles.field}
        register={register("interviewDate")}
      />
      <LabelCalendarField
        label="インターンシップ"
        css={styles.field}
        register={register("internshipDate")}
      />

      <TwoLinedButton
        rightLabel="次へ"
        leftLabel="戻る"
        rightClick={() =>
          rightClick({
            explanatoryMeetingDate: new Date(watch("explanatoryMeetingDate")),
            interviewDate: new Date(watch("interviewDate")),
            internshipDate: new Date(watch("internshipDate")),
          })
        }
        leftClick={leftClick}
        css={styles.buttonGroup}
      />
    </>
  );
};

export default CompanyDateForm;

const styles = {
  field: css`
    margin: 30px;
  `,
  buttonGroup: css`
    margin-top: 100px;
  `,
};
