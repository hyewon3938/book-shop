import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Components
import Product from "@/components/ProductsPage/Product";
import BookCarousel from "@/components/HomePage/BookCarousel";

// Actions
import { getProducts } from "@/redux/actions/productActions";

const TodayProducts = () => {
  const dispatch = useDispatch();

  const productsData = useSelector((state) => state.getProducts);
  const { products, loading, error } = productsData;

  useEffect(() => {
    dispatch(getProducts("잡지"));
  }, [dispatch]);

  return (
    <Wrap>
      <Title>오늘의 책</Title>
      <ProductList>{products.length === 0 ? "" : <BookCarousel data={products} />}</ProductList>
    </Wrap>
  );
};

export default TodayProducts;

const Wrap = styled.div`
  width: 100%;
  padding: 30px 0;
  @media (max-width: ${device.medium}px) {
    padding: 30px 0 10px 0;
  }
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  font-family: "NotoSerifKR";
  margin: 0 0 30px 20px;
  @media (max-width: ${device.small}px) {
    font-size: 15px;
    margin: 0 0 20px 15px;
  }
`;

const ProductList = styled.div`
  display: flex;
  height: 350px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  @media (max-width: ${device.medium}px) {
    height: 500px;
  }
  @media (max-width: ${device.small}px) {
    height: 600px;
  }
`;
