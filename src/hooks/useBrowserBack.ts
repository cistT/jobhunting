import { useRouter } from "next/router";

type UseBrowserBack = () => {
  browserBack: () => void;
};

/**
 * ブラウザバックを行う関数を返す関数
 *
 * @return ブラウザバックを行う関数
 */
const useBrowserBack: UseBrowserBack = () => {
  const router = useRouter();

  return { browserBack: () => router.back() };
};

export default useBrowserBack;
