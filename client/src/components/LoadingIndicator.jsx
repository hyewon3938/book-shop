import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingIndicator = () => {
  return (
    <Wrap>
      <p>Loading...</p>
      {/* <Box>
        <Back>
          <Front>'.'</Front>
        </Back>
      </Box>
      <p>Loading...</p> */}
    </Wrap>
  );
};

export default LoadingIndicator;

const rotation = keyframes`
    from {
        transform : scale(1)
    }
    50%{
        transform : scale(1.4)

    }
    to {
        transform : scale(1)

    }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  font-size: 10px;
  p {
    margin: 25px 0 0 0;
  }
`;

const Box = styled.div`
  animation: ${rotation} 1s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90px;
  height: 80px;
`;

const Back = styled.div`
  width: 60px;
  height: 100%;
  background: #cacba8;
`;

const Front = styled.div`
  position: absolute;
  left: 0;
  top: 20px;
  width: 100%;
  height: 40px;
  background: #d8d9c0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 27px;
  font-weight: bold;
  letter-spacing: -2px;
`;
