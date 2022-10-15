import React from "react";

import Link from "next/link";

import { useForm } from "react-hook-form";

import { CompanyType } from "types";
import { Action } from "utils/reducer/companyReducer";

import useBrowserBack from "hooks/useBrowserBack";

import { Button, ButtonGroup } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Radio from "components/molecules/Radio/Radio";
import LabelCalendarField from "components/molecules/LabelCalendarField/LabelCalendarField";
import LabelField from "components/molecules/LabelField";

import styles from "./CompanyEditForm.module.scss";

export type CompanyEditFormProps = {
  company: CompanyType;
  closeButtonHref: string;
  dispatchRegisteredCompanyData: React.Dispatch<Action>;
};

const CompanyEditForm = (props: CompanyEditFormProps) => {
  const { company, closeButtonHref, dispatchRegisteredCompanyData } = props;
  const { register, handleSubmit } = useForm<CompanyType>();

  const { browserBack } = useBrowserBack();

  const items: JSX.Element[] = [
    <LabelField
      label="ホームページURL"
      defaultValue={company?.homepageURL}
      register={register("homepageURL")}
      className={styles["field"]}
    />,
    <LabelField
      label="採用ページURL"
      defaultValue={company?.adoptionURL}
      register={register("adoptionURL")}
      className={styles["field"]}
    />,
    <LabelCalendarField
      label="説明会日"
      defaultValue={company?.explanatoryMeetingDate}
      register={register("explanatoryMeetingDate")}
      className={styles["field"]}
    />,
    <LabelCalendarField
      label="面接日"
      defaultValue={company?.interviewDate}
      register={register("interviewDate")}
      className={styles["field"]}
    />,
    <LabelCalendarField
      label="インターンシップ日"
      defaultValue={company?.internshipDate}
      register={register("internshipDate")}
      className={styles["field"]}
    />,
    <Radio
      radioForm={[
        {
          label: "合格",
          value: "合格",
        },
        {
          label: "不合格",
          value: "不合格",
        },
        {
          label: "未定",
          value: "未定",
        },
      ]}
      defaultCheck={company?.result ?? "未定"}
      register={register("result")}
      className={styles["field"]}
    />,
  ];

  const onSubmit = (data: CompanyType) => {
    dispatchRegisteredCompanyData({
      type: "update",
      companyID: company.id,
      company: { ...company, ...data },
    });
  };

  return (
    <div className={styles["container"]}>
      <Link href={closeButtonHref}>
        <Button className={styles["close-button"]} onClick={browserBack}>
          <CloseIcon className={styles["icon"]} />
        </Button>
      </Link>

      <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
        {items.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i}>{item}</div>
        ))}

        <ButtonGroup className={styles["button-group"]}>
          <Button type="submit" className={styles["button"]}>
            保存
          </Button>
          <Button className={styles["button"]} onClick={browserBack}>
            戻る
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
};

export default CompanyEditForm;
