import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

// Components
import PageWrap from "@/components/style/layout/PageWrap";
import Product from "@/components/ProductsPage/Product";

// Actions
import { getProducts as listProducts } from "@/redux/actions/productActions";

const ProductsPage = ({ match }) => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    const categoryParam = match.params.category === "전체보기" ? "" : match.params.category;
    dispatch(listProducts(categoryParam));
  }, [dispatch, match.params.category]);

  return (
    <PageWrap>
      <Wrap>
        {loading ? (
          <h2>loading...</h2>
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

  @media (max-width: 800px) {
    font-size: 15px;
    margin: 0 3rem 1.5rem 3rem;
  }
  @media (max-width: 530px) {
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
