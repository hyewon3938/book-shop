import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// Actions
import { getAuth } from "@/redux/actions/userActions";

export default function (SpecificComponent, option, adminRoute = null) {
  // option 값?
  // null => 아무나 출입 가능
  // true => 로그인한 유저만 출입 가능
  // false => 로그인한 유저는 출입 불가능

  // adminRoute 값?
  // true => admin만 출입가능

  function AuthenticationCheck() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
      dispatch(getAuth()).then((response) => {
        // 로그인하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) return history.push("/login");
        } else {
          // 로그인한 상태
          if (adminRoute && !response.payload.isAdmin) {
            return history.push("/");
          } else {
            if (option === false) return history.push("/");
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
