import { act, renderHook } from "@testing-library/react";

import useFetchRegisteredCompanyData from "hooks/useFetchRegisteredCompanyData";

import { CompanyType } from "types";

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

describe("登録された企業情報を取得し、取得したデータと更新関数を提供するHooks", () => {
  test("初期値はtestData", () => {
    const { registeredCompanyData } = renderHook(() =>
      useFetchRegisteredCompanyData(),
    ).result.current;
    expect(registeredCompanyData).toEqual(testData);
  });

  test("初期化処理", () => {
    const { result } = renderHook(() => useFetchRegisteredCompanyData());

    expect(result.current.registeredCompanyData).toEqual(testData);
    act(() => {
      result.current.dispatchRegisteredCompanyData({
        type: "init",
        fetchCompanyData: [],
      });
    });

    expect(result.current.registeredCompanyData).toEqual([]);

    act(() => {
      result.current.dispatchRegisteredCompanyData({
        type: "init",
        fetchCompanyData: testData,
      });
    });

    expect(result.current.registeredCompanyData).toEqual(testData);
  });

  test("登録処理", () => {
    const { result } = renderHook(() => useFetchRegisteredCompanyData());
    act(() => {
      result.current.dispatchRegisteredCompanyData({
        type: "init",
        fetchCompanyData: [],
      });
    });
    const minimumNewCompanyData: CompanyType = {
      id: "1000",
      name: "田中商事",
      result: "未定",
    };
    act(() => {
      result.current.dispatchRegisteredCompanyData({
        type: "register",
        newCompanyData: minimumNewCompanyData,
      });
    });
    expect(result.current.registeredCompanyData).toEqual([
      minimumNewCompanyData,
    ]);
    const maximumNewCompanyData: CompanyType = {
      id: "9999",
      name: "佐藤商事",
      companyUrl: "http://localhost:8080",
      adoptionUrl: "http://localhost:80",
      interviewDate: new Date("2022/5/10"),
      internshipDate: new Date("2022/5/10"),
      result: "合格",
    };
    act(() => {
      result.current.dispatchRegisteredCompanyData({
        type: "register",
        newCompanyData: maximumNewCompanyData,
      });
    });
    expect(result.current.registeredCompanyData).toEqual([
      minimumNewCompanyData,
      maximumNewCompanyData,
    ]);
  });

  test("削除処理", () => {
    const { result } = renderHook(() => useFetchRegisteredCompanyData());
    act(() => {
      result.current.dispatchRegisteredCompanyData({
        type: "init",
        fetchCompanyData: testData,
      });
    });
    const deleteId = "1";
    act(() => {
      result.current.dispatchRegisteredCompanyData({
        type: "delete",
        companyId: deleteId,
      });
    });
    expect(result.current.registeredCompanyData).toEqual(
      testData.filter(
        (registeredCompanyData) => registeredCompanyData.id !== "1",
      ),
    );
    const noneCompanyId = "noneCompanyId";
    act(() => {
      result.current.dispatchRegisteredCompanyData({
        type: "delete",
        companyId: noneCompanyId,
      });
    });
    expect(result.current.registeredCompanyData).toEqual(
      testData.filter(
        (registeredCompanyData) => registeredCompanyData.id !== "1",
      ),
    );
  });
});
