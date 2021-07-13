import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Book = () => {
  const [isFrontCover, setIsFrontCover] = useState(true);

  const sideCoverImageUrl =
    "https://image.aladin.co.kr/product/27514/85/spineflip/K032733196_d.jpg";

  const coverStyle = isFrontCover
    ? { transform: "perspective(1500px) translateZ(-50px) rotate3d(0, 0, 0, 0 )" }
    : {
        transform: `perspective(1500px) translateZ(0px) ${
          window.innerWidth <= 1300 ? `translateX(${mCoverWidth}px)` : `translateX(${coverWidth}px)`
        } rotate3d(0, 1, 0, ${sideCoverImageUrl ? "" : "-"}180deg)`,
      };

  const bookCoverClickHandler = () => {
    setIsFrontCover(!isFrontCover);
  };
  return (
    <CoverImageWrap onClick={bookCoverClickHandler} style={coverStyle}>
      <Front>
        <img
          src="https://image.aladin.co.kr/product/27514/85/cover500/k032733196_1.jpg"
          alt="bookName"
        />
      </Front>
      <Left>
        <img
          src="https://image.aladin.co.kr/product/27514/85/spineflip/K032733196_d.jpg"
          alt="BookName"
        />
      </Left>
      <Right></Right>
      <Back>
        <img
          src="https://image.aladin.co.kr/product/27514/85/letslook/K032733196_b.jpg"
          alt="BookName"
        />
      </Back>
    </CoverImageWrap>
  );
};

export default Book;

// BookCover
const coverWidth = 300;
const coverHeight = 450;
const depth = 50;

// MobileBookCover
const mCoverWidth = 230;
const mCoverHeight = 330;
const mDepth = 30;

const Front = styled.div`
  width: ${coverWidth}px;
  height: ${coverHeight}px;
  transform: rotateY(0deg) translateZ(${depth / 2}px);
  box-shadow: 15px 5px 15px rgba(0, 0, 0, 0.4);
  background: #383838;
  @media (max-width: 1300px) {
    width: ${mCoverWidth}px;
    height: ${mCoverHeight}px;
    transform: rotateY(0deg) translateZ(${mDepth / 2}px);
  }
`;
const Back = styled.div`
  width: ${coverWidth}px;
  height: ${coverHeight}px;
  transform: rotateY(180deg) translateZ(${depth / 2}px);
  background: #383838;
  @media (max-width: 1300px) {
    width: ${mCoverWidth}px;
    height: ${mCoverHeight}px;
    transform: rotateY(180deg) translateZ(${mDepth / 2}px);
  }
`;
const Left = styled.div`
  left: ${coverWidth / 2 - depth / 2}px;
  width: ${depth}px;
  height: ${coverHeight}px;
  transform: rotateY(-90deg) translateZ(${coverWidth / 2}px);
  background: #383838;
  @media (max-width: 1300px) {
    left: ${mCoverWidth / 2 - mDepth / 2}px;
    width: ${mDepth}px;
    height: ${mCoverHeight}px;
    transform: rotateY(-90deg) translateZ(${mCoverWidth / 2}px);
  }
`;
const Right = styled.div`
  left: ${coverWidth / 2 - depth / 2}px;
  width: ${depth}px;
  height: ${coverHeight}px;
  background: #ebeaea;
  transform: rotateY(90deg) translateZ(${coverWidth / 2}px);
  @media (max-width: 1300px) {
    left: ${mCoverWidth / 2 - mDepth / 2}px;
    width: ${mDepth}px;
    height: ${mCoverHeight}px;
    transform: rotateY(90deg) translateZ(${mCoverWidth / 2}px);
  }
`;

const rotation = keyframes`
  0% {
    transform: perspective(1500px) translateZ(-50px) rotate3d(0, 0, 0, 0);

  }
  50% {
    transform: perspective(1500px) translateZ(0px) rotate3d(0, 1, 0, 30deg);
  }
  100%{
    transform: perspective(1500px) translateZ(-50px) rotate3d(0, 0, 0, 0);

  }
`;

const CoverImageWrap = styled.div`
  height: ${coverHeight}px;
  position: relative;
  transform-style: preserve-3d;
  transform: perspective(1500px) translateZ(-50px) rotate3d(0, 0, 0, 0);
  transition: 1s;
  cursor: pointer;
  animation: ${rotation} 2.5s;
  margin: 0 ${coverWidth}px 0 0;
  div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.5em;
  }
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1300px) {
    height: ${mCoverHeight}px;
    margin: 0 ${mCoverWidth}px 0 0;
  }
`;
