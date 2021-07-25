import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Components
import Product from "@/components/ProductsPage/Product";

// Actions
import { getProducts } from "@/redux/actions/productActions";

const NewArrival = () => {
  const dispatch = useDispatch();

  const productsData = useSelector((state) => state.getProducts);
  const { products, loading, error } = productsData;

  useEffect(() => {
    dispatch(getProducts("잡지"));
  }, [dispatch]);

  return (
    <Wrap>
      <Title>새로 들어온 책</Title>
      <NewArrivalList>
        {products.map((product, index) => {
          return <Product key={product._id} data={product} />;
        })}
      </NewArrivalList>
    </Wrap>
  );
};

export default NewArrival;

const Wrap = styled.div`
  width: 100%;
  padding: 30px 0;
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

const NewArrivalList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 1250px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
