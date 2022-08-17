import { CompaniesType } from "./../types/index.d";

const testData: CompaniesType[] = [
  {
    id: "1",
    name: "モーターヘッドモーターズ",
    interviewDate: new Date("2022/8/11"),
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
    interviewDate: new Date("2022/8/1"),
    result: "不合格",
  },
  {
    id: "4",
    name: "古海製薬",
    interviewDate: new Date("2022/9/29"),
    result: "未定",
  },
];

export default testData;
