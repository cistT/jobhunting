import React from "react";

import { UseFormRegisterReturn } from "react-hook-form";
import classNames from "classnames";

import useCheckRadioButton from "hooks/useCheckRadioButton";

import { Typography } from "@mui/material";

import styles from "./Radio.module.scss";

export type RadioProps = {
  radioForm: {
    label: string;
    value: string | number;
  }[];
  defaultCheck: string | number;
  register: UseFormRegisterReturn;
  className?: string;
};

const Radio = (props: RadioProps) => {
  const { radioForm, className, defaultCheck, register } = props;
  const { checked, changeRadioValue } = useCheckRadioButton(defaultCheck);

  return (
    <div className={classNames(className, styles["container"])}>
      <Typography variant="h3" component="h3" className={styles["header"]}>
        合否
      </Typography>
      <div className={styles["radio-form"]}>
        {radioForm.map((radio, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} className={styles["radio-group"]}>
            <label htmlFor={i.toString()} className={styles["radio-label"]}>
              {radio.label}
            </label>
            <input
              {...register}
              type="radio"
              value={radio.value}
              onChange={changeRadioValue}
              id={i.toString()}
              checked={radio.value === checked}
              className={styles["radio-button"]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
