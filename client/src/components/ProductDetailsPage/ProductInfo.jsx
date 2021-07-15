import React, { useState } from "react";
import styled, { css } from "styled-components";

// Components
import Book from "@/components/ProductDetailsPage/Book";

// Utils
import { numberWithCommas } from "@/lib/utils";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

const ProductInfo = () => {
  const price = 15800;

  const countInput = React.createRef();
  const [itemCount, setItemCount] = useState(1);
  const [isShownCount, setIsShownCount] = useState(false);

  const mobileButtonStyle = isShownCount
    ? { mobileCounter: { display: "flex" }, arrowButton: { top: "-115px" } }
    : { mobileCounter: { display: "none" }, arrowButton: { top: "-35px" } };

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

  const mobileArrowButtonClickHandler = () => {
    setIsShownCount(!isShownCount);
  };

  return (
    <>
      <ImageInfoWrap>
        <BookWrap>
          <Book />
        </BookWrap>
        <InfoBuyButtonWrap>
          <Category>철학</Category>
          <ColumnFlexBox>
            <h1>소크라테스 익스프레스</h1>
            <h2>: 철학이 우리 인생에 스며드는 순간</h2>
            <InfoWrap>
              <p>에릭 와이너 저</p>
              <span>|</span>
              <p> 해냄 </p>
              <span>|</span> <p> 2021년 04월 28일</p>
            </InfoWrap>
            <PriceWrap>
              <p>판매가</p>
              {numberWithCommas(price)} 원
            </PriceWrap>
            <CounterButtonWrap>
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
                    <p>합계</p> {numberWithCommas(price * itemCount)} 원
                  </TotalPrice>
                </FlexBox>
              </Counter>
              <ButtonWrap>
                <BuyCartButton cart>카트에 담기</BuyCartButton>
                <BuyCartButton>바로 구매하기</BuyCartButton>
              </ButtonWrap>
            </CounterButtonWrap>
          </ColumnFlexBox>
        </InfoBuyButtonWrap>
      </ImageInfoWrap>
      <MobileCounterButtonWrap>
        <ButtonWrap>
          <OpenMobileCounterButton
            onClick={mobileArrowButtonClickHandler}
            style={mobileButtonStyle.arrowButton}
          >
            {isShownCount ? (
              <i className="fas fa-chevron-down"></i>
            ) : (
              <i className="fas fa-chevron-up"></i>
            )}
          </OpenMobileCounterButton>
          <BuyCartButton cart>카트에 담기</BuyCartButton>
          <BuyCartButton>바로 구매하기</BuyCartButton>
          <MobileCounterWrap style={mobileButtonStyle.mobileCounter}>
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
                  <p>합계</p> {numberWithCommas(price * itemCount)} 원
                </TotalPrice>
              </FlexBox>
            </Counter>
          </MobileCounterWrap>
        </ButtonWrap>
      </MobileCounterButtonWrap>
    </>
  );
};

export default ProductInfo;

