import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

// Components
import PageWrap from "@/components/style/layout/PageWrap";
import OrderedItem from "@/components/UserPage/OrderedItem";

// Actions
import { getOrder } from "@/redux/actions/orderActions";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Utils
import { numberWithCommas } from "@/lib/utils";

const UserPage = () => {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state.auth);

  const orderData = useSelector((state) => state.getOrder);
  const { order, loading, error } = orderData;

  useEffect(() => {
    if (!auth) return;
    dispatch(getOrder(auth._id));
  }, [auth]);

  return (
    <>
      <PageWrap>
        <Wrap>
          {auth ? <Title>{auth.name}님의 마이페이지</Title> : <Title>　</Title>}
          <ContentsWrap>
            <UserInfo>
              <span>이메일</span>
              {auth ? auth.email : ""}
            </UserInfo>
            <UserInfo>
              <span>적립금</span>
              {auth && auth.points ? numberWithCommas(auth.points) : "　"}p
            </UserInfo>
            <OrderStateWrap>
              <OrderState>
                결제완료
                <span>{auth && order ? order.length : "　"}</span>
              </OrderState>
              <Icon className="fas fa-chevron-right"></Icon>
              <OrderState>
                배송준비
                <span>{auth && order ? 0 : "　"}</span>
              </OrderState>
              <Icon className="fas fa-chevron-right"></Icon>
              <OrderState>
                배송중
                <span>{auth && order ? 0 : "　"}</span>
              </OrderState>
              <Icon className="fas fa-chevron-right"></Icon>
              <OrderState>
                배송완료
                <span>{auth && order ? 0 : "　"}</span>
              </OrderState>
            </OrderStateWrap>
          </ContentsWrap>
          <Title>주문내역</Title>
          {error && auth ? (
            <div>server error</div>
          ) : loading && auth ? (
            <></>
          ) : order && auth ? (
            <ContentsWrap>
              {order.length === 0 ? (
                <div>주문 내역이 없습니다.</div>
              ) : (
                order.slice(0, itemCount).map((orderItem, index) => {
                  return <OrderedItem key={index} data={orderItem} />;
                })
              )}
            </ContentsWrap>
          ) : (
            ""
          )}
        </Wrap>
      </PageWrap>
    </>
  );
};

export default UserPage;

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
    padding: 0;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 30px 20px 10px 20px;
  @media (max-width: ${device.medium}px) {
    margin: 15px 20px;
    font-size: 18px;
  }
  @media (max-width: ${device.small}px) {
    margin: 10px 20px;
    font-size: 18px;
  }
`;

const ContentsWrap = styled.div`
  width: 100%;
  padding: 20px;
`;

const UserInfo = styled.div`
  width: 100%;
  margin: 0 5px 15px 5px;
  span {
    font-weight: bold;
    color: #574f27;
    font-size: 15px;
    margin: 0 10px 0 0;
  }
  @media (max-width: ${device.small}px) {
    font-size: 15px;
  }
`;

const OrderStateWrap = styled.div`
  width: 100%;
  height: 100px;
  border: solid 1px lightgray;
  margin: 30px 0 0 0;
  padding: 15px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  @media (max-width: ${device.small}px) {
    padding: 5px;
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
`;

const OrderState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  width: 150px;
  text-align: center;
  span {
    font-weight: normal;
    width: 100%;
    text-align: center;
    margin: 10px 0 0 0;
  }
  @media (max-width: ${device.small}px) {
    width: auto;
    font-size: 12px;
  }
`;

const Icon = styled.i`
  font-size: 18px;
  color: #574f27;
  @media (max-width: ${device.small}px) {
    font-size: 12px;
  }
`;
