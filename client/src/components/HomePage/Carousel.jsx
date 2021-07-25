import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const imageList = [data[data.length - 1], ...data, data[0]];
  const imageLength = imageList.length;
  const carouselStyle = {
    transform: `translateX(-${1300 * currentIndex}px)`,
  };
  const carouselImage = useRef();

  useEffect(() => {
    if (currentIndex === 0) {
      let timeId = setTimeout(() => {
        carouselImage.current.style.transition = "none";
        setCurrentIndex(imageLength - 2);
        clearTimeout(timeId);
      }, 500);
      return;
    }
    if (currentIndex === imageLength - 1) {
      let timeId = setTimeout(() => {
        carouselImage.current.style.transition = "none";
        setCurrentIndex(1);
        clearTimeout(timeId);
      }, 500);
      return;
    }
  }, [currentIndex]);

  const leftClickHandler = () => {
    if (currentIndex === 0) return;
    carouselImage.current.style.transition = "0.5s ease-in-out";
    setCurrentIndex(currentIndex - 1);
  };

  const rightClickHandler = () => {
    if (currentIndex === imageLength - 1) return;
    carouselImage.current.style.transition = "0.5s ease-in-out";
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <Contents>
      <Icon className="fas fa-chevron-left" onClick={leftClickHandler}></Icon>
      <Icon className="fas fa-chevron-right" right onClick={rightClickHandler}></Icon>
      <AdImageWrap ref={carouselImage} style={carouselStyle}>
        {imageList.map((item, index) => {
          return (
            <AdImage key={index} style={{ left: `${1300 * index}px` }}>
              <img src={item} alt={`메인광고${index}`} />
            </AdImage>
          );
        })}
      </AdImageWrap>
    </Contents>
  );
};

export default Carousel;

const Icon = styled.i`
  display: none;
  position: absolute;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 1;
  ${(props) => {
    if (props.right) {
      return css`
        right: 0;
      `;
    } else {
      return css`
        left: 0;
      `;
    }
  }}
`;

const Contents = styled.div`
  width: 100%;
  height: 480px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &:hover ${Icon} {
    display: flex;
  }
`;

const AdImageWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in-out;
`;

const AdImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #de3c15; */
  img {
    width: 100%;
  }
`;
