import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";

// Style
import { device } from "@/components/style/responsiveBreakPoints";
import { shine, animationSec } from "@/components/style/skeletonLoadingAnimation";

const BookCarousel = ({ data }) => {
  const history = useHistory();

  const [currentIndex, setCurrentIndex] = useState(3);
  const dataList = !data
    ? 0
    : [
        data[data.length - 3],
        data[data.length - 2],
        data[data.length - 1],
        ...data,
        data[0],
        data[1],
        data[2],
      ];
  const dataLength = dataList.length;

  const carouselStyle = {
    transform: `translateX(-${20 * (currentIndex - 2)}%)`,
  };
  const bookImageList = useRef();

  const rightClickHandler = () => {
    if (currentIndex === dataLength - 1) return;
    bookImageList.current.style.transition = `0.5s ease-in-out`;
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    if (currentIndex === 2) {
      let timeId = setTimeout(() => {
        bookImageList.current.style.transition = "none";
        setCurrentIndex(dataLength - 4);
        clearTimeout(timeId);
      }, 500);
      return;
    }
    if (currentIndex === dataLength - 3) {
      let timeId = setTimeout(() => {
        bookImageList.current.style.transition = "none";
        setCurrentIndex(3);
        clearTimeout(timeId);
      }, 500);
      return;
    }
  }, [currentIndex]);

  const leftClickHandler = () => {
    if (currentIndex === 0) return;
    bookImageList.current.style.transition = `0.5s ease-in-out`;
    setCurrentIndex(currentIndex - 1);
  };

  const productClickHandler = (category, id) => {
    history.push(`/product/${category}/${id}`);
  };

  let emptyArray = [];

  for (var i = 0; i < 9; i++) {
    emptyArray.push(i);
  }

  return (
    <>
      {!data ? (
        <Contents>
          <BookWrap>
            <BookImageList ref={bookImageList} style={carouselStyle}>
              {emptyArray.map((item, index) => {
                if (index === currentIndex) {
                  return (
                    <Book
                      key={index}
                      style={{ left: `${20 * index}%`, zIndex: "2", cursor: "pointer" }}
                    >
                      <div></div>
                    </Book>
                  );
                }
                if (index === currentIndex + 1 || index === currentIndex - 1) {
                  return (
                    <Book key={index} style={{ left: `${20 * index}%`, zIndex: "1" }}>
                      <div style={{ opacity: "0.8", transform: "scale(0.6)" }}></div>
                    </Book>
                  );
                } else {
                  return (
                    <Book key={index} style={{ left: `${20 * index}%` }}>
                      <div style={{ opacity: "0.5", transform: "scale(0.4)" }}></div>
                    </Book>
                  );
                }
              })}
            </BookImageList>
          </BookWrap>
          <Description loading="true"></Description>
        </Contents>
      ) : (
        <Contents>
          <Icon className="fas fa-chevron-left" onClick={leftClickHandler}></Icon>
          <Icon className="fas fa-chevron-right" right onClick={rightClickHandler}></Icon>
          <BookWrap>
            <BookImageList ref={bookImageList} style={carouselStyle}>
              {dataList.map((item, index) => {
                if (index === currentIndex) {
                  return (
                    <Book
                      key={index}
                      style={{ left: `${20 * index}%`, zIndex: "2", cursor: "pointer" }}
                    >
                      <Cover
                        src={item.coverImage}
                        style={{ opacity: "1" }}
                        onClick={() => productClickHandler(item.category, item.product_id)}
                      />
                    </Book>
                  );
                }
                if (index === currentIndex + 1 || index === currentIndex - 1) {
                  return (
                    <Book key={index} style={{ left: `${20 * index}%`, zIndex: "1" }}>
                      <Cover
                        src={item.coverImage}
                        style={{ opacity: "0.8", transform: "scale(0.6)" }}
                      />
                    </Book>
                  );
                } else {
                  return (
                    <Book key={index} style={{ left: `${20 * index}%` }}>
                      <Cover
                        src={item.coverImage}
                        style={{ opacity: "0.5", transform: "scale(0.4)" }}
                      />
                    </Book>
                  );
                }
              })}
            </BookImageList>
          </BookWrap>
          <Description>
            <div>{dataList[currentIndex].title}</div>
            <p>{dataList[currentIndex].description}</p>
          </Description>
        </Contents>
      )}
    </>
  );
};

export default BookCarousel;

const Icon = styled.i`
  display: flex;
  position: absolute;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  cursor: pointer;
  z-index: 50;
  color: #383737;
  ${(props) => {
    if (props.right) {
      return css`
        right: 10px;
      `;
    } else {
      return css`
        left: 10px;
      `;
    }
  }}
`;

const Contents = styled.div`
  width: 100%;
  height: inherit;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  @media (max-width: ${device.large}px) {
    padding: 20px 15px;
  }
  @media (max-width: ${device.medium}px) {
    flex-direction: column;
    justify-content: space-around;
    padding: 20px 15px 0 15px;
  }
  ${(props) => {
    if (props.loading) {
      return css`
        background-color: #e2e5e7;
        animation: ${shine} ${animationSec}s ease infinite;
      `;
    }
  }}
`;

const BookWrap = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;
  @media (max-width: ${device.large}px) {
    width: 45%;
  }
  @media (max-width: ${device.medium}px) {
    width: 100%;
    height: 50%;
  }
  @media (max-width: ${device.small}px) {
    width: 100%;
    height: 45%;
  }
  @media (max-width: ${device.extraSmall}px) {
    width: 100%;
    height: 40%;
  }
`;
const BookImageList = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  transition: 0.5s ease-in-out;
`;

const Description = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 50px;
  text-align: center;
  margin: 0 0 0 20px;
  div {
    width: 100%;
    font-family: "NotoSerifKR";
    font-size: 17px;
    font-weight: bold;
    line-height: 25px;
    word-break: keep-all;
    margin: 0 0 40px 0;
    border-bottom: 1px #ccc18f solid;
    border-top: 1px #ccc18f solid;
    padding: 10px 0 10px 0;
  }
  p {
    width: 100%;
    line-height: 22px;
    font-size: 15px;
    color: #585858;
  }
  @media (max-width: ${device.extraLarge}px) {
    padding: 10px 30px;
  }

  @media (max-width: ${device.medium}px) {
    width: 100%;
    height: 45%;
    margin: 0;
    div {
      margin: 0 0 20px 0;
    }
  }
  @media (max-width: ${device.small}px) {
    div {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }
  @media (max-width: ${device.extraSmall}px) {
    div {
      font-size: 15px;
    }
    height: 55%;
  }
  ${(props) => {
    if (props.loading) {
      return css`
        background-color: #e2e5e7;
        animation: ${shine} ${animationSec}s ease infinite;
      `;
    }
  }}
`;

const Book = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 20%;
  height: 100%;
  transition: inherit;
  div {
    width: 400px;
    height: 95%;
    background-color: #e2e5e7;
    animation: ${shine} ${animationSec}s ease infinite;
  }
`;

const Cover = styled.img`
  height: inherit;
  transition: inherit;
`;
