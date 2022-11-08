import axios from "axios";
import { CompanyType } from "../../types/index.d";

const registerCompany = async (company: CompanyType) => {
  await axios({
    method: "POST",
    url: `${process.env.NEXT_PUBLIC_COMPANY_API_URL}/company/register/userID=1`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    data: { ...company },
  });
};

export default registerCompany;
