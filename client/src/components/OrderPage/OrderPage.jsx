import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Components
import PageWrap from "@/components/style/layout/PageWrap";
import OrderItem from "@/components/OrderPage/OrderItem";

// Actions
import { postOrder, removeOrderData, removeOrderInfo } from "@/redux/actions/orderActions";
import { removeSelectedItem } from "@/redux/actions/cartActions";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Utils
import { numberWithCommas } from "@/lib/utils";

const OrderPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { orderInfo, path } = useSelector((state) => state.orderInfo);
  const { auth } = useSelector((state) => state.auth);
  const orderData = useSelector((state) => state.order);
  const { order, loading, error } = orderData;

  const availablePoints = auth ? auth.points : 0;

  const totalPrice = orderInfo
    ? orderInfo.reduce((acc, item) => {
        return acc + item.price * item.countOfOrder;
      }, 0)
    : "";
  const shippingFee = 0;

  const [point, setPoint] = useState(0);

  useEffect(() => {
    if (!orderInfo || !orderInfo.length) {
      alert("주문을 다시 진행해주세요.");
      history.replace("/");
      return;
    }

    return () => {
      dispatch(removeOrderInfo());
    };
  }, []);

  useEffect(() => {
    if (!order) return;
    if (error) return alert(error.message);
    if (!order.success) return alert(order.message);
    if (order.success) {
      if (path === "cart") dispatch(removeSelectedItem());
      dispatch(removeOrderInfo());
      dispatch(removeOrderData());
      alert("주문이 완료되었습니다.");
      history.push("/");
      return;
    }
  }, [orderData]);

  const pointOnChangeHandler = (e) => {
    setPoint(e.target.value);
  };

  const pointOnBlurHandler = (e) => {
    if (e.target.value > totalPrice && availablePoints > totalPrice) return setPoint(totalPrice);
    if (e.target.value > availablePoints) return setPoint(availablePoints);
  };

  const usePointButtonHandler = () => {
    if (availablePoints < totalPrice) return setPoint(availablePoints);
    setPoint(totalPrice);
  };

  const payButtonHandler = () => {
    if (totalPrice > point) return alert("결제 금액이 부족합니다.");
    const order = {
      userId: auth._id,
      productList: orderInfo.map((item) => {
        return {
          productId: item.productId,
          countOfOrder: item.countOfOrder,
        };
      }),
      totalPayment: totalPrice,
    };
    dispatch(postOrder(order));
  };

  return (
    <>
      {loading ? <Loading /> : ""}
      <PageWrap>
        <Wrap>
          <Title>주문 상품</Title>
          <ListWrap>
            <ListHeader>
              <ListHeaderItem style={{ flex: "0.5" }}>상품정보</ListHeaderItem>
              <ListHeaderItem style={{ flex: "0.2" }}>합계</ListHeaderItem>
              <ListHeaderItem style={{ flex: "0.2" }}>수량</ListHeaderItem>
            </ListHeader>
            {orderInfo
              ? orderInfo.map((item, index) => {
                  return <OrderItem data={item} key={index} />;
                })
              : ""}
          </ListWrap>
          <PriceInfo>
            <Price>총 상품금액 {numberWithCommas(totalPrice)}</Price>
            <Price>+ 배송비 {numberWithCommas(shippingFee)}</Price>
            <Price>
              = 결제금액
              <span>{numberWithCommas(totalPrice)}원 </span>
            </Price>
          </PriceInfo>
          <Title>포인트</Title>
          <OrderInfo>
            <InputWrap>
              <Input
                type="number"
                value={point}
                onChange={pointOnChangeHandler}
                onBlur={pointOnBlurHandler}
              />
              <button onClick={usePointButtonHandler}>전액사용</button>
            </InputWrap>
            <p>
              사용 가능 포인트{" "}
              <span>{auth && auth.points ? numberWithCommas(auth.points) : ""}p</span>
            </p>
          </OrderInfo>
          <Title>결제방법</Title>
          <OrderInfo>현재는 포인트로만 결제가 가능합니다.</OrderInfo>
          <ButtonWrap>
            {loading ? <LoginLoadingIndicator /> : ""}
            <BuyButton onClick={payButtonHandler}>결제하기</BuyButton>
          </ButtonWrap>
        </Wrap>
      </PageWrap>
    </>
  );
};

export default OrderPage;

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

const Loading = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 500;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 30px 10px;
  @media (max-width: ${device.medium}px) {
    margin: 10px 10px 20px 10px;
    font-size: 18px;
  }
`;

const ListWrap = styled.div`
  width: 100%;
  margin: 0 0 30px 0;
  @media (max-width: ${device.medium}px) {
    border-top: solid 1px lightgray;
  }
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: inherit;
  height: 35px;
  border: solid 1px lightgray;
  background: #cacba82f;
  @media (max-width: ${device.medium}px) {
    display: none;
  }
`;

const ListHeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

const PriceInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cacba814;
  border: solid 1px lightgray;
  padding: 30px 20px;
  margin: 0 0 50px 0;
  span {
    font-size: 20px;
    font-weight: bold;
    margin: 0 10px;
  }
  @media (max-width: ${device.small}px) {
    flex-direction: column;
    align-items: flex-end;
    border: none;
    span {
      font-size: 18px;
      font-weight: bold;
      margin: 0 0 0 10px;
    }
  }
`;

const Price = styled.p`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderInfo = styled.div`
  display: flex;
  width: 100%;
  border-top: solid 1px lightgray;
  flex-direction: column;
  padding: 20px 0;
  line-height: 20px;
  p {
    margin: 10px;
  }
  span {
    font-weight: bold;
  }
  @media (max-width: ${device.medium}px) {
    p {
      margin: 10px 0;
    }
  }
  @media (max-width: ${device.small}px) {
    padding: 20px 10px;
  }
`;

const InputWrap = styled.div`
  display: flex;
  button {
    width: 100px;
    border: solid 1px lightgray;
    margin: 0 0 0 10px;
    cursor: pointer;
  }
  @media (max-width: ${device.extraSmall}px) {
    button {
      font-size: 12px;
    }
  }
`;

const Input = styled.input`
  width: 200px;
  height: 45px;
  border: solid 1px #c9c9c9;
  padding: 0 10px;
  text-align: end;
  @media (max-width: ${device.small}px) {
    width: 100%;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 0 0;
  position: relative;
  @media (max-width: ${device.medium}px) {
    flex-direction: column;
    margin: 30px 10px;
  }
`;

const BuyButton = styled.div`
  padding: 20px 0;
  width: 250px;
  text-align: center;
  cursor: pointer;
  background: #3d3d3d;
  color: white;
  border: 1px solid #3d3d3d;
  font-size: 15px;
  font-weight: bold;
  @media (hover: hover) {
    :hover {
      background: #cacba8;
      color: white;
      border: 1px solid #cacba8;
    }
  }
  @media (max-width: ${device.medium}px) {
    width: 100%;
    margin: 0 0 10px 0;
  }
  @media (max-width: ${device.small}px) {
    font-size: 15px;
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

const LoginLoadingIndicator = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.5);
  z-index: 1;
  animation: ${loading} 1s ease infinite;
`;
