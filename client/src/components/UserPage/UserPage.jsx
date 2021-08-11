import React from "react";
import styled from "styled-components";

// Components
import PageWrap from "@/components/style/layout/PageWrap";
import OrderedItem from "@/components/UserPage/OrderedItem";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

const UserPage = () => {
  const data = [
    {
      _id: "61126962934b832e449cd61c",
      orderDate: "2021-08-10T11:42:31.154Z",
      userId: "6112694f934b832e449cd613",
      paymentType: "적립금",
      orderStatus: "결제완료",
      totalPayment: 9000,
      productList: [
        {
          _id: "6102fdf42903bb337c41d0db",
          productId: "6102fdf42903bb337c41d0db",
          countOfOrder: 1,
          title: "개소리에 대하여",
          price: 9000,
          category: "철학",
          coverImage: "https://image.aladin.co.kr/product/7492/7/cover500/s982732770_1.jpg",
        },
      ],
    },
    {
      _id: "61126b59934b832e449cd63b",
      orderDate: "2021-08-10T11:42:31.154Z",
      userId: "6112694f934b832e449cd613",
      paymentType: "적립금",
      orderStatus: "결제완료",
      totalPayment: 24000,
      productList: [
        {
          _id: "6102fdf42903bb337c41d0db",
          productId: "6102fdf42903bb337c41d0db",
          countOfOrder: 1,
          title: "개소리에 대하여",
          price: 9000,
          category: "철학",
          coverImage: "https://image.aladin.co.kr/product/7492/7/cover500/s982732770_1.jpg",
        },
        {
          _id: "6102fdf42903bb337c41d0e4",
          productId: "6102fdf42903bb337c41d0e4",
          countOfOrder: 1,
          title: "조르주 바타유 - 라스코 혹은 예술의 탄생 / 마네",
          price: 15000,
          category: "예술",
          coverImage: "https://image.aladin.co.kr/product/11057/92/cover500/8994207783_1.jpg",
        },
      ],
    },
    {
      _id: "611271d5934b832e449cd74a",
      orderDate: "2021-08-10T11:42:31.154Z",
      userId: "6112694f934b832e449cd613",
      paymentType: "적립금",
      orderStatus: "결제완료",
      totalPayment: 34500,
      productList: [
        {
          _id: "6102fdf42903bb337c41d0d0",
          productId: "6102fdf42903bb337c41d0d0",
          countOfOrder: 11,
          title: "나는 어디에 있는가? ",
          price: 20000,
          category: "과학",
          coverImage: "https://image.aladin.co.kr/product/27616/38/cover500/k622733128_1.jpg",
        },
        {
          _id: "6102fdf42903bb337c41d107",
          productId: "6102fdf42903bb337c41d107",
          countOfOrder: 11,
          title: "그러라 그래",
          price: 14500,
          category: "에세이",
          coverImage: "https://image.aladin.co.kr/product/26913/49/cover500/893498497x_1.jpg",
        },
      ],
    },
    {
      _id: "61126e5d934b832e449cd68b",
      orderDate: "2021-08-10T11:42:31.154Z",
      userId: "6112694f934b832e449cd613",
      paymentType: "적립금",
      orderStatus: "결제완료",
      totalPayment: 9000,
      productList: [
        {
          _id: "6102fdf42903bb337c41d0db",
          productId: "6102fdf42903bb337c41d0db",
          countOfOrder: 1,
          title: "개소리에 대하여",
          price: 9000,
          category: "철학",
          coverImage: "https://image.aladin.co.kr/product/7492/7/cover500/s982732770_1.jpg",
        },
      ],
    },
    {
      _id: "61126fb8934b832e449cd6e0",
      orderDate: "2021-08-10T11:42:31.154Z",
      userId: "6112694f934b832e449cd613",
      paymentType: "적립금",
      orderStatus: "결제완료",
      totalPayment: 20000,
      productList: [
        {
          _id: "6102fdf42903bb337c41d0d0",
          productId: "6102fdf42903bb337c41d0d0",
          countOfOrder: 1,
          title: "나는 어디에 있는가? ",
          price: 20000,
          category: "과학",
          coverImage: "https://image.aladin.co.kr/product/27616/38/cover500/k622733128_1.jpg",
        },
      ],
    },
  ];
  return (
    <PageWrap>
      <Wrap>
        <Title>이혜원님의 마이페이지</Title>
        <ContentsWrap>
          <UserInfo>ehak3@naver.com</UserInfo>
          <OrderStateWrap>
            <OrderState>
              결제완료
              <span>{data.length}</span>
            </OrderState>
            <Icon className="fas fa-chevron-right"></Icon>
            <OrderState>
              배송준비
              <span>0</span>
            </OrderState>
            <Icon className="fas fa-chevron-right"></Icon>
            <OrderState>
              배송중
              <span>0</span>
            </OrderState>
            <Icon className="fas fa-chevron-right"></Icon>
            <OrderState>
              배송완료
              <span>0</span>
            </OrderState>
          </OrderStateWrap>
        </ContentsWrap>
        <Title>주문내역</Title>
        <ContentsWrap>
          {data.length === 0 ? (
            <div>주문 내역이 없습니다.</div>
          ) : (
            data.map((orderItem, index) => {
              return <OrderedItem key={index} data={orderItem} />;
            })
          )}
        </ContentsWrap>
      </Wrap>
    </PageWrap>
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
  font-size: 18px;
  margin: 10px 5px;
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
  color: #6a6b58;
  @media (max-width: ${device.small}px) {
    font-size: 12px;
  }
`;
