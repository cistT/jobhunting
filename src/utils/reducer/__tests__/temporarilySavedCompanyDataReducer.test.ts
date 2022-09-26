import { CompanyType } from "types";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as uuid from "uuid";
import temporarilySavedCompanyDataReducer from "../temporarilySavedCompanyDataReducer";

const testData: CompanyType = {
  id: "1",
  name: "モーターヘッドモーターズ",
  interviewDate: new Date("2022/8/11"),
  internshipDate: new Date("2022/10/1"),
  result: "合格",
};

jest.mock("uuid");

// idは123に固定
describe("フォームに入力された企業情報を保存する関数", () => {
  const uuidSpy = jest.spyOn(uuid, "v4");
  uuidSpy.mockReturnValue("123");

  test("初期化処理", () => {
    const state = temporarilySavedCompanyDataReducer(testData, {
      type: "init",
    });
    expect(state).toEqual({ id: "123", name: "", result: "未定" });
  });

  test("企業の名前を登録する処理", () => {
    const state = temporarilySavedCompanyDataReducer(
      temporarilySavedCompanyDataReducer(testData, { type: "init" }),
      { type: "registerName", input: { name: "山下商事" } },
    );
    expect(state).toEqual({ id: "123", name: "山下商事", result: "未定" });
  });

  test("企業のURLを登録する処理", () => {
    const companyUrl = "http://localhost:8080";
    const adoptionUrl = "http://localhost:80";
    const preState = temporarilySavedCompanyDataReducer(
      temporarilySavedCompanyDataReducer(testData, { type: "init" }),
      { type: "registerName", input: { name: "山下商事" } },
    );
    const state = temporarilySavedCompanyDataReducer(preState, {
      type: "registerURL",
      input: {
        companyUrl,
        adoptionUrl,
      },
    });
    expect(state).toEqual({
      id: "123",
      name: "山下商事",
      result: "未定",
      companyUrl: "http://localhost:8080",
      adoptionUrl: "http://localhost:80",
    });
    const noneURLState = temporarilySavedCompanyDataReducer(preState, {
      type: "registerURL",
      input: {
        companyUrl: undefined,
        adoptionUrl: undefined,
      },
    });
    expect(noneURLState).toEqual({
      id: "123",
      name: "山下商事",
      result: "未定",
    });
  });

  test("企業のイベント日程を登録する処理", () => {
    const preState = temporarilySavedCompanyDataReducer(
      temporarilySavedCompanyDataReducer(testData, { type: "init" }),
      { type: "registerName", input: { name: "山下商事" } },
    );
    const state = temporarilySavedCompanyDataReducer(preState, {
      type: "registerEventDate",
      input: {
        explanatoryMeetingDate: new Date("2000/1/1"),
        interviewDate: new Date("2000/1/5"),
        internshipDate: new Date("2000/5/30"),
      },
    });
    expect(state).toEqual({
      ...preState,
      explanatoryMeetingDate: new Date("2000/1/1"),
      interviewDate: new Date("2000/1/5"),
      internshipDate: new Date("2000/5/30"),
    });
    const noneEventDateState = temporarilySavedCompanyDataReducer(preState, {
      type: "registerEventDate",
      input: {
        explanatoryMeetingDate: undefined,
        interviewDate: undefined,
        internshipDate: undefined,
      },
    });
    expect(noneEventDateState).toEqual({
      ...preState,
    });
  });
});
