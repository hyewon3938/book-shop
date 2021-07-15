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
      <ProductInfo />
      <ProductDetails />
    </PageWrap>
  );
};

export default ProductDetailsPage;
