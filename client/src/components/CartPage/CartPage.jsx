import React, { useEffect } from "react";
import styled, { css } from "styled-components";

// Components
import PageWrap from "@/components/style/layout/PageWrap";
import CartItem from "@/components/CartPage/CartItem";
import Checkbox from "@/components/CartPage/Checkbox";

// Utils
import { numberWithCommas } from "@/lib/utils";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

const CartPage = () => {
  return (
    <PageWrap>
      <Wrap>
        <CartTitle>북샵 카트</CartTitle>
        <CartListWrap>
          <MobileAllCheckboxWrap>
            <Checkbox />
            <span>전체선택</span>
          </MobileAllCheckboxWrap>
          <ListHeader>
            <Checkbox />
            <ListHeaderItem style={{ flex: "0.55" }}>상품정보</ListHeaderItem>
            <ListHeaderItem style={{ flex: "0.1" }}>가격</ListHeaderItem>
            <ListHeaderItem style={{ flex: "0.15" }}>수량</ListHeaderItem>
            <ListHeaderItem style={{ flex: "0.1" }}>주문</ListHeaderItem>
          </ListHeader>
          <CartItem img="https://image.aladin.co.kr/product/27516/11/cover500/k152733299_1.jpg" />
          <CartItem img="https://image.aladin.co.kr/product/27358/28/cover500/k102732526_1.jpg" />
          <CartItem img="https://image.aladin.co.kr/product/27567/95/cover500/k682733018_1.jpg" />
          <ListFooter>
            <TotalCount>
              <span>총 상품 수</span> 3개
            </TotalCount>
            <TotalPrice>
              <span>총 결제금액</span>
              {numberWithCommas(13500)}원
            </TotalPrice>
          </ListFooter>
        </CartListWrap>
        <ButtonWrap>
          <BuyCartButton cart="true">쇼핑 계속하기</BuyCartButton>
          <BuyCartButton>선택 상품 주문하기</BuyCartButton>
        </ButtonWrap>
      </Wrap>
    </PageWrap>
  );
};

export default CartPage;

const Wrap = styled.div`
  width: 100%;
  margin: 2rem 0;
  padding: 0 10rem;
  @media (max-width: ${device.extraLarge}px) {
    padding: 0 5rem;
  }
  @media (max-width: ${device.large}px) {
    padding: 0 2rem;
  }
  @media (max-width: ${device.medium}px) {
    padding: 0 1rem;
  }
  @media (max-width: ${device.small}px) {
    padding: 0 5px;
  }
`;

const CartTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 30px;
  @media (max-width: ${device.medium}px) {
    margin: 10px 10px 30px 10px;
    font-size: 18px;
  }
`;

const CartListWrap = styled.div`
  margin: 10px;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 35px;
  border-top: solid 2px lightgray;
  border-bottom: solid 2px lightgray;
  @media (max-width: ${device.medium}px) {
    display: none;
  }
`;

const MobileAllCheckboxWrap = styled.div`
  display: none;
  span {
    margin: 0 0 0 10px;
  }
  @media (max-width: ${device.medium}px) {
    display: flex;
    margin: 0 0 20px 0;
    align-items: center;
  }
`;

const ListHeaderItem = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
`;

const ListFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  border-bottom: solid 2px lightgray;
  padding: 30px 20px;
  @media (max-width: ${device.medium}px) {
    border-top: solid 2px lightgray;
    padding: 20px 10px;
  }
  @media (max-width: ${device.small}px) {
    padding: 15px 5px;
  }
`;

const TotalCount = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  margin: 0 0 15px 0;
  font-weight: bold;
  font-size: 18px;
  span {
    font-weight: normal;
    margin: 0 10px 0 0;
  }
  @media (max-width: ${device.medium}px) {
    width: 100%;
    font-size: 18px;
  }
  @media (max-width: ${device.small}px) {
    font-size: 15px;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  span {
    margin: 0 10px 0 0;
    font-weight: normal;
  }
  @media (max-width: ${device.small}px) {
    span {
      font-size: 13px;
    }
  }
  @media (max-width: ${device.medium}px) {
    width: 100%;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 30px 0 0 0;
  @media (max-width: ${device.medium}px) {
    flex-direction: column;
  }
`;

const BuyCartButton = styled.div`
  padding: 20px 0;
  width: 250px;
  text-align: center;
  cursor: pointer;
  background: #3d3d3d;
  color: white;
  border: 1px solid #3d3d3d;
  font-size: 15px;
  &:hover {
    background: #cacba8;
    color: white;
    border: 1px solid #cacba8;
  }
  ${(props) => {
    if (props.cart) {
      return css`
        background: white;
        color: black;
        margin: 0 10px 0 0;
      `;
    }
  }}
  @media (max-width: ${device.medium}px) {
    width: 100%;
    margin: 0 0 10px 0;
    font-weight: normal;
  }
  @media (max-width: ${device.small}px) {
    font-size: 13px;
  }
`;
