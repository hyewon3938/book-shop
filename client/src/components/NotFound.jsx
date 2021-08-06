import React from "react";
import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router-dom";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Images
import logo2 from "@/image/logo2.png";

const NotFound = () => {
  const history = useHistory();

  const logoClickHandler = () => {
    history.push("/");
  };

  return (
    <Wrap>
      <Contents>
        <Logo onClick={logoClickHandler}>
          <img src={logo2} />
        </Logo>
        <h1>404</h1>
        <h2>페이지를 찾을 수 없습니다.</h2>
      </Contents>
    </Wrap>
  );
};

export default NotFound;

const appear = keyframes`
from{
  opacity : 0;
  transform : translateY(100px);
}
to{
  opacity : 1
}
`;

const shaking = keyframes`
  to {
    transform : rotate(5deg)

  }
`;

const Wrap = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #f5f5ef;
`;

const Logo = styled.div`
  height: 100px;
  margin: 0 0 20px 0;
  cursor: pointer;
  animation: ${shaking} 0.5s infinite alternate ease-in-out;
  transform: rotate(-5deg);
  img {
    height: 100%;
  }
  @media (max-width: ${device.small}px) {
    height: 80px;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${appear} 0.5s ease-in-out;
  h1 {
    font-size: 90px;
    margin: 0 0 10px 0;
    font-weight: bold;
  }
  h2 {
    color: grey;
    font-size: 15px;
  }
  @media (max-width: ${device.small}px) {
    width: 250px;
    height: 250px;
    h1 {
      font-size: 50px;
    }
    h2 {
      font-size: 12px;
    }
  }
`;
