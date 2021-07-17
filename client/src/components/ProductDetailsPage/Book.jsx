import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// BookCover
const coverWidth = 300;
const coverHeight = 450;
const depth = 50;

// MobileBookCover
const mCoverWidth = 230;
const mCoverHeight = 330;
const mDepth = 30;

const Book = ({ coverImage, size, title }) => {
  const { front, back, side } = coverImage;
  const { width, height, depth } = size;
  const left = side ? side : "";

  const [isFrontCover, setIsFrontCover] = useState(true);
  const [isAnimationEnd, setIsAnimationEnd] = useState(false);

  const coverStyle = isFrontCover
    ? {
        transform: "perspective(1500px) translateZ(-50px) rotate3d(0, 0, 0, 0)",
      }
    : {
        transform: `perspective(1500px) translateZ(-50px) ${
          window.innerWidth <= device.extraLarge
            ? `translateX(${mCoverWidth}px)`
            : `translateX(${coverWidth}px)`
        } rotate3d(0, 1, 0, ${side ? "" : "-"}180deg)`,
      };

  const bookCoverClickHandler = () => {
    if (!isAnimationEnd) return;
    setIsFrontCover(!isFrontCover);
  };

  const isReverse = left ? "" : "reverse";

  return (
    <>
      <CoverImageWrap
        isReverse={isReverse}
        onClick={bookCoverClickHandler}
        onAnimationEnd={() => setIsAnimationEnd(true)}
        onAnimationStart={() => setIsAnimationEnd(false)}
        style={coverStyle}
      >
        <Front>
          <img src={front} alt={title} />
        </Front>
        <Left>
          <img src={left} alt={title} />
        </Left>
        <Right></Right>
        <Back>
          <img src={back} alt={title} />
        </Back>
      </CoverImageWrap>
    </>
  );
};

export default Book;

const Front = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${coverWidth}px;
  height: ${coverHeight}px;
  transform: rotateY(0deg) translateZ(${depth / 2}px);
  box-shadow: 15px 5px 15px rgba(0, 0, 0, 0.4);
  background: #383838;
  @media (max-width: ${device.extraLarge}px) {
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
  @media (max-width: ${device.extraLarge}px) {
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
  @media (max-width: ${device.extraLarge}px) {
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
  background: #f3f3f3;
  transform: rotateY(90deg) translateZ(${coverWidth / 2 - coverWidth * 0.01}px);
  @media (max-width: ${device.extraLarge}px) {
    left: ${mCoverWidth / 2 - mDepth / 2}px;
    width: ${mDepth}px;
    height: ${mCoverHeight}px;
    transform: rotateY(90deg) translateZ(${mCoverWidth / 2 - coverWidth * 0.01}px);
  }
`;

const rotation = keyframes`
  0% {
    transform: perspective(1500px) translateZ(-50px) rotate3d(0, 0, 0, 0);

  }
  50% {
    transform: perspective(1500px) translateZ(-50px) rotate3d(0, 1, 0, 30deg);
  }
  100%{
    transform: perspective(1500px) translateZ(-50px) rotate3d(0, 0, 0, 0);

  }
`;

const reverseRotation = keyframes`
  0% {
    transform: perspective(1500px) translateZ(-50px) rotate3d(0, 0, 0, 0);

  }
  50% {
    transform: perspective(1500px) translateZ(-50px) rotate3d(0, 1, 0, -30deg);
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
  animation: ${rotation} 2.5s;
  margin: 0 ${coverWidth}px 0 0;
  ${(props) => {
    if (props.isReverse) {
      return css`
        animation: ${reverseRotation} 2.5s;
      `;
    }
  }};
  div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    cursor: url("https://user-images.githubusercontent.com/58355499/125520237-7fccfd2f-b57c-415d-b5a5-95bd5e2de254.png"),
      pointer;
  }

  @media (max-width: ${device.extraLarge}px) {
    height: ${mCoverHeight}px;
    margin: 0 ${mCoverWidth}px 0 0;
  }
`;
