import { cleanup } from "@testing-library/react";
import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

let options = {
  damping: 0.001,
};

const Scroll = () => {
  useEffect(() => {
    Scrollbar.init(document.body, options);
  }, []);

  return null;
};

export default Scroll;
