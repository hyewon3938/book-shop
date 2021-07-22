import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// Components
import PageWrap from "@/components/style/layout/PageWrap";
import CartItem from "@/components/CartPage/CartItem";
import Checkbox from "@/components/CartPage/Checkbox";

// Utils
import { numberWithCommas } from "@/lib/utils";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Actions
import { addToCart, removeFromCart } from "@/redux/actions/cartActions";
import { CART_RESET } from "@/redux/constants/cartConstants";

const CartPage = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const totalPrice = cartItems.reduce((acc, cur, i) => {
    return acc + Number(cur.price) * cur.qty;
  }, 0);

  const totalCount = cartItems.reduce((acc, cur, i) => {
    return acc + cur.qty;
  }, 0);

  const deleteListHandler = () => {
    dispatch({ type: CART_RESET });
  };

  return (
    <PageWrap>
      <Wrap>
        <CartTitle>북샵 카트 ({totalCount})</CartTitle>
        <RemoveCartListWrap>
          <RemoveCartListButton onClick={deleteListHandler}>선택 상품 삭제</RemoveCartListButton>
        </RemoveCartListWrap>
        <CartListWrap>
          <MobileAllCheckboxWrap>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Checkbox />
              <span>전체선택</span>
            </div>
            <RemoveCartListButton onClick={deleteListHandler}>선택 상품 삭제</RemoveCartListButton>
          </MobileAllCheckboxWrap>
          <ListHeader>
            <Checkbox />
            <ListHeaderItem style={{ flex: "0.55" }}>상품정보</ListHeaderItem>
            <ListHeaderItem style={{ flex: "0.1" }}>가격</ListHeaderItem>
            <ListHeaderItem style={{ flex: "0.15" }}>수량</ListHeaderItem>
            <ListHeaderItem style={{ flex: "0.1" }}>주문</ListHeaderItem>
          </ListHeader>
          {cartItems.length === 0 ? (
            <div>카트가 비어있습니다.</div>
          ) : (
            cartItems.map((item, index) => {
              return <CartItem data={item} key={index} />;
            })
          )}
          <ListFooter>
            <TotalCount>
              <span>총 상품 수</span> {cartItems.length}종 {totalCount}개
            </TotalCount>
            <TotalPrice>
              <span>총 결제금액</span>
              {numberWithCommas(totalPrice)}원
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
  margin: 1rem 0;
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
  margin: 30px 30px 10px 30px;
  @media (max-width: ${device.medium}px) {
    margin: 10px;
    font-size: 18px;
  }
  @media (max-width: ${device.small}px) {
    margin: 0px 10px 10px 10px;
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
  background: #cacba82f;
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
    justify-content: space-between;
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
    padding: 20px 5px;
  }
`;

const TotalCount = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  margin: 0 0 15px 0;
  font-weight: bold;
  font-size: 16px;
  color: #464646;
  span {
    font-weight: normal;
    margin: 0 10px 0 0;
  }
  @media (max-width: ${device.medium}px) {
    width: 100%;
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
  @media (max-width: ${device.medium}px) {
    width: 100%;
  }
  @media (max-width: ${device.small}px) {
    span {
      font-size: 13px;
    }
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
  font-weight: bold;
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
  }
  @media (max-width: ${device.small}px) {
    font-size: 15px;
  }
`;

const RemoveCartListWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
  @media (max-width: ${device.medium}px) {
    display: none;
  }
`;

const RemoveCartListButton = styled.button`
  padding: 5px 10px;
  border: 1px solid grey;
  cursor: pointer;
  font-size: 12px;
  @media (max-width: ${device.medium}px) {
    padding: 5px;
  }
`;
