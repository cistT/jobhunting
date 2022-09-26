import { CompanyType } from "types";

// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from "uuid";

export type State = CompanyType;
export type Action =
  | { type: "init" }
  | { type: "registerName"; input: { name: string } }
  | {
      type: "registerURL";
      input: {
        companyUrl?: string;
        adoptionUrl?: string;
      };
    }
  | {
      type: "registerEventDate";
      input: {
        explanatoryMeetingDate?: Date;
        interviewDate?: Date;
        internshipDate?: Date;
      };
    };

export type TemporarilySavedCompanyDataReducer = (
  state: State,
  action: Action,
) => CompanyType;

// 注意 :  志望動機を保存する処理がないのは、志望動機を登録する際は以前の質問までに入力されたデータとともに、
//        ユーザが登録したデータを管理する所に登録するためである
//        そのため、質問ー志望動機を登録する以降に登録するものがある場合は、
//        志望動機を登録する処理を書く必要がある
/**
 * 企業の登録にて、フォームに入力された内容を一時保存する処理
 *
 * @param {State} state 前回の質問までに登録された内容
 * @param {Action} action 質問に対する回答を保存する処理
 *
 * @return 保存した回答
 */
const temporarilySavedCompanyDataReducer: TemporarilySavedCompanyDataReducer = (
  state: State,
  action: Action,
) => {
  const id = uuidv4();
  switch (action.type) {
    case "init":
      return { id, name: "", result: "未定" } as CompanyType;
    case "registerName":
      return { ...state, name: action.input.name };
    case "registerURL":
      return {
        ...state,
        companyUrl: action.input.companyUrl,
        adoptionUrl: action.input.adoptionUrl,
      };
    case "registerEventDate":
      return {
        ...state,
        explanatoryMeetingDate: action.input.explanatoryMeetingDate,
        interviewDate: action.input.interviewDate,
        internshipDate: action.input.internshipDate,
      };
    default:
      return state;
  }
};

export default temporarilySavedCompanyDataReducer;
