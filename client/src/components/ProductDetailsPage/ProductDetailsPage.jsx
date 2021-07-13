import React, { useState } from "react";
import styled from "styled-components";

// Components
import PageWrap from "@/components/style/layout/PageWrap";
import ProductInfo from "@/components/ProductDetailsPage/ProductInfo";

const ProductDetailsPage = () => {
  return (
    <PageWrap>
      <ProductInfo />
    </PageWrap>
  );
};

export default ProductDetailsPage;
