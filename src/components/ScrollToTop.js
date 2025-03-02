import { useEffect } from "react";

function ScrollToTop({ activeSection }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  return null;
}

export default ScrollToTop;
