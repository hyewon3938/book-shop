import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";

// Components
import PageWrap from "@/components/style/layout/PageWrap";
import Product from "@/components/ProductsPage/Product";

// Actions
import { getProducts } from "@/redux/actions/productActions";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const productsData = useSelector((state) => state.getProducts);
  const { products, loading, error } = productsData;

  useEffect(() => {
    const categoryParam = match.params.category === "전체보기" ? "" : match.params.category;
    dispatch(getProducts(categoryParam));
  }, [match]);

  const emptyArray = new Array(20).fill(0);

  return (
    <PageWrap>
      <Wrap>
        {loading ? (
          <>
            <CategoryTitle>{match.params.category}</CategoryTitle>
            <ProductsWrap>
              {emptyArray.map((item, index) => {
                return <Product key={index} />;
              })}
            </ProductsWrap>
          </>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <CategoryTitle>
              {match.params.category} ({products.length})
            </CategoryTitle>
            <ProductsWrap>
              {products.map((product) => {
                return <Product key={product._id} data={product} />;
              })}
            </ProductsWrap>
          </>
        )}
      </Wrap>
    </PageWrap>
  );
};

export default ProductsPage;

const Wrap = styled.div`
  margin: 2rem 0;
`;

const CategoryTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0 3.5rem 1rem 3.5rem;
  font-family: "NotoSerifKR";

  @media (max-width: ${device.medium}px) {
    font-size: 15px;
    margin: 0 3rem 1.5rem 3rem;
  }
  @media (max-width: ${device.small}px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 0 1rem 0;
  }
`;

const ProductsWrap = styled.div`
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
