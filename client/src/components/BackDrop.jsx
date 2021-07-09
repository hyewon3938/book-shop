import React from "react";
import styled from "styled-components";

const BackDrop = ({ show, click }) => {
  return show && <Wrap onClick={click}></Wrap>;
};

export default BackDrop;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
`;
