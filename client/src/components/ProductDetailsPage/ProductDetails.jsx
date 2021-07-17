import React from "react";
import styled from "styled-components";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

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
      <ContentWrap>
        <ContentTitle>책정보</ContentTitle>
        <Content>
          <span>{pages}쪽</span>
          <span>{weight}g</span>
          <span>
            {width}mmX{height}mmX{depth}mm
          </span>
        </Content>
      </ContentWrap>
      <ContentWrap>
        <ContentTitle>책소개</ContentTitle>
        <Content>
          {description.split("\n").map((line, index) => {
            return (
              <span key={index}>
                {line}
                <br />
              </span>
            );
          })}
        </Content>
      </ContentWrap>
      <ContentWrap>
        <ContentTitle>목차</ContentTitle>
        <Content>
          {contents.split("\n").map((line, index) => {
            return (
              <span key={index}>
                {line}
                <br />
              </span>
            );
          })}
        </Content>
      </ContentWrap>
      {descriptionImageUrl ? (
        <ContentWrap>
          <ContentTitle>소개 이미지</ContentTitle>
          <Content>
            <img src={descriptionImageUrl} alt={title + " 소개이미지"} />
          </Content>
        </ContentWrap>
      ) : (
        ""
      )}
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
    padding: 20px 0.5rem;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 20px;
  @media (max-width: ${device.large}px) {
    flex-direction: column;
    padding: 0 20px 30px 20px;
  }
  @media (max-width: ${device.small}px) {
    padding: 20px 10px;
  }
`;

const ContentTitle = styled.h1`
  font-family: "NotoSerifKR";
  font-size: 20px;
  display: flex;
  justify-content: center;
  flex: 0.3;
  margin: 20px;
  @media (max-width: ${device.large}px) {
    justify-content: flex-start;
    font-size: 18px;
    color: #4b4b20;
  }
  @media (max-width: ${device.small}px) {
    font-size: 15px;
    margin: 0;
  }
`;

const Content = styled.div`
  flex: 0.7;
  border-left: solid 1px grey;
  padding: 30px;
  line-height: 24px;
  img {
    width: 100%;
  }
  span {
    margin: 0 10px 0 0;
  }
  @media (max-width: ${device.large}px) {
    border-left: none;
    border-bottom: solid 1px #cecece;
    padding: 30px 20px;
  }
  @media (max-width: ${device.small}px) {
    padding: 30px 0;
  }
`;
