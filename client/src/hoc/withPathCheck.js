import React from "react";

// Components
import Header from "@/components/Header/Header";

// Lib
import ScrollReset from "@/lib/ScrollReset";

export default function (Component) {
  function withPathCheck({ match }) {
    const path = match.path;

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
  }

  return withPathCheck;
}
