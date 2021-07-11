import React from "react";
import styled from "styled-components";

const SideDrawer = ({ show, click }) => {
  const showSideDrawer = show ? "translateX(0)" : "translateX(-100%)";

  return <Wrap style={{ transform: showSideDrawer }}></Wrap>;
};

export default SideDrawer;

const Wrap = styled.div`
  width: 400px;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  transform: translateX(-100%);
  transition: all 0.3s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 40%;
  }
  @media (max-width: 780px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 60%;
  }
`;
