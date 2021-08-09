import React from "react";
import styled from "styled-components";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

const PageWrap = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default PageWrap;

const Wrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 1300px;
  margin: 80px auto;
  @media (max-width: ${device.small}px) {
    margin: 65px auto;
  }
`;
