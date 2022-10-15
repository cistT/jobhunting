import { CompanyType } from "types";

export type State = CompanyType[];

export type Action =
  | {
      type: "init";
      fetchCompanyData: CompanyType[];
    }
  | {
      type: "register";
      newCompanyData: CompanyType;
    }
  | {
      type: "delete";
      companyId: string;
    }
  | {
      type: "update";
      companyID: string;
      company: CompanyType;
    };

/**
 * 登録した企業情報を更新する関数
 *
 * @param {State} state 更新前の状態
 * @param {Action} action 状態の処理と処理に必要なデータ
 *
 * @return  更新後の状態
 */
const companyReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "init":
      return action.fetchCompanyData;
    case "register":
      return [...state, action.newCompanyData];
    case "delete":
      return state.filter((data) => data.id !== action.companyId);
    case "update":
      return [
        ...state.map((data) => {
          if (data.id === action.companyID) {
            return action.company;
          }

          return data;
        }),
      ];
    default:
      return state;
  }
};

export default companyReducer;
