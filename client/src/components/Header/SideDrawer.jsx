import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

// Images
import logo2 from "@/image/logo2.png";

const SideDrawer = ({ show, click }) => {
  const history = useHistory();

  const category = [
    "전체보기",
    "소설",
    "시",
    "에세이",
    "자기계발",
    "사회 정치",
    "예술",
    "여행",
    "과학",
  ];
  const isLogin = true;

  const showSideDrawer = show ? "translateX(0)" : "translateX(-100%)";

  const menuClickHandler = (category) => {
    history.push(`/product/${category}`);
    click();
  };

  return (
    <Wrap style={{ transform: showSideDrawer }}>
      <ScrollWrap>
        <LogoImage>
          <img src={logo2} alt="logo" />
        </LogoImage>
        <MenuWrap>
          {isLogin ? (
            <LogInInfo>
              <div>이혜원님 안녕하세요!</div>
              <div>
                <button>주문내역</button>
                <button>로그아웃</button>
              </div>
            </LogInInfo>
          ) : (
            <LogInInfo>
              <div>로그인 해주세요.</div>
              <div>
                <button>로그인</button>
                <button>회원가입</button>
              </div>
            </LogInInfo>
          )}

          <Bar />

          {category.map((item, index) => (
            <li key={index} onClick={() => menuClickHandler(item)}>
              {item}
            </li>
          ))}
        </MenuWrap>
      </ScrollWrap>
    </Wrap>
  );
};

export default SideDrawer;

const Wrap = styled.div`
  display: flex;
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
  padding: 40px 30px;

  @media (max-width: 600px) {
    width: 280px;
  }
  @media (max-width: 320px) {
    width: 200px;
  }
`;

const ScrollWrap = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
  ::-webkit-overflow-scrolling {
    -webkit-overflow-scrolling: touch;
  }
  margin: 0 0 50px 0;
`;

const LogoImage = styled.div`
  margin: 0 0 30px 0;

  img {
    width: 120px;
  }
  @media (max-height: 600px) {
    display: none;
  }
`;

const MenuWrap = styled.ul`
  display: flex;
  flex-direction: column;
  div {
    font-size: 25px;
    font-weight: bold;
    margin: 0 0 20px 0;
  }
  li {
    font-family: "Eulyoo1945-Regular";
    display: flex;
    width: 100%;
    font-size: 20px;
    margin: 0 0 20px 0;
    cursor: pointer;
    &:hover {
      color: gray;
      transform: translateX(10px);
      transition: all 0.2s ease-out;
    }
  }
  @media (max-width: 600px) {
    div {
      font-size: 20px;
    }
    li {
      font-size: 15px;
    }
  }
  @media (max-width: 320px) {
    div {
      font-size: 18px;
    }
    li {
      font-size: 13px;
    }
  }
`;

const LogInInfo = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    button {
      cursor: pointer;
      &:hover {
        color: gray;
      }
    }
  }
`;

const Bar = styled.div`
  width: 80%;
  height: 1.5px;
  background: #cacba8;
`;
