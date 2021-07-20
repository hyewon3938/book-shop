import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Components
import Content from "@/components/ProductDetailsPage/Content";

const ProductDetails = ({ data }) => {
  const {
    title,
    pages,
    size: { width, height, depth },
    weight,
    contents,
    description,
    descriptionImageUrl,
    countInStock,
  } = data;

  return (
    <Wrap>
      <Content
        title="책정보"
        contents={{ pages: pages, weight: weight, width: width, height: height, depth: depth }}
      />
      <Content title="책소개" contents={description} />
      <Content title="목차" contents={contents} />
      {descriptionImageUrl ? <Content title="소개 이미지" contents={descriptionImageUrl} /> : ""}
    </Wrap>
  );
};

export default ProductDetails;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 0 0 0;
  border-top: solid 1px grey;
  @media (max-width: ${device.extraLarge}px) {
    margin: 50px 0 0 0;
  }
  @media (max-width: ${device.large}px) {
    margin: 15px 0 0 0;
    padding: 20px 0.5rem 50px 0.5rem;
  }
`;
