import { CompanyType } from "types";
import companyReducer from "../companyReducer";

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

describe("登録された会社情報を加工する処理", () => {
  test("初期化処理", () => {
    expect(
      companyReducer([], { type: "init", fetchCompanyData: testData }),
    ).toEqual(testData);
    expect(companyReducer([], { type: "init", fetchCompanyData: [] })).toEqual(
      [],
    );
  });

  test("登録処理", () => {
    const minimumNewCompanyData: CompanyType = {
      id: "1000",
      name: "田中商事",
      result: "未定",
    };
    expect(
      companyReducer(testData, {
        type: "register",
        newCompanyData: minimumNewCompanyData,
      }),
    ).toEqual([...testData, minimumNewCompanyData]);

    const maximumNewCompanyData: CompanyType = {
      id: "9999",
      name: "佐藤商事",
      homepageURL: "http://localhost:8080",
      adoptionURL: "http://localhost:80",
      interviewDate: new Date("2022/5/10"),
      internshipDate: new Date("2022/5/10"),
      motivation: "合格します",
      result: "合格",
    };
    expect(
      companyReducer(testData, {
        type: "register",
        newCompanyData: maximumNewCompanyData,
      }),
    ).toEqual([...testData, maximumNewCompanyData]);
  });
  test("削除処理", () => {
    const deleteId = "1";

    expect(
      companyReducer(testData, {
        type: "delete",
        companyId: deleteId,
      }),
    ).toEqual(testData.filter((data) => data.id !== "1"));

    const noneCompanyId = "noneCompanyId";
    expect(
      companyReducer(testData, {
        type: "delete",
        companyId: noneCompanyId,
      }),
    ).toEqual(testData);
  });

  test("更新処理", () => {
    const updatedCompany: CompanyType = {
      id: "1",
      name: "佐藤商事",
      homepageURL: "updated_Data",
      adoptionURL: "updated_Data",
      interviewDate: new Date("2100/12/31"),
      internshipDate: new Date("2100/1/1"),
      result: "不合格",
    };
    expect(
      companyReducer(testData, {
        type: "update",
        companyID: updatedCompany.id,
        company: updatedCompany,
      }),
    ).toEqual(
      testData.map((company) => {
        if (company.id === updatedCompany.id) {
          return updatedCompany;
        }

        return company;
      }),
    );
  });
});
