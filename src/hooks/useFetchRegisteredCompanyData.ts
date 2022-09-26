import React from "react";

import { CompanyType } from "types";

import companyReducer, { Action } from "utils/reducer/companyReducer";

import testData from "data/testData";

export type CompanyDataWithUpDate = {
  registeredCompanyData: CompanyType[];
  dispatchRegisteredCompanyData: React.Dispatch<Action>;
};

type UseFetchRegisteredCompanyData = () => CompanyDataWithUpDate;

/**
 *データベースから取得した、ユーザが登録した企業情報データ及び企業情報の更新関数を返す関数
 *TODO 現在は、データをデータベースから取得していないので取得する必要がある
 *
 * @return データベースから取得した、ユーザが登録した企業情報データ及び企業情報の更新関数
 */
const useFetchRegisteredCompanyData: UseFetchRegisteredCompanyData = () => {
  const [registeredCompanyData, dispatchRegisteredCompanyData] =
    React.useReducer(companyReducer, []);
  React.useEffect(() => {
    dispatchRegisteredCompanyData({ type: "init", fetchCompanyData: testData });
  }, []);

  const companyDataWithUpDate = React.useMemo(
    () => ({ registeredCompanyData, dispatchRegisteredCompanyData }),
    [dispatchRegisteredCompanyData, registeredCompanyData],
  );

  return companyDataWithUpDate;
};

export default useFetchRegisteredCompanyData;
