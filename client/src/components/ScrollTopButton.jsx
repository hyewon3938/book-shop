import React from "react";
import styled from "styled-components";

// utils
import { scrollToTop } from "@/lib/utils";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

const ScrollTopButton = () => {
  return (
    <Wrap onClick={scrollToTop}>
      <Icon className="fas fa-arrow-up"></Icon>
    </Wrap>
  );
};

export default ScrollTopButton;

const Wrap = styled.button`
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.7;
  border: solid 1px #c9c9c9;
  z-index: 50;
  @media (max-width: ${device.large}px) {
    right: 30px;
    bottom: 100px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
  @media (max-width: ${device.small}px) {
    right: 20px;
    bottom: 100px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
`;

const Icon = styled.i`
  font-size: 22px;
  color: rgba(0, 0, 0, 0.8);
  @media (max-width: ${device.large}px) {
    font-size: 18px;
  }
  @media (max-width: ${device.small}px) {
    font-size: 15px;
  }
`;
