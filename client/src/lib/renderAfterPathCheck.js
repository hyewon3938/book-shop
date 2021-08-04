import React from "react";
import Header from "@/components/Header/Header";

export const renderAfterPathCheck = (path, Component) => {
  if (path === "/login" || path === "/register") {
    return (
      <>
        <Component />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Component />
      </>
    );
  }
};
