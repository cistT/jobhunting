import React from "react";

import { useForm } from "react-hook-form";

import { CompanyType } from "types";

import usePostCompany from "hooks/usePostCompany";

import { TextField } from "@material-ui/core";
import { Button } from "@mui/material";

import DitailLayout from "components/templetes/DitailLayout/DitailLayout";

import { GetServerSideProps } from "next";
import fetchCompanyDetail from "features/api/fetchCompanyDetail";
import styles from "./motivation.module.scss";

type SSRProps = {
  company: CompanyType;
};

const Motivation = (props: SSRProps) => {
  const { company } = props;

  const { register, handleSubmit } = useForm<CompanyType>();

  const { postCompany } = usePostCompany();

  const onSubmit = (data: CompanyType) => {
    postCompany({ ...company, motivation: data.motivation });
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

export const getServerSideProps: GetServerSideProps<SSRProps> = async (
  context,
) => {
  const id = (context?.params?.id as string) ?? "";
  const company = await fetchCompanyDetail(id);

  return {
    props: { company },
  };
};
