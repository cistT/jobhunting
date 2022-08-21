import { CompanyType } from "../types/index";

const testData: CompanyType[] = [
  {
    id: "1",
    name: "モーターヘッドモーターズ",
    interviewDate: new Date("2022/8/11"),
    internshipDate: new Date("2022/10/1"),
    result: "合格",
  },
  {
    id: "2",
    name: "山下商事",
    interviewDate: new Date("2022/7/10"),
    result: "合格",
  },
  {
    id: "3",
    name: "大日本銀行",
    internshipDate: new Date("2022/9/3"),
    result: "不合格",
  },
  {
    id: "4",
    name: "古海製薬",
    result: "未定",
  },
];

export default testData;