const ImageInfoWrap = styled.div`
  display: flex;
  margin: 40px 0;
  transform: rotate3d(0, 0, 0, 0);
  @media (max-width: ${device.large}) {
    flex-direction: column;
    margin: 40px 0 0 0;
    padding: 0 0.5rem;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

const ColumnFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const BookWrap = styled.div`
  flex: 0.5;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: ${device.extraLarge}) {
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
    font-size: 24px;
    font-weight: bold;
    margin: 0 0 20px 0;
    word-break: keep-all;
    line-height: 28px;
  }
  h2 {
    font-family: "NotoSerifKR";
    font-size: 18px;
    word-break: keep-all;
    line-height: 20px;
  }

  @media (max-width: ${device.extraLarge}) {
    flex: 0.6;
    margin: 0;
    h1 {
      font-size: 20px;
      margin: 5px 0 15px 0;
    }
    h2 {
      font-size: 15px;
    }
  }

  @media (max-width: ${device.large}) {
    h1 {
      margin: 20px 0 15px 0;
    }
  }
  @media (max-width: ${device.small}) {
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

  @media (max-width: ${device.extraLarge}) {
    font-size: 13px;
    margin: 0 0 15px 0;
  }
  @media (max-width: ${device.large}) {
    margin: 40px 0 0 0;
  }
`;

const PriceWrap = styled.div`
  flex: 0.5;
  padding: 20px 0;
  font-size: 18px;
  display: flex;
  align-items: center;
  p {
    margin: 0 30px 0 0;
  }
  @media (max-width: ${device.extraLarge}) {
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
  @media (max-width: ${device.extraLarge}) {
    font-size: 13px;
  }
  @media (max-width: ${device.small}) {
    flex-direction: column;
    span {
      display: none;
    }
    p {
      margin: 10px 0 0 0;
    }
  }
`;

const Counter = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 0 0 0;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px #d4d4d4;
  span {
    line-height: 30px;
    margin: 0 30px 0 0;
  }
  button {
    width: 30px;
    height: 30px;
    cursor: pointer;
    font-size: 18px;
    background: white;
    border: 1px solid #c2c2c2;
    text-align: center;
  }

  @media (max-width: ${device.extraLarge}) {
    margin: 15px 0 0 0;
    button {
      width: 25px;
      height: 25px;
    }
  }
  @media (max-width: ${device.large}) {
    margin: 0;
    padding: 10px;
    border: none;
    background: white;

    span {
      display: none;
    }
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
  @media (max-width: ${device.extraLarge}) {
    font-size: 16px;
  }
  @media (max-width: ${device.large}) {
    margin: 0;
    p {
      margin: 0 15px 0 0;
    }
  }
`;

const InputNumber = styled.input`
  width: 60px;
  height: 30px;
  border: 1px solid #c2c2c2;
  border-left: none;
  border-right: none;
  text-align: center;
  -moz-appearance: textfield;
  &:focus {
    outline: none;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media (max-width: ${device.extraLarge}) {
    width: 50px;
    height: 25px;
  }
`;

const CounterButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${device.large}) {
    display: none;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0 0 0;

  @media (max-width: ${device.extraLarge}) {
    margin: 30px 0 0 0;
  }
  @media (max-width: ${device.large}) {
    margin: 0;
    width: 100%;
    height: 50px;
    justify-content: space-around;
  }
  @media (max-width: ${device.small}) {
    padding: 0;
  }
`;

const BuyCartButton = styled.div`
  flex: 0.45;
  padding: 20px 30px;
  text-align: center;
  cursor: pointer;
  background: #cacba8;
  border: 1.5px solid #cacba8;
  border-radius: 3px;
  &:hover {
    background: black;
    color: white;
    border: 1.5px solid black;
  }
  ${(props) => {
    if (props.cart) {
      return css`
        background: white;
      `;
    }
  }}
  @media (max-width: ${device.extraLarge}) {
    padding: 15px 25px;
  }
  @media (max-width: ${device.small}) {
    font-size: 12px;
    padding: 20px 20px;
  }
`;

const MobileCounterButtonWrap = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  background: #f0f0f0;
  width: 100%;
  align-items: center;
  z-index: 3;
  @media (max-width: ${device.large}) {
    display: flex;
    padding: 20px 5px;
  }
  @media (max-width: ${device.small}) {
    padding: 20px 5px;
  }
`;

const OpenMobileCounterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -35px;
  left: 50% + 30px;
  width: 60px;
  height: 35px;
  background: #f0f0f0;
  cursor: pointer;
  border-radius: 10px 10px 0 0;
`;

const MobileCounterWrap = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  position: absolute;
  top: -80px;
  background: #f0f0f0;
  width: 100%;
  align-items: center;
  padding: 0 25px;
  border-bottom: solid 1px #cccccc;
  @media (max-width: ${device.small}) {
    padding: 0 10px;
  }
`;
