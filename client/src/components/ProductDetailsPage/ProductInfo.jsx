import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { throttle } from "lodash";

// Components
import Book from "@/components/ProductDetailsPage/Book";

// Utils
import { numberWithCommas } from "@/lib/utils";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

const ProductInfo = ({ data }) => {
  const {
    title,
    subtitle,
    writer,
    category,
    coverImage,
    price,
    publishDate,
    publisher,
    size,
    countInStock,
  } = data;

  const countInput = React.createRef();

  const [itemCount, setItemCount] = useState(1);
  const [isShownCount, setIsShownCount] = useState(false);
  const [isMobileMode, setIsMobileMode] = useState(window.innerWidth > device.large ? false : true);

  const resizeEventHandler = throttle(() => {
    window.innerWidth > device.large ? setIsMobileMode(false) : setIsMobileMode(true);
  }, 300);

  useEffect(() => {
    window.addEventListener("resize", resizeEventHandler);
    return () => {
      window.removeEventListener("resize", resizeEventHandler);
    };
  }, [innerWidth]);

  const mobileButtonStyle = isShownCount
    ? { mobileCounter: { display: "flex" }, arrowButton: { top: "-115px" } }
    : { mobileCounter: { display: "none" }, arrowButton: { top: "-35px" } };

  const increaseButtonClickHandler = () => {
    setItemCount(Number(itemCount) + 1);
  };

  const decreaseButtonClickHandler = () => {
    if (Number(itemCount) === 1) return;
    setItemCount(Number(itemCount) - 1);
  };

  const onChangeCountHandler = () => {
    const value = countInput.current.value;
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
          <Book size={size} coverImage={coverImage} title={title} />
        </BookWrap>
        <InfoBuyButtonWrap>
          <Category>{category}</Category>
          <ColumnFlexBox>
            <h1>{title}</h1>
            {subtitle ? <h2>- {subtitle}</h2> : ""}
            <InfoWrap>
              <p>{writer} 저</p>
              <span>|</span>
              <p> {publisher} </p>
              <span>|</span> <p> {publishDate}</p>
            </InfoWrap>
            <PriceWrap>
              <p>판매가</p>
              {numberWithCommas(price)} 원
            </PriceWrap>
            <CounterButtonWrap>
              {isMobileMode ? (
                <CounterWrap style={mobileButtonStyle.mobileCounter}>
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
                </CounterWrap>
              ) : (
                <CounterWrap>
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
                </CounterWrap>
              )}
              <ButtonWrap>
                {isMobileMode ? (
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
                ) : (
                  ""
                )}
                <BuyCartButton cart>카트에 담기</BuyCartButton>
                <BuyCartButton>바로 구매하기</BuyCartButton>
              </ButtonWrap>
            </CounterButtonWrap>
          </ColumnFlexBox>
        </InfoBuyButtonWrap>
      </ImageInfoWrap>
    </>
  );
};

export default ProductInfo;

const ImageInfoWrap = styled.div`
  display: flex;
  margin: 40px 0;
  @media (max-width: ${device.large}px) {
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
  height: auto;
  justify-content: center;
  align-items: center;
  @media (max-width: ${device.extraLarge}px) {
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
    font-size: 15px;
    word-break: keep-all;
    line-height: 20px;
  }

  @media (max-width: ${device.extraLarge}px) {
    flex: 0.6;
    margin: 0;
    h1 {
      font-size: 20px;
      margin: 5px 0 15px 0;
    }
    h2 {
      font-size: 13px;
    }
  }

  @media (max-width: ${device.large}px) {
    h1 {
      margin: 20px 0 15px 0;
    }
  }
  @media (max-width: ${device.small}px) {
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

  @media (max-width: ${device.extraLarge}px) {
    font-size: 13px;
    margin: 0 0 15px 0;
  }
  @media (max-width: ${device.large}px) {
    margin: 40px 0 0 0;
  }
`;

const PriceWrap = styled.div`
  flex: 0.5;
  padding: 20px 0;
  font-size: 18px;
  display: flex;
  align-items: center;
  font-weight: bold;
  p {
    margin: 0 30px 0 0;
  }
  @media (max-width: ${device.extraLarge}px) {
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
  @media (max-width: ${device.extraLarge}px) {
    font-size: 13px;
  }
  @media (max-width: ${device.small}px) {
    flex-direction: column;
    span {
      display: none;
    }
    p {
      margin: 10px 0 0 0;
    }
  }
`;

const CounterWrap = styled.div`
  display: flex;
  @media (max-width: ${device.large}px) {
    display: none;
    align-items: center;
    height: 80px;
    position: absolute;
    top: -80px;
    background: #f0f0f0;
    width: 100%;
    align-items: center;
    padding: 0 20px;
    border-bottom: solid 1px #cccccc;
  }
  @media (max-width: ${device.small}px) {
    padding: 0 15px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    font-size: 18px;
    background: white;
    border: 1px solid #c2c2c2;
    text-align: center;
  }

  @media (max-width: ${device.extraLarge}px) {
    margin: 15px 0 0 0;
    button {
      width: 25px;
      height: 25px;
    }
  }
  @media (max-width: ${device.large}px) {
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
  @media (max-width: ${device.extraLarge}px) {
    font-size: 16px;
  }
  @media (max-width: ${device.large}px) {
    margin: 0;
    p {
      margin: 0 15px 0 0;
    }
  }
`;

const InputNumber = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  width: 60px;
  height: 30px;
  border: 1px solid #c2c2c2;
  border-left: none;
  border-right: none;
  text-align: center;
  -moz-appearance: textfield;
  border-style: 1px solid #c2c2c2;
  border-radius: 0;
  &:focus {
    box-shadow: inset none;
    outline: none;
    border-style: 1px solid #c2c2c2;
    border-radius: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media (max-width: ${device.extraLarge}px) {
    width: 50px;
    height: 25px;
  }
`;

const CounterButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${device.large}px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: #f0f0f0;
    width: 100%;
    align-items: center;
    display: flex;
    padding: 20px 5px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0 0 0;

  @media (max-width: ${device.extraLarge}px) {
    margin: 30px 0 0 0;
  }
  @media (max-width: ${device.large}px) {
    margin: 0;
    width: 100%;
    height: 50px;
    justify-content: space-around;
  }
  @media (max-width: ${device.small}px) {
    padding: 0;
  }
`;

const BuyCartButton = styled.div`
  flex: 0.45;
  padding: 20px 30px;
  text-align: center;
  cursor: pointer;
  background: #3d3d3d;
  color: white;
  border: 1.5px solid #3d3d3d;
  font-size: 15px;
  font-weight: bold;
  &:hover {
    background: #cacba8;
    color: white;
    border: 1.5px solid #cacba8;
  }
  ${(props) => {
    if (props.cart) {
      return css`
        background: white;
        color: black;
      `;
    }
  }}
  @media (max-width: ${device.extraLarge}px) {
    padding: 15px 25px;
  }
  @media (max-width: ${device.small}) {
    font-size: 15px;
    padding: 20px 20px;
  }
`;

const OpenMobileCounterButton = styled.div`
  display: none;
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
  @media (max-width: ${device.large}px) {
    display: flex;
  }
`;
