import React from "react";
import styled from "styled-components";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Components
import Content from "@/components/ProductDetailsPage/Content";

const ProductDetails = ({ data }) => {
  return (
    <>
      {!data ? (
        <Wrap>
          <Content />
        </Wrap>
      ) : (
        <Wrap>
          <Content
            title="책정보"
            contents={{
              pages: data.pages,
              weight: data.weight,
              width: data.size.width,
              height: data.size.height,
              depth: data.size.depth,
            }}
          />
          <Content title="책소개" contents={data.description} />
          <Content title="목차" contents={data.contents} />
          {data.descriptionImageUrl.length === 0 ? (
            ""
          ) : (
            <>
              <Content title="소개 이미지" contents={data.descriptionImageUrl} />
            </>
          )}
        </Wrap>
      )}
    </>
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
