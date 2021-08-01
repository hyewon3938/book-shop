import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

// Components
import PageWrap from "@/components/style/layout/PageWrap";

// Actions
import { setIsHomePage } from "@/redux/actions/homePageActions";

// Images
import homepageImage from "@/image/homepageImage.jpg";

const LoginPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsHomePage(false));
  }, []);

  return (
    <PageWrap>
      <Wrap>
        <LoginWrap>
          <LoginTitle>로그인</LoginTitle>
          <InputWrap>
            <Input type="email" placeholder="이메일" />
            <Input type="password" placeholder="비밀번호" />
          </InputWrap>
          <ButtonWrap>
            <Button>로그인</Button>
            <TextButton>
              <span>비밀번호 재설정</span>
              <span>회원가입</span>
            </TextButton>
          </ButtonWrap>
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
`;

const LoginTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 30px 0;
`;

const InputWrap = styled.div`
  input:first-child {
    margin: 0 0 10px 0;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  border: solid 1px #c9c9c9;
  padding: 0 10px;
  /* &:focus {
    outline: 0;
    box-shadow: 0 0 5px 2px border;
  } */
`;

const ButtonWrap = styled.div`
  width: 100%;
  margin: 30px 0 0 0;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  background: #3d3d3d;
  color: white;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background: #7d7e68;
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
