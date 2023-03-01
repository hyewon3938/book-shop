import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Images
import logo2 from "@/image/logo2.png";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// lib
import { deleteCookie } from "@/lib/cookies";

// Actions
import { getLogout } from "@/redux/actions/userActions";

// constants
import { category } from "@/constants/category";

const SideDrawer = ({ show, click, isAuth, userName }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutData = useSelector((state) => state.getLogout);
  let { logout, loading, error } = logoutData;

  const showSideDrawer = show ? "translateX(0)" : "translateX(-100%)";

  useEffect(() => {
    if (error) return alert("서버 에러입니다.");
    if (logout) {
      if (logout.success) {
        deleteCookie("x_auth");
        window.location.reload();
      }
    }
  }, [logoutData]);

  const menuClickHandler = (category) => {
    history.push(`/product/${category}`);
    click();
  };

  const loginClickHandler = () => {
    history.push(`/login`);
    click();
  };

  const logoutClickHandler = () => {
    dispatch(getLogout());
  };

  const registerClickHandler = () => {
    history.push(`/register`);
    click();
  };

  const myPageClickHandler = () => {
    history.push("/myPage");
    click();
  };

  return (
    <Wrap style={{ transform: showSideDrawer }}>
      {loading ? <LoadingWrap /> : ""}
      <ScrollWrap>
        <LogoImage>
          <img src={logo2} alt="logo" />
        </LogoImage>
        <MenuWrap>
          {!isAuth ? (
            <LogInInfo>
              <LogInTitle>로그인 해주세요.</LogInTitle>
              <LogInButtonWrap>
                <button onClick={loginClickHandler}>로그인</button>
                <button onClick={registerClickHandler}>회원가입</button>
              </LogInButtonWrap>
            </LogInInfo>
          ) : (
            <LogInInfo>
              <LogInTitle>{userName}님 안녕하세요!</LogInTitle>
              <LogInButtonWrap>
                <button onClick={myPageClickHandler}>마이페이지</button>
                <button onClick={logoutClickHandler}>로그아웃</button>
              </LogInButtonWrap>
            </LogInInfo>
          )}
          <Bar />
          {category.map((item, index) =>
            index === 0 ? (
              <li
                style={{ fontWeight: "bold" }}
                key={index}
                onClick={() => menuClickHandler(item)}
              >
                {item}
              </li>
            ) : (
              <li key={index} onClick={() => menuClickHandler(item)}>
                {item}
              </li>
            )
          )}
        </MenuWrap>
      </ScrollWrap>
    </Wrap>
  );
};

export default SideDrawer;

const Wrap = styled.div`
  position: relative;
  display: flex;
  width: 400px;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30000;
  transform: translateX(-100%);
  transition: all 0.3s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 30px 0 30px;
  @media (max-width: ${device.small}px) {
    width: 250px;
    justify-content: flex-start;
    padding: 50px 0 0 0;
  }
  @media (max-width: ${device.extraSmall}px) {
    width: 220px;
    padding: 30px 20px 0 10px;
  }
`;

const LoadingWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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
`;

const LogoImage = styled.div`
  margin: 0 0 30px 0;

  img {
    width: 100px;
  }
  @media (max-width: ${device.small}px) {
    display: none;
  }
`;

const MenuWrap = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0 20px 0;
  li {
    font-family: "NotoSerifKR";
    display: flex;
    width: 100%;
    font-size: 18px;
    margin: 0 0 20px 0;
    cursor: pointer;
    @media (hover: hover) {
      :hover {
        color: gray;
        transform: translateX(10px);
        transition: all 0.2s ease-out;
      }
    }
  }

  @media (max-width: ${device.small}px) {
    div {
      font-size: 20px;
    }
    li {
      font-size: 15px;
    }
  }
  @media (max-width: ${device.extraSmall}px) {
    div {
      font-size: 18px;
    }
    li {
      font-size: 13px;
    }
  }
`;

const LogInTitle = styled.div`
  display: block;
  font-size: 25px;
  font-weight: bold;
  margin: 0 0 20px 0;
  padding: 5px 0;
  line-height: 30px;
  word-wrap: break-word;
  width: 250px;
  @media (max-width: ${device.small}px) {
    width: 150px;
  }
  @media (max-width: ${device.extraSmall}px) {
    margin: 0 0 15px 0;
  }
`;

const LogInInfo = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  word-break: keep-all;
  width: 100%;
  button {
    cursor: pointer;
    -webkit-text-fill-color: #000;
    @media (hover: hover) {
      :hover {
        color: gray;
      }
    }
    @media (max-width: ${device.extraSmall}px) {
      font-size: 10px;
    }
  }
`;

const LogInButtonWrap = styled.div`
  display: flex;
`;

const Bar = styled.div`
  width: 100%;
  height: 1.5px;
  background: #cacba8;
  margin: 30px 0;
  @media (max-width: ${device.extraSmall}px) {
    margin: 20px 0;
  }
`;
