import React, { useState } from "react";

// Components
import Navbar from "@/components/Header/Navbar";
import BackDrop from "@/components/Header/BackDrop";
import SideDrawer from "@/components/Header/SideDrawer";

const Header = () => {
  const [sideToggle, setSideToggle] = useState(false);

  sideToggle ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");

  return (
    <>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
    </>
  );
};

export default Header;
