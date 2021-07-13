import React, { useState } from "react";
import styled from "styled-components";

// Components
import PageWrap from "@/components/style/layout/PageWrap";
import Book from "@/components/ProductDetailsPage/Book";

const ProductDetailsPage = () => {
  const price = 15800;

  const countInput = React.createRef();
  const [itemCount, setItemCount] = useState(1);

  const increaseButtonClickHandler = () => {
    setItemCount(itemCount + 1);
  };

  const decreaseButtonClickHandler = () => {
    if (itemCount === 1) return;
    setItemCount(itemCount - 1);
  };

  const onChangeCountHandler = () => {
    const value = Number(countInput.current.value);
    if (value < 0 || value > 999) return setItemCount(itemCount);
    setItemCount(value);
  };

  const checkCountValue = () => {
    const value = Number(countInput.current.value);
    if (value === 0) return setItemCount(1);
    countInput.current.value = Number(countInput.current.value);
  };

  return (
    <PageWrap>
      <ImageInfoWrap>
        <BookWrap>
          <Book />
        </BookWrap>
        <InfoBuyButtonWrap>
          <Category>철학</Category>
          <ColumnFlexBox>
            <h1>소크라테스 익스프레스소크라테스 익스프레스소크라테스 익스프레스</h1>
            <h2>
              : 철학이 우리 인생에 스며드는 순간소크라테스 익스프레스소크라테스 익스프레스소크라테스
              익스프레스
            </h2>
            <InfoWrap>
              <p>에릭 와이너 저</p>
              <span>|</span>
              <p> 해냄 </p>
              <span>|</span> <p> 2021년 04월 28일</p>
            </InfoWrap>
            <PriceWrap>
              <p>판매가</p>
              {price}원
            </PriceWrap>
            <Counter>
              <FlexBox>
                <span>수량</span>
                <button onClick={decreaseButtonClickHandler}>-</button>
                <InputNumber
                  ref={countInput}
                  value={itemCount}
                  type="number"
                  onChange={onChangeCountHandler}
                  onBlur={checkCountValue}
                />
                <button onClick={increaseButtonClickHandler}>+</button>
              </FlexBox>
              <FlexBox>
                <TotalPrice>
                  <p>합계</p> {price * itemCount}원
                </TotalPrice>
              </FlexBox>
            </Counter>
            <ButtonWrap>
              <button>카트에 담기</button>
              <button>바로 구매하기</button>
            </ButtonWrap>
          </ColumnFlexBox>
        </InfoBuyButtonWrap>
      </ImageInfoWrap>
    </PageWrap>
  );
};

export default ProductDetailsPage;

const FlexBox = styled.div`
  display: flex;
`;

const ColumnFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ImageInfoWrap = styled.div`
  display: flex;
  margin: 40px 0 0 0;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const BookWrap = styled.div`
  flex: 0.5;
  display: flex;
  width: 100%;
  justify-content: center;
  @media (max-width: 1300px) {
    flex: 0.4;
  }
`;

const InfoBuyButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  margin: 0 0 0 30px;
  padding: 10px 30px;
  h1 {
    font-family: "NotoSerifKR";
    font-size: 25px;
    font-weight: bold;
    margin: 10px 0 20px 0;
    word-break: keep-all;
  }
  h2 {
    font-family: "NotoSerifKR";
    font-size: 18px;
    word-break: keep-all;
  }

  @media (max-width: 1300px) {
    flex: 0.6;
    margin: 0;
    h1 {
      font-size: 20px;
      margin: 5px 0 15px 0;
      line-height: 25px;
    }
    h2 {
      font-size: 15px;
      line-height: 20px;
    }
  }

  @media (max-width: 850px) {
    h1 {
      margin: 20px 0 15px 0;
    }
  }
  @media (max-width: 530px) {
    padding: 0;
  }
`;

const Category = styled.p`
  font-family: "NotoSerifKR";
  background: black;
  font-size: 15px;
  padding: 7px 10px;
  margin: 0 0 25px 0;
  color: #fff;
  border-radius: 3px 3px 0 0;

  @media (max-width: 1300px) {
    font-size: 13px;
    margin: 0 0 15px 0;
  }
  @media (max-width: 850px) {
    margin: 40px 0 0 0;
  }
`;

const PriceWrap = styled.div`
  flex: 0.5;
  padding: 20px 0;
  font-family: "NotoSerifKR";
  font-size: 18px;
  display: flex;
  align-items: center;
  p {
    margin: 0 30px 0 0;
  }
  @media (max-width: 1300px) {
    padding: 10px 0;
    font-size: 15px;
  }
`;

const InfoWrap = styled.div`
  margin: 20px 0;
  display: flex;
  p {
    margin: 0 5px 0 0;
  }
  span {
    margin: 0 7px 0 0;
  }
  @media (max-width: 1300px) {
    font-size: 13px;
  }
  @media (max-width: 530px) {
    flex-direction: column;
    span {
      display: none;
    }
    p {
      margin: 10px 0 0 0;
    }
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0 0 0;
  button {
    flex: 0.45;
    padding: 20px 30px;
    background: #cacba8;
    cursor: pointer;
    &:hover {
      background: black;
      color: white;
    }
  }
  @media (max-width: 1300px) {
    margin: 30px 0 0 0;
    button {
      padding: 15px 25px;
    }
  }
  @media (max-width: 530px) {
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 0;
    button {
      width: 100%;
      margin: 15px 0 0 0;
    }
  }
`;

const Counter = styled.div`
  display: flex;
  margin: 30px 0 0 0;
  justify-content: space-between;
  align-items: center;
  span {
    line-height: 30px;
    margin: 0 30px 0 0;
  }
  button {
    width: 30px;
    height: 30px;
    border: 1px solid black;
    cursor: pointer;
    font-size: 20px;
    color: white;
    background: black;
  }

  @media (max-width: 1300px) {
    margin: 15px 0 0 0;
    button {
      width: 25px;
      height: 25px;
    }
  }
  @media (max-width: 530px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TotalPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin: 0 10px 0 0;
  p {
    font-weight: normal;
    margin: 0 30px 0 0;
  }
  @media (max-width: 1300px) {
    font-size: 16px;
  }
  @media (max-width: 530px) {
    margin: 30px 10px 10px 0;
  }
`;

const InputNumber = styled.input`
  width: 60px;
  height: 30px;
  border: 1px solid #9c9c9c;
  border-left: none;
  border-right: none;
  text-align: center;
  -moz-appearance: textfield;
  &:focus {
    border: none;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media (max-width: 1300px) {
    width: 50px;
    height: 25px;
  }
`;
