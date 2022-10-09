import { act, renderHook } from "@testing-library/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as uuid from "uuid";
import useTemporarilySavedCompanyData from "hooks/useTemporarilySavedCompanyData";

jest.mock("uuid");

describe("企業情報登録画面でフォームに入力したデータを一時保存するHooks", () => {
  const uuidSpy = jest.spyOn(uuid, "v4");
  uuidSpy.mockReturnValue("123");
  test("初期化処理", () => {
    const { result } = renderHook(() => useTemporarilySavedCompanyData());
    act(() => {
      result.current.dispatchTemporarilySavedCompanyData({ type: "init" });
    });
    expect(result.current.temporarilySavedCompanyData).toEqual({
      id: "123",
      name: "",
      result: "未定",
    });
  });
  test("名前の登録処理", () => {
    const { result } = renderHook(() => useTemporarilySavedCompanyData());
    act(() => {
      result.current.dispatchTemporarilySavedCompanyData({
        type: "registerName",
        input: { name: "山下商事" },
      });
    });
    expect(result.current.temporarilySavedCompanyData).toEqual({
      id: "123",
      name: "山下商事",
      result: "未定",
    });
  });
  test("URLの登録処理", () => {
    const { result } = renderHook(() => useTemporarilySavedCompanyData());
    act(() => {
      result.current.dispatchTemporarilySavedCompanyData({
        type: "registerName",
        input: { name: "山下商事" },
      });
    });
    act(() => {
      result.current.dispatchTemporarilySavedCompanyData({
        type: "registerURL",
        input: { homepageURL: undefined, adoptionURL: undefined },
      });
    });
    expect(result.current.temporarilySavedCompanyData).toEqual({
      id: "123",
      name: "山下商事",
      result: "未定",
    });
    act(() => {
      result.current.dispatchTemporarilySavedCompanyData({
        type: "registerURL",
        input: {
          homepageURL: "http://localhost:8080",
          adoptionURL: "http://localhost:80",
        },
      });
    });
    expect(result.current.temporarilySavedCompanyData).toEqual({
      id: "123",
      name: "山下商事",
      result: "未定",
      homepageURL: "http://localhost:8080",
      adoptionURL: "http://localhost:80",
    });
  });
  test("イベント日時の登録処理", () => {
    const { result } = renderHook(() => useTemporarilySavedCompanyData());
    act(() => {
      result.current.dispatchTemporarilySavedCompanyData({
        type: "registerName",
        input: { name: "山下商事" },
      });
    });
    act(() => {
      result.current.dispatchTemporarilySavedCompanyData({
        type: "registerEventDate",
        input: {
          explanatoryMeetingDate: undefined,
          interviewDate: undefined,
          internshipDate: undefined,
        },
      });
    });
    expect(result.current.temporarilySavedCompanyData).toEqual({
      id: "123",
      name: "山下商事",
      result: "未定",
    });
    act(() => {
      result.current.dispatchTemporarilySavedCompanyData({
        type: "registerEventDate",
        input: {
          explanatoryMeetingDate: new Date("2000/1/1"),
          interviewDate: new Date("2000/1/5"),
          internshipDate: new Date("2000/5/30"),
        },
      });
    });
    expect(result.current.temporarilySavedCompanyData).toEqual({
      id: "123",
      name: "山下商事",
      result: "未定",
      explanatoryMeetingDate: new Date("2000/1/1"),
      interviewDate: new Date("2000/1/5"),
      internshipDate: new Date("2000/5/30"),
    });
  });
});
