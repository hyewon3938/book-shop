import React from "react";

const ScrollReset = ({ children }) => {
  window.scrollTo(0, 0);
  return <>{children}</>;
};

export default ScrollReset;
