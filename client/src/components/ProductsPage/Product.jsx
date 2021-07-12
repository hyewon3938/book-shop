import React from "react";
import styled from "styled-components";

// Images
import woodTexture from "@/image/woodTexture.jpg";

const Product = () => {
  return (
    <Wrap>
      <Book src="http://image.yes24.com/goods/99181849/XL" alt="bookName"></Book>
      <Shelf>
        <div />
      </Shelf>
      <BookInfo>
        <BookTitle>당신에게 시가 있다면 당신은 혼자가 아닙니다</BookTitle>
        <span>에세이 | 양희은</span>
        <BookPrice>14500원</BookPrice>
      </BookInfo>
    </Wrap>
  );
};

export default Product;

const Shelf = styled.div`
  width: 200px;
  height: 20px;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  background: #492211;
  div {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-image: url(woodTexture.jpg);
  }
  @media (max-width: 530px) {
    width: 130px;
    height: 15px;
  }
`;

const Book = styled.img`
  width: 150px;
  height: 228px;
  margin: 0 10px;
  cursor: pointer;
  box-shadow: 10px 2px 10px rgba(0, 0, 0, 0.4);
  background: #cacba8c8;
  @media (max-width: 530px) {
    width: 100px;
    height: 152px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  &:hover ${Book} {
    transform: scale(1.15) translateY(8px);
    transition: all 0.3s ease-out;
    z-index: 1;
  }
  &:hover ${Shelf} {
    transform: translateY(-8px) scale(0);
    transition: all 0.3s ease-out;
  }
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 20px 0;
  span {
    margin: 10px 0 0 0;
    font-size: 13px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 530px) {
    width: 130px;
    margin: 20px 0;
  }
`;

const BookTitle = styled.p`
  font-family: "NotoSerifKR";
  font-size: 15px;
  font-weight: bold;
  line-height: 18px;
  width: 100%;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  @media (max-width: 530px) {
    font-size: 13px;
  }
`;

const BookPrice = styled.p`
  font-weight: bold;
  font-size: 15px;
  margin: 5px 0 0 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
