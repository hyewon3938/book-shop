import React from "react";

// Components
import Header from "@/components/Header/Header";

// Lib
import ScrollReset from "@/lib/ScrollReset";

export const withPathCheck = (path, Component) => {
  if (path === "/login" || path === "/register") {
    return (
      <ScrollReset>
        <Component />
      </ScrollReset>
    );
  } else {
    return (
      <ScrollReset>
        <Header />
        <Component />
      </ScrollReset>
    );
  }
};
