import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

const mobileRatio = 0.75;

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
            ? `translateX(${width * 2 * mobileRatio}px)`
            : `translateX(${width * 2}px)`
        } rotate3d(0, 1, 0, ${left ? "" : "-"}180deg)`,
      };

  const bookCoverClickHandler = () => {
    if (!isAnimationEnd) return;
    setIsFrontCover(!isFrontCover);
  };

  const isReverse = left ? "" : "reverse";

  return (
    <Wrap>
      <CoverImageWrap
        width={width * 2}
        height={height * 2}
        depth={depth * 2}
        isReverse={isReverse}
        onClick={bookCoverClickHandler}
        onAnimationEnd={() => setIsAnimationEnd(true)}
        onAnimationStart={() => setIsAnimationEnd(false)}
        style={coverStyle}
      >
        <Front width={width * 2} height={height * 2} depth={depth * 2}>
          <img src={front} alt={title} />
        </Front>
        <Left width={width * 2} height={height * 2} depth={depth * 2}>
          <img src={left} alt={title} />
        </Left>
        <Right width={width * 2} height={height * 2} depth={depth * 2}></Right>
        <Back width={width * 2} height={height * 2} depth={depth * 2}>
          <img src={back} alt={title} />
        </Back>
      </CoverImageWrap>
      <Message>클릭해서 책을 확인해보세요</Message>
    </Wrap>
  );
};

export default Book;

const Wrap = styled.div`
  position: relative;
  transform: rotate3d(0, 0, 0, 0);
`;

const Message = styled.div`
  position: absolute;
  bottom: -30px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 12px;
  color: #8b8b8b;
  @media (max-width: ${device.large}px) {
    bottom: -20px;
    font-size: 10px;
  }
`;

const Front = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 15px 5px 15px rgba(0, 0, 0, 0.4);
  background: #383838;
  ${(props) => {
    return css`
      width: ${props.width}px;
      height: ${props.height}px;
      transform: rotateY(0deg) translateZ(${props.depth / 2}px);
    `;
  }};
  @media (max-width: ${device.extraLarge}px) {
    ${(props) => {
      return css`
        width: ${props.width * mobileRatio}px;
        height: ${props.height * mobileRatio}px;
        transform: rotateY(0deg) translateZ(${(props.depth * mobileRatio) / 2}px);
      `;
    }};
  }
`;

const Back = styled.div`
  background: #383838;
  ${(props) => {
    return css`
      width: ${props.width}px;
      height: ${props.height}px;
      transform: rotateY(180deg) translateZ(${props.depth / 2}px);
    `;
  }};
  @media (max-width: ${device.extraLarge}px) {
    ${(props) => {
      return css`
        width: ${props.width * mobileRatio}px;
        height: ${props.height * mobileRatio}px;
        transform: rotateY(180deg) translateZ(${(props.depth * mobileRatio) / 2}px);
      `;
    }};
  }
`;
const Left = styled.div`
  background: #383838;
  ${(props) => {
    return css`
      width: ${props.depth}px;
      height: ${props.height}px;
      transform: rotateY(-90deg) translateZ(${props.width / 2}px);
      left: ${props.width / 2 - props.depth / 2}px;
    `;
  }};
  @media (max-width: ${device.extraLarge}px) {
    ${(props) => {
      return css`
        width: ${props.depth * mobileRatio}px;
        height: ${props.height * mobileRatio}px;
        transform: rotateY(-90deg) translateZ(${(props.width * mobileRatio) / 2}px);
        left: ${(props.width * mobileRatio) / 2 - (props.depth * mobileRatio) / 2}px;
      `;
    }};
  }
`;

const Right = styled.div`
  ${(props) => {
    return css`
      width: ${props.depth}px;
      height: ${props.height}px;
      transform: rotateY(90deg) translateZ(${props.width / 2 - props.width * 0.01}px);
      left: ${props.width / 2 - props.depth / 2}px;
      background: #f3f3f3;
    `;
  }};
  @media (max-width: ${device.extraLarge}px) {
    ${(props) => {
      return css`
        width: ${props.depth * mobileRatio}px;
        height: ${props.height * mobileRatio}px;
        transform: rotateY(90deg)
          translateZ(${(props.width * mobileRatio) / 2 - props.width * mobileRatio * 0.01}px);
        left: ${(props.width * mobileRatio) / 2 - (props.depth * mobileRatio) / 2}px;
      `;
    }};
  }
`;

const rotation = keyframes`
  0% {
    transform: perspective(1500px) translateZ(-50px) rotate3d(0, 0, 0, 0);
  }
  30% {
    transform: perspective(1500px) translateZ(-50px) rotate3d(0, 1, 0, 30deg);
  }
  70% {
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
  30% {
    transform: perspective(1500px) translateZ(-50px) rotate3d(0, 1, 0, -30deg);
  }
  70% {
    transform: perspective(1500px) translateZ(-50px) rotate3d(0, 1, 0, -30deg);
  }
  100%{
    transform: perspective(1500px) translateZ(-50px) rotate3d(0, 0, 0, 0);

  }
`;

const CoverImageWrap = styled.div`
  position: relative;
  transform-style: preserve-3d;
  transform: perspective(1500px) translateZ(-50px) rotate3d(0, 0, 0, 0);
  transition: 1s;
  animation: ${rotation} 2.5s;
  ${(props) => {
    if (props.isReverse) {
      return css`
        animation: ${reverseRotation} 2.5s;
        height: ${props.height}px;
        margin: 0 ${props.width}px 0 0;
      `;
    } else {
      return css`
        height: ${props.height}px;
        margin: 0 ${props.width}px 0 0;
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
    ${(props) => {
      return css`
        height: ${props.height * mobileRatio}px;
        margin: 0 ${props.width * mobileRatio}px 0 0;
      `;
    }};
  }
`;
