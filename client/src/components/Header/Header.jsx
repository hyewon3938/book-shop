import React, { useState } from "react";
import styled from "styled-components";

// Components
import Navbar from "@/components/Header/Navbar";
import BackDrop from "@/components/Header/BackDrop";
import SideDrawer from "@/components/Header/SideDrawer";

const Header = () => {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
    </>
  );
};

export default Header;
