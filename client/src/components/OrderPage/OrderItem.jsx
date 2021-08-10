import React from "react";
import styled from "styled-components";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Utils
import { numberWithCommas } from "@/lib/utils";

const OrderItem = ({ data }) => {
  return (
    <Wrap>
      <Item style={{ flex: "0.5" }}>
        <ProductInfoWrap>
          <img src={data.imageUrl} alt={data.title} />
          <TitleWrap>
            <p>
              [{data.category}] {data.title}
            </p>
          </TitleWrap>
        </ProductInfoWrap>
      </Item>
      <Item style={{ flex: "0.2" }}>
        <PriceWrap>{numberWithCommas(data.price)}원</PriceWrap>
      </Item>
      <Item style={{ flex: "0.2" }}>
        <Count>{data.countOfOrder}개</Count>
      </Item>
      <MobileItem>
        <ProductInfoWrap>
          <img src={data.imageUrl} alt={data.title} />
          <TitleWrap>
            <p>
              [{data.category}] {data.title}
            </p>
            <PriceWrap>{numberWithCommas(data.price)}원</PriceWrap>
            <Count>{data.countOfOrder}개</Count>
          </TitleWrap>
        </ProductInfoWrap>
      </MobileItem>
    </Wrap>
  );
};

export default OrderItem;

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border: solid 1px lightgray;
  border-top: none;
  padding: 18px 0;
  @media (max-width: ${device.medium}px) {
    align-items: flex-start;
    justify-content: flex-start;
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

const MobileItem = styled.div`
  display: none;
  @media (max-width: ${device.medium}px) {
    display: flex;
    width: 100%;
  }
`;

const ProductInfoWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  img {
    width: 50px;
    border: 1px solid lightgrey;
  }
  @media (max-width: ${device.medium}px) {
    margin: 0 0 0 10px;
  }
  @media (max-width: ${device.small}px) {
    img {
      width: 50px;
    }
  }
  @media (max-width: ${device.extraSmall}px) {
    img {
      width: 60px;
    }
  }
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 20px;
  font-size: 13px;
  line-height: 20px;
  @media (max-width: ${device.medium}px) {
    flex: 0.8;
    p {
      font-size: 15px;
    }
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
    margin: 5px 0 0 0;
    font-size: 15px;
  }
  @media (max-width: ${device.small}px) {
    font-size: 13px;
  }
`;

const Count = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    cursor: pointer;
    font-size: 18px;
    background: white;
    border: 1px solid #c2c2c2;
    text-align: center;
  }
  @media (max-width: ${device.medium}px) {
    justify-content: flex-start;
    margin: 5px 0 0 0;
    button {
      font-size: 15px;
    }
  }
`;
