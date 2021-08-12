import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Actions
import { postLogin, removeLoginData } from "@/redux/actions/userActions";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Image
import logo from "@/image/logo.png";

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const loginData = useSelector((state) => state.postLogin);
  const { login, loading, error } = loginData;

  const orderInfoData = useSelector((state) => state.orderInfo);
  const { orderInfo } = orderInfoData;

  const email = useRef();
  const password = useRef();

  const checkEmail = () => {
    if (!email.current.value) {
      email.current.style.borderColor = "red";
      return false;
    }
    email.current.style.borderColor = "";
    return true;
  };
  const checkPassword = () => {
    if (!password.current.value) {
      password.current.style.borderColor = "red";
      return false;
    }
    password.current.style.borderColor = "";
    return true;
  };

  const loginClickHandler = (e) => {
    e.preventDefault();
    if (!checkEmail() && !checkPassword()) return;
    dispatch(postLogin({ email: email.current.value, password: password.current.value }));
  };

  const registerClickHandler = () => {
    history.push("/register");
  };

  const logoClickHandler = () => {
    history.push("/");
  };

  useEffect(() => {
    if (!login) return;
    if (error) {
      alert("서버 오류입니다");
      dispatch(removeLoginData());
      return;
    }
    if (!login.loginSuccess) {
      alert(login.message);
      dispatch(removeLoginData());
      return;
    }
    if (login.loginSuccess) {
      if (orderInfo && orderInfo.length > 0) return history.replace("/cart");
      return history.replace("/");
    }
  }, [loginData]);

  return (
    <Wrap>
      <Logo onClick={logoClickHandler}>
        <img src={logo} />
      </Logo>
      <LoginWrap>
        <form onSubmit={loginClickHandler}>
          <InputWrap>
            <Input type="email" placeholder="이메일" ref={email} onBlur={checkEmail} />
            <Input type="password" placeholder="비밀번호" ref={password} onBlur={checkPassword} />
            {loading ? <LoginLoadingIndicator /> : ""}
          </InputWrap>
          <ButtonWrap>
            {loading ? <LoginLoadingIndicator /> : ""}
            <Button type="submit">로그인</Button>
          </ButtonWrap>
          <TextButton>
            <span>비밀번호 재설정</span>
            <span onClick={registerClickHandler}>회원가입</span>
          </TextButton>
        </form>
      </LoginWrap>
    </Wrap>
  );
};

export default LoginPage;

const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5ef;
`;

const Logo = styled.div`
  height: 70px;
  margin: 0 0 30px 0;
  cursor: pointer;
  img {
    height: 100%;
  }
  @media (max-width: ${device.small}px) {
    margin: 0 0 10px 0;
    height: 60px;
  }
`;

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  border-radius: 10px;
  @media (max-width: ${device.small}px) {
    background: none;
    width: 100%;
    padding: 30px;
  }
  @media (max-width: ${device.extraSmall}px) {
    padding: 10px;
  }
`;

const loading = keyframes`
  from {
    opacity : 1;
  }
  50%{
    opacity : 0.8;
  }
  to{
    opacity : 1;
  }
`;

const LoginLoadingIndicator = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  z-index: 1;
  animation: ${loading} 1s ease infinite;
`;

const InputWrap = styled.div`
  width: 100%;
  position: relative;
  input:first-child {
    margin: 0 0 10px 0;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  border: solid 1px #c9c9c9;
  padding: 0 10px;
`;

const ButtonWrap = styled.div`
  position: relative;
  width: 100%;
  margin: 30px 0 0 0;
`;

const Button = styled.button`
  position: relative;
  width: 100%;
  height: 50px;
  background: #3d3d3d;
  color: white;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  @media (hover: hover) {
    :hover {
      background: #cacba8;
    }
  }
`;

const TextButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px 0 0 0;
  span:first-child {
    margin: 0 20px 0 0;
  }
  span {
    font-size: 15px;
    color: #1f1f1f;
    cursor: pointer;
  }
`;
