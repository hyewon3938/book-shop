import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Components
import Navbar from "@/components/Header/Navbar";
import BackDrop from "@/components/Header/BackDrop";
import SideDrawer from "@/components/Header/SideDrawer";

const Header = () => {
  const authData = useSelector((state) => state.auth);
  let { auth, loading, error } = authData;

  const [sideToggle, setSideToggle] = useState(false);

  sideToggle ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");

  return (
    <>
      {loading || !auth ? (
        <>
          <Navbar click={() => setSideToggle(true)} />
          <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
          <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
        </>
      ) : (
        <>
          <Navbar click={() => setSideToggle(true)} isAuth={auth.isAuth} />
          <SideDrawer
            show={sideToggle}
            click={() => setSideToggle(false)}
            isAuth={auth.isAuth}
            userName={auth.name}
          />
          <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
        </>
      )}
    </>
  );
};

export default Header;
