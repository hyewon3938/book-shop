import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";

// lib
import Timer from "@/lib/Timer";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

const AdCarousel = ({ data, isMobileMode }) => {
  const history = useHistory();

  const [currentIndex, setCurrentIndex] = useState(1);

  if (!data) return <div>error!</div>;

  const imageList = [data[data.length - 1], ...data, data[0]];
  const imageLength = imageList.length;
  const carouselStyle = {
    transform: `translateX(-${100 * currentIndex}%)`,
  };
  const carouselImage = useRef();
  const transitionSec = 0.7;
  const autoSlideDelay = 3000;

  const rightClickHandler = () => {
    autoSlideTimer.pause();
    if (currentIndex === imageLength - 1) return;
    if (!carouselImage.current) return;
    carouselImage.current.style.transition = `${transitionSec}s ease-in-out`;
    setCurrentIndex(currentIndex + 1);
  };

  const autoSlideTimer = new Timer(rightClickHandler, autoSlideDelay);

  useEffect(() => {
    if (!carouselImage) return;
    if (currentIndex === 0) {
      let timeId = setTimeout(() => {
        carouselImage.current.style.transition = "none";
        setCurrentIndex(imageLength - 2);
        clearTimeout(timeId);
      }, 1000);
      return;
    }
    if (currentIndex === imageLength - 1) {
      let timeId = setTimeout(() => {
        carouselImage.current.style.transition = "none";
        setCurrentIndex(1);
        clearTimeout(timeId);
      }, 1000);
      return;
    }
    autoSlideTimer.start();
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      autoSlideTimer.pause();
    };
  }, []);

  const leftClickHandler = () => {
    autoSlideTimer.pause();
    if (currentIndex === 0) return;
    carouselImage.current.style.transition = `${transitionSec}s ease-in-out`;
    setCurrentIndex(currentIndex - 1);
  };

  const adClickHandler = (url) => {
    history.push(url);
  };

  return (
    <Contents
      onMouseOver={() => autoSlideTimer.pause()}
      onMouseLeave={() => autoSlideTimer.start()}
    >
      <Icon className="fas fa-chevron-left" onClick={leftClickHandler}></Icon>
      <Icon className="fas fa-chevron-right" right onClick={rightClickHandler}></Icon>
      <AdImageWrap ref={carouselImage} style={carouselStyle}>
        {imageList.map((item, index) => {
          return (
            <AdImage
              key={index}
              style={{ left: `${100 * index}%` }}
              onClick={() => adClickHandler(item.url)}
            >
              {isMobileMode ? (
                <img src={item.imageUrl.mobile} alt={`메인광고${index}`} />
              ) : (
                <img src={item.imageUrl.pc} alt={`메인광고${index}`} />
              )}
            </AdImage>
          );
        })}
      </AdImageWrap>
      <IndexIndicator>{`${
        data.length < currentIndex ? 1 : currentIndex === 0 ? data.length : currentIndex
      } / ${data.length}`}</IndexIndicator>
    </Contents>
  );
};

export default AdCarousel;

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
        right: 20px;
      `;
    } else {
      return css`
        left: 20px;
      `;
    }
  }}
  @media (max-width: ${device.medium}px) {
    width: 30px;
    height: 30px;
    font-size: 20px;
  }
`;

const Contents = styled.div`
  width: 100%;
  height: inherit;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  &:hover ${Icon} {
    display: flex;
  }
`;

const IndexIndicator = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  bottom: 20px;
  background: rgba(0, 0, 0, 0.5);
  width: 50px;
  height: 30px;
  color: white;
  border-radius: 20px;
  @media (max-width: ${device.extraSmall}px) {
    width: 45px;
    height: 25px;
  }
`;

const AdImageWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AdImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;
