export type CompanyType = {
  id: string;
  name: string;
  companyUrl?: string;
  adoptionUrl?: string;
  interviewDate?: Date;
  internshipDate?: Date;
  result: "合格" | "不合格" | "未定";
};
