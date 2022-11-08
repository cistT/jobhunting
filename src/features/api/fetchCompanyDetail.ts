import axios from "axios";
import { CompanyType } from "types";

const fetchCompanyDetail = async (id: string) => {
  const res = await axios<CompanyType>({
    url: `${process.env.NEXT_PUBLIC_COMPANY_API_URL}/company/userID=1/id=${id}`,
    method: "get",
  });

  return res.data;
};

export default fetchCompanyDetail;
