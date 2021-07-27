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
  const bookWrap = useRef();

  const rightClickHandler = () => {
    if (currentIndex === dataLength - 1) return;
    bookWrap.current.style.transition = `0.5s ease-in-out`;
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    if (currentIndex === 2) {
      let timeId = setTimeout(() => {
        bookWrap.current.style.transition = "none";
        setCurrentIndex(dataLength - 4);
        clearTimeout(timeId);
      }, 500);
      return;
    }
    if (currentIndex === dataLength - 3) {
      let timeId = setTimeout(() => {
        bookWrap.current.style.transition = "none";
        setCurrentIndex(3);
        clearTimeout(timeId);
      }, 500);
      return;
    }
  }, [currentIndex]);

  const leftClickHandler = () => {
    if (currentIndex === 0) return;
    bookWrap.current.style.transition = `0.5s ease-in-out`;
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
            <BookImageList ref={bookWrap} style={carouselStyle}>
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
            <BookImageList ref={bookWrap} style={carouselStyle}>
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
                        onClick={() => productClickHandler(item.category, item._id)}
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
  @media (max-width: ${device.medium}px) {
    width: 100%;
    height: 55%;
  }
  @media (max-width: ${device.small}px) {
    height: 50%;
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
  width: 50%;
  height: 100%;
  padding: 20px 70px 20px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    width: 100%;
    font-family: "NotoSerifKR";
    font-size: 20px;
    font-weight: bold;
    line-height: 25px;
    text-align: center;
    word-break: keep-all;
  }
  p {
    padding: 20px 0;
    line-height: 22px;
    font-size: 15px;
    color: #585858;
  }
  @media (max-width: ${device.medium}px) {
    width: 100%;
    border: none;
    padding: 20px;
    height: 45%;
    padding: 20px 20px 10px 20px;
  }
  @media (max-width: ${device.small}px) {
    height: 45%;
    span {
      font-size: 18px;
      line-height: 25px;
      margin: 30px 0 0 0;
    }
    p {
      line-height: 20px;
      font-size: 13px;
    }
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
