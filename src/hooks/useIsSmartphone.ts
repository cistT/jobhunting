import useWindowSize from "./useWindowSize";

const useIsSmartphone = () => {
  const { width } = useWindowSize();
  if (width <= 600) {
    return { isSmartphone: true };
  }

  return { isSmartphone: false };
};

export default useIsSmartphone;
