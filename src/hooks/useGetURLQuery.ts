import { useRouter } from "next/router";

type UseGetURLQuery = (query: string) => {
  [query: string]: string | string[] | undefined;
};

const useGetURLQuery: UseGetURLQuery = (query) => {
  const router = useRouter();

  return { [query]: router.query[query] };
};

export default useGetURLQuery;
