import React from "react";
import { CompanyType } from "types";
import temporarilySavedCompanyDataReducer, {
  Action,
} from "utils/reducer/temporarilySavedCompanyDataReducer";

export type TemporarilySavedCompanyDataWithUpdate = {
  temporarilySavedCompanyData: CompanyType;
  dispatchTemporarilySavedCompanyData: React.Dispatch<Action>;
};

export type UseTemporarilySavedCompanyData =
  () => TemporarilySavedCompanyDataWithUpdate;

/**
 * 企業の登録で一時的にデータの保存をおこなうHooks
 *
 * @returns 企業の登録で一時保存した回答と、回答を初期化・保存する処理
 */
const useTemporarilySavedCompanyData: UseTemporarilySavedCompanyData = () => {
  const [temporarilySavedCompanyData, dispatchTemporarilySavedCompanyData] =
    React.useReducer(
      temporarilySavedCompanyDataReducer,
      temporarilySavedCompanyDataReducer({} as CompanyType, { type: "init" }),
    );

  const temporarilySavedCompanyDataWithUpdate: TemporarilySavedCompanyDataWithUpdate =
    React.useMemo(
      () => ({
        temporarilySavedCompanyData,
        dispatchTemporarilySavedCompanyData,
      }),
      [temporarilySavedCompanyData],
    );

  return temporarilySavedCompanyDataWithUpdate;
};

export default useTemporarilySavedCompanyData;
