import React from "react";
import styled from "styled-components";

const LoadingIndicator = () => {
  return (
    <Wrap>
      <div>bookshop'.'</div>
    </Wrap>
  );
};

export default LoadingIndicator;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  font-size: 10px;
  div {
    letter-spacing: -2px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    border: solid 3px black;
    font-size: 18px;
  }
`;
