import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Components
import PageWrap from "@/components/style/layout/PageWrap";

// Actions
import { setIsHomePage } from "@/redux/actions/homePageActions";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Actions
import { postLogin } from "@/redux/actions/loginActions";

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const loginData = useSelector((state) => state.postLogin);
  let { login, loading, error } = loginData;

  const email = useRef();
  const password = useRef();

  const checkEmail = () => {
    if (!email.current.value) return (email.current.style.borderColor = "red");

    email.current.style.borderColor = "";
  };
  const checkPassword = () => {
    if (!password.current.value) return (password.current.style.borderColor = "red");

    password.current.style.borderColor = "";
  };

  const loginClickHandler = () => {
    if (!email.current.value || !password.current.value) return;
    dispatch(postLogin({ email: email.current.value, password: password.current.value }));
  };

  useEffect(() => {
    dispatch(setIsHomePage(false));
  }, []);

  useEffect(() => {
    if (error) alert("서버 오류입니다");
    if (login && !login.loginSuccess) alert(login.message);
    if (login && login.loginSuccess) history.goBack();
  }, [loginData]);

  return (
    <PageWrap>
      <Wrap>
        <LoginWrap>
          <LoginTitle>로그인</LoginTitle>
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
              <span>회원가입</span>
            </TextButton>
          </form>
        </LoginWrap>
      </Wrap>
    </PageWrap>
  );
};

export default LoginPage;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  margin: 20vh 0 0 0;
  border-radius: 10px;
  padding: 50px;
  background: #f4f4f4;
  @media (max-width: ${device.small}px) {
    background: none;
    width: 100%;
    padding: 30px;
    margin: 10vh 0 0 0;
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

const LoginTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 30px 0;
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
  &:hover {
    background: #cacba8;
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
