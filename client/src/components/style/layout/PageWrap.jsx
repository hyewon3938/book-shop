import React from "react";
import styled from "styled-components";

const PageWrap = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default PageWrap;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 80px auto;
  padding: 1rem;
  @media (max-width: 600px) {
    margin: 65px auto;
    padding: 0;
  }
`;
