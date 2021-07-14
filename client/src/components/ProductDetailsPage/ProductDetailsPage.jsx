import React from "react";
import styled from "styled-components";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Components
import PageWrap from "@/components/style/layout/PageWrap";
import ProductInfo from "@/components/ProductDetailsPage/ProductInfo";
import ProductDetails from "@/components/ProductDetailsPage/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <PageWrap>
      <Wrap>
        <ProductInfo />
        <ProductDetails />
      </Wrap>
    </PageWrap>
  );
};

export default ProductDetailsPage;

const Wrap = styled.div`
  @media (max-width: ${device.large}) {
    padding: 0.5rem 0.5rem 50px 0.5rem;
  }
`;
