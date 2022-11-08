import axios from "axios";

const deleteCompany = async (userID: string, companyID: string) => {
  await axios({
    method: "DELETE",
    url: `${process.env.NEXT_PUBLIC_COMPANY_API_URL}/company/delete/userID=${userID}`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    data: { id: companyID },
  });
};

export default deleteCompany;
