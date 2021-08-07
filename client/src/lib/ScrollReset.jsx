import React from "react";
import { useHistory } from "react-router";

const ScrollReset = ({ children }) => {
  const history = useHistory();

  if (history.action === "PUSH") window.scrollTo(0, 0);

  return <>{children}</>;
};

export default ScrollReset;
