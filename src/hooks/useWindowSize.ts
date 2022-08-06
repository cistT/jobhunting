import React, { useLayoutEffect } from "react";

const useWindowSize = () => {
  const [size, setSize] = React.useState([0, 0]);

  useLayoutEffect(() => {
    const updateSize = () => {
      const { innerWidth, innerHeight } = window;
      setSize([innerWidth, innerHeight]);
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return { width: size[0], height: size[1] };
};

export default useWindowSize;
