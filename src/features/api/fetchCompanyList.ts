import axios from "axios";
import { CompanyType } from "types";

const fetchCompanyList = async () => {
  const res = await axios<{ companyData: CompanyType[] }>({
    url: `${process.env.NEXT_PUBLIC_COMPANY_API_URL}/company/userID=1`,
    method: "get",
  });

  return res.data.companyData;
};

export default fetchCompanyList;
