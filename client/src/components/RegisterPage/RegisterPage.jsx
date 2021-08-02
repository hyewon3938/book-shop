import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router-dom";

// Image
import logo from "@/image/logo.png";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

const RegisterPage = () => {
  const history = useHistory();

  const emailMessage = useRef();
  const nameMessage = useRef();
  const passwordMessage = useRef();
  const confirmPasswordMessage = useRef();
  const password = useRef();
  const email = useRef();
  const name = useRef();
  const confirmPassword = useRef();

  const removeBlank = (string) => string.replaceAll(" ", "");

  const pass = (target, ref) => {
    target.style.borderColor = "";
    ref.current.style.display = "none";
  };

  const fail = (target, ref, message) => {
    target.style.borderColor = "red";
    ref.current.innerText = message;
    ref.current.style.display = "block";
  };

  const checkEmail = () => {
    const target = email.current;
    const emailCheck =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (!removeBlank(target.value)) return fail(target, emailMessage, "필수 입력 항목입니다.");
    if (!emailCheck.test(target.value))
      return fail(target, emailMessage, "이메일을 다시 확인해주세요.");

    pass(target, emailMessage);
    target.value = removeBlank(target.value);
  };

  const checkName = () => {
    const target = name.current;
    if (!removeBlank(target.value)) return fail(target, nameMessage, "필수 입력 항목입니다.");
    pass(target, nameMessage);
  };

  const checkPassword = () => {
    const target = password.current;
    const passwordCheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
    if (!target.value) return fail(target, passwordMessage, "필수 입력 항목입니다.");
    if (!passwordCheck.test(target.value))
      return fail(target, passwordMessage, "8~16자 영문,숫자,특수문자를 혼합해서 사용해주세요.");
    pass(target, passwordMessage);
  };

  const checkConfirmPassword = () => {
    const target = confirmPassword.current;
    if (!target.value)
      return fail(target, confirmPasswordMessage, "확인을 위해 비밀번호를 입력해주세요.");
    if (password.current.value !== target.value)
      return fail(target, confirmPasswordMessage, "비밀번호와 일치하지 않습니다.");
    pass(target, confirmPasswordMessage);
  };

  const logoClickHandler = () => {
    history.push("/");
  };

  const registerClickHandler = () => {
    checkEmail();
    checkName();
    checkPassword();
    checkConfirmPassword();
  };

  return (
    <Wrap>
      <Logo onClick={logoClickHandler}>
        <img src={logo} />
      </Logo>
      <Title>회원가입</Title>
      <RegisterWrap>
        <InputWrap>
          <Input type="email" placeholder="이메일" onBlur={checkEmail} ref={email} />
          <Message ref={emailMessage}></Message>
          <Input placeholder="이름" onBlur={checkName} ref={name} />
          <Message ref={nameMessage}></Message>
          <Input
            type="password"
            placeholder="비밀번호 (8~16자 영문,숫자)"
            ref={password}
            onBlur={checkPassword}
          />
          <Message ref={passwordMessage}></Message>
          <Input
            type="password"
            placeholder="비밀번호 확인"
            ref={confirmPassword}
            onBlur={checkConfirmPassword}
          />
          <Message ref={confirmPasswordMessage}></Message>
          {!loading ? <LoadingIndicator /> : ""}
        </InputWrap>
        <ButtonWrap>
          {!loading ? <LoadingIndicator /> : ""}
          <Button onClick={registerClickHandler}>회원가입</Button>
        </ButtonWrap>
      </RegisterWrap>
    </Wrap>
  );
};

export default RegisterPage;

const Wrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  padding: 15vh 0;
  top: 0;
  left: 0;
  background: #f5f5ef;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10000;
  overflow-y: scroll;
  overflow-x: hidden;
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

const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
  margin: 0 0 30px 0;
`;

const Form = styled.form`
  width: 100%;
`;

const RegisterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  width: 400px;
  @media (max-width: ${device.small}px) {
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

const LoadingIndicator = styled.div`
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
    margin: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  border: solid 1px #c9c9c9;
  padding: 0 10px;
  margin: 20px 0 0 0;
`;

const Message = styled.div`
  width: 100%;
  margin: 10px 0 0 5px;
  color: red;
  display: none;
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
