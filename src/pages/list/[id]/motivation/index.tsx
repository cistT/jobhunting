import React from "react";

import { useForm } from "react-hook-form";

import { Companies } from "pages/_app";

import { CompanyType } from "types";

import useGetURLQuery from "hooks/useGetURLQuery";

import { TextField } from "@material-ui/core";
import { Button } from "@mui/material";

import DitailLayout from "components/templetes/DitailLayout/DitailLayout";

import styles from "./motivation.module.scss";

const Motivation = () => {
  const { register, handleSubmit } = useForm<CompanyType>();
  const { id } = useGetURLQuery("id");
  const { registeredCompanyData, dispatchRegisteredCompanyData } =
    React.useContext(Companies);
  const company = registeredCompanyData.filter((data) => data.id === id)[0];
  const onSubmit = (data: CompanyType) => {
    dispatchRegisteredCompanyData({
      type: "update",
      companyID: company.id,
      company: { ...company, motivation: data.motivation },
    });
  };

  return (
    <DitailLayout companyName={company?.name ?? ""}>
      <form className={styles["container"]} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="志望動機"
          defaultValue={company?.motivation ?? ""}
          multiline
          fullWidth
          minRows={5}
          maxRows={10}
          {...register("motivation")}
          className={styles["field"]}
        />
        <Button variant="outlined" className={styles["button"]} type="submit">
          保存
        </Button>
      </form>
    </DitailLayout>
  );
};

export default Motivation;
