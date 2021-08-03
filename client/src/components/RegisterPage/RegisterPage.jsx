import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Actions
import { setIsHomePage } from "@/redux/actions/homePageActions";
import { postEmailCheck } from "@/redux/actions/userActions";

const RegisterPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const emailCheckData = useSelector((state) => state.emailCheck);

  const emailMessage = useRef();
  const nameMessage = useRef();
  const passwordMessage = useRef();
  const confirmPasswordMessage = useRef();
  const password = useRef();
  const email = useRef();
  const name = useRef();
  const confirmPassword = useRef();

  const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);
  const emailBorderColor = isEmailDuplicated ? "red" : "";

  useEffect(() => {
    dispatch(setIsHomePage(false));
  }, []);

  useEffect(() => {
    const { emailCheck } = emailCheckData;
    if (!emailCheck) return;
    setIsEmailDuplicated(!emailCheck.isAvailable);
  }, [emailCheckData, isEmailDuplicated]);

  const pass = (target, message) => {
    target.style.borderColor = "";
    message.current.style.display = "none";
  };

  const fail = (target, message, messageText) => {
    target.style.borderColor = "red";
    message.current.innerText = messageText;
    message.current.style.display = "block";
  };

  const checkEmail = () => {
    const target = email.current;
    const emailCheck =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (!target.value) return fail(target, emailMessage, "필수 입력 항목입니다.");
    if (!emailCheck.test(target.value))
      return fail(target, emailMessage, "이메일을 다시 확인해주세요.");

    dispatch(postEmailCheck(target.value));
  };

  const checkName = () => {
    const target = name.current;
    const lengthCheck = (name) => name.length < 2 || name.length > 15;
    if (!target.value) return fail(target, nameMessage, "필수 입력 항목입니다.");
    if (lengthCheck(target.value)) return fail(target, nameMessage, "2~15자로 입력해주세요.");
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

  const registerClickHandler = () => {
    checkEmail();
    checkName();
    checkPassword();
    checkConfirmPassword();
  };

  return (
    <Wrap>
      <RegisterWrap>
        <Title>회원가입</Title>
        <InputWrap>
          <Input
            style={{ borderColor: emailBorderColor }}
            type="email"
            placeholder="이메일"
            onBlur={checkEmail}
            ref={email}
          />
          {isEmailDuplicated ? (
            <Message style={{ display: "flex" }} ref={emailMessage}>
              이미 가입된 이메일입니다.
            </Message>
          ) : (
            <Message ref={emailMessage}></Message>
          )}
          <Input placeholder="이름 (2~15자)" onBlur={checkName} ref={name} />
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  padding: 200px 0 100px 0;
  @media (max-width: ${device.small}px) {
    padding: 100px 0 50px 0;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
  margin: 0 0 30px 0;
`;

const RegisterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  width: 450px;
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
  font-size: 14px;
  @media (max-width: ${device.small}px) {
    font-size: 12px;
  }
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
