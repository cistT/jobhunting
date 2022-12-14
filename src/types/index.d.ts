export type CompanyType = {
  id: string;
  name: string;
  homepageURL?: string;
  adoptionURL?: string;
  explanatoryMeetingDate?: Date;
  interviewDate?: Date;
  internshipDate?: Date;
  motivation?: string;
  result: "合格" | "不合格" | "未定";
};
