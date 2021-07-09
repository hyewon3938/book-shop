import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  const { imageUrl, name, price, description, descriptionImage, _id } = data;

  return (
    <Wrap>
      <img src={imageUrl} alt={name} />
      <ProductInfo>
        <InfoName>{name}</InfoName>
        <InfoDescription>{description.substring(0, 100)}...</InfoDescription>
      </ProductInfo>
      <Price>{price}원</Price>
      <Link to={`/product/${_id}`}>
        <InfoButton>View</InfoButton>
      </Link>
    </Wrap>
  );
};

export default Product;

const Wrap = styled.div`
  width: 300px;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  margin: 8px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    height: auto;
    margin: 0 0 8px 0;
  }
  p {
    margin: 0 0 8px 0;
  }
  @media (max-width: 1232px) {
    width: 360px;
  }
  @media (max-width: 1115px) {
    width: 330px;
  }
  @media (max-width: 1028px) {
    width: 300px;
  }
  @media (max-width: 950px) {
    width: 400px;
  }
  @media (max-width: 830px) {
    width: 330px;
  }
  @media (max-width: 700px) {
    width: 290px;
  }
  @media (max-width: 630px) {
    width: 450px;
  }
  @media (max-width: 500px) {
    width: 350px;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
`;

const ProductInfo = styled.div``;

const InfoName = styled.p`
  font-size: 1rem;
  overflow: hidden;
`;

const InfoDescription = styled.p`
  font-size: 0.8rem;
  max-height: 100px;
  overflow: hidden;
`;

const Price = styled.p`
  font-weight: bold;
`;

const InfoButton = styled.div`
  display: block;
  width: 100%;
  text-decoration: none;
  text-align: center;
  color: #171717;
  background: #f4f4f4;
  padding: 8px 16px;
  border: 1px solid #171717;
  font-size: 1rem;
  &:hover {
    background: #171717;
    color: #f4f4f4;
  }
`;
