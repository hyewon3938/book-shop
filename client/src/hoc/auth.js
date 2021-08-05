import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { withPathCheck } from "@/hoc/withPathCheck";

// Actions
import { getAuth } from "@/redux/actions/userActions";

export default function (SpecificComponent, option, adminRoute = null) {
  // option 값?
  // null => 아무나 출입 가능
  // true => 로그인한 유저만 출입 가능
  // false => 로그인한 유저는 출입 불가능

  // adminRoute 값?
  // true => admin만 출입가능

  function AuthenticationCheck({ match, history }) {
    const dispatch = useDispatch();

    const path = match.path;

    const authData = useSelector((state) => state.auth);
    let { auth, loading, error } = authData;

    useEffect(() => {
      dispatch(getAuth());

      if (!auth) return;
      if (!auth.isAuth) {
        if (option) history.push("/login");
      } else {
        if (adminRoute && !auth.isAdmin) {
          return history.push("/");
        } else {
          if (option === false) return history.push("/");
        }
      }
    }, []);

    return withPathCheck(path, SpecificComponent);
  }

  return AuthenticationCheck;
}
