import { useEffect, useState } from "react";

export const useScrollPosition = (): number => {
  const [scrollPosition, setSrollPosition] = useState(0);

  useEffect(() => {
    const handleVisibleButton = () => {
      const position = window.pageYOffset;
      setSrollPosition(position);
    };
    window.addEventListener("scroll", handleVisibleButton);

    return () => window.removeEventListener("scroll", handleVisibleButton);
  }, []);

  return scrollPosition;
};
