import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

// Components
import Product from "@/components/Product";

// Actions
import { getProducts as listProducts } from "@/redux/actions/productActions";

const HomePage = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Wrap>
      <HomePageTitle>Latest Products</HomePageTitle>
      <HomeScreenProducts>
        {loading ? (
          <h2>loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product, index) => <Product key={index} data={product} />)
        )}
      </HomeScreenProducts>
    </Wrap>
  );
};

export default HomePage;

const Wrap = styled.div`
  max-width: 1300px;
  margin: 1rem auto;
`;

const HomePageTitle = styled.h2`
  font-size: 1.5rem;
  color: #171717;
  margin: 0 0 1rem 8px;
`;

const HomeScreenProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1232px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }
`;
