import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Utils
import { numberWithCommas } from "@/lib/utils";

const OrderedItem = ({ data }) => {
  const history = useHistory();

  const parseDate = (dateString) => {
    const year = dateString.substr(0, 4);
    const month = dateString.substr(6, 2);
    const day = dateString.substr(8, 2);
    const date = dateString.substr(0, 10);
    return date;
  };

  const itemClickHandler = (category, productId) => {
    history.push(`/product/${category}/${productId}`);
  };

  return (
    <Wrap>
      <ListHeader>
        <span>{parseDate(data.orderDate)}</span>
        <span style={{ fontWeight: "normal" }}>{data._id}</span>
      </ListHeader>
      {data.productList.map((item, index) => {
        return (
          <ItemWrap key={index}>
            <Item style={{ flex: "0.3" }}>
              <ProductInfoWrap>
                <img
                  src={item.coverImage}
                  alt={item.title}
                  onClick={() => itemClickHandler(item.category, item.productId)}
                />
                <TitleWrap onClick={() => itemClickHandler(item.category, item.productId)}>
                  <p>
                    [{item.category}] {item.title}
                  </p>
                </TitleWrap>
              </ProductInfoWrap>
            </Item>
            <Item style={{ flex: "0.2" }}>
              <PriceWrap>{numberWithCommas(item.price * item.countOfOrder)}원</PriceWrap>
            </Item>
            <Item style={{ flex: "0.2" }}>
              <Count>구매수량({item.countOfOrder}개)</Count>
            </Item>
            <MobileItem>
              <ProductInfoWrap>
                <img
                  src={item.coverImage}
                  alt={item.title}
                  onClick={() => itemClickHandler(item.category, item.productId)}
                />
                <TitleWrap onClick={() => itemClickHandler(item.category, item.productId)}>
                  <p>
                    [{item.category}] {item.title}
                  </p>
                  <PriceWrap>{numberWithCommas(item.price * item.countOfOrder)}원</PriceWrap>
                  <Count>{item.countOfOrder}개</Count>
                </TitleWrap>
              </ProductInfoWrap>
            </MobileItem>
          </ItemWrap>
        );
      })}
      <ItemWrap>
        <OrderInfoWrap>
          <OrderStatus>{data.orderStatus}</OrderStatus>
          <div>
            {data.paymentType} 결제 {numberWithCommas(data.totalPayment)}원
          </div>
        </OrderInfoWrap>
      </ItemWrap>
    </Wrap>
  );
};

export default OrderedItem;

const Wrap = styled.div`
  width: 100%;
  margin: 0 0 50px 0;
  @media (max-width: ${device.medium}px) {
    margin: 0 0 30px 0;
  }
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  border: solid 1px lightgray;
  background: #cacba82f;
  padding: 10px 15px;
  font-weight: bold;
  span {
    margin: 5px 0;
  }
  @media (max-width: ${device.small}px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-left: none;
    border-right: none;
  }
`;

const ItemWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border: solid 1px lightgray;
  border-top: none;
  padding: 18px 10px;
  @media (max-width: ${device.medium}px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: ${device.small}px) {
    border-left: none;
    border-right: none;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${device.medium}px) {
    display: none;
  }
`;

const ProductInfoWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  img {
    width: 50px;
    border: 1px solid lightgrey;
    cursor: pointer;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 20px;
  font-size: 13px;
  line-height: 20px;
  p {
    cursor: pointer;
  }
  @media (max-width: ${device.medium}px) {
    align-items: flex-start;
  }
`;

const PriceWrap = styled.div`
  display: flex;
  width: 100%;
  font-weight: bold;
  font-size: 13px;
  justify-content: center;
  align-items: center;
  @media (max-width: ${device.medium}px) {
    justify-content: flex-start;
  }
`;

const Count = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: ${device.medium}px) {
    justify-content: flex-start;
  }
`;

const OrderInfoWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0 15px;
  div {
    margin: 5px 0;
  }
`;

const OrderStatus = styled.div`
  font-weight: bold;
`;

const MobileItem = styled.div`
  display: none;
  @media (max-width: ${device.medium}px) {
    display: flex;
    width: 100%;
  }
`;
