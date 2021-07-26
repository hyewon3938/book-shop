import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

const BookCarousel = ({ data }) => {
  const history = useHistory();

  const [currentIndex, setCurrentIndex] = useState(3);

  const dataList = [
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
  const bookImage = useRef();

  const rightClickHandler = () => {
    if (currentIndex === dataLength - 1) return;
    bookWrap.current.style.transition = `0.5s ease-in-out`;
    bookImage.current.style.transition = `0.5s ease-in-out`;
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    if (currentIndex === 2) {
      let timeId = setTimeout(() => {
        bookWrap.current.style.transition = "none";
        bookImage.current.style.transition = "none";
        setCurrentIndex(dataLength - 4);
        clearTimeout(timeId);
      }, 500);
      return;
    }
    if (currentIndex === dataLength - 3) {
      let timeId = setTimeout(() => {
        bookWrap.current.style.transition = "none";
        bookImage.current.style.transition = "none";
        setCurrentIndex(3);
        clearTimeout(timeId);
      }, 500);
      return;
    }
  }, [currentIndex]);

  const leftClickHandler = () => {
    if (currentIndex === 0) return;
    bookWrap.current.style.transition = `0.5s ease-in-out`;
    bookImage.current.style.transition = `0.5s ease-in-out`;
    setCurrentIndex(currentIndex - 1);
  };

  const productClickHandler = (category, id) => {
    history.push(`/product/${category}/${id}`);
  };

  return (
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
                    src={item.coverImage.front}
                    style={{ opacity: "1" }}
                    ref={bookImage}
                    onClick={() => productClickHandler(item.category, item._id)}
                  />
                </Book>
              );
            }
            if (index === currentIndex + 1 || index === currentIndex - 1) {
              return (
                <Book key={index} style={{ left: `${20 * index}%`, zIndex: "1" }}>
                  <Cover
                    src={item.coverImage.front}
                    style={{ opacity: "0.8", transform: "scale(0.6)" }}
                    ref={bookImage}
                  />
                </Book>
              );
            } else {
              return (
                <Book key={index} style={{ left: `${20 * index}%` }}>
                  <Cover
                    src={item.coverImage.front}
                    style={{ opacity: "0.5", transform: "scale(0.4)" }}
                    ref={bookImage}
                  />
                </Book>
              );
            }
          })}
        </BookImageList>
      </BookWrap>
      <Description>
        <span>{dataList[currentIndex].title}</span>
        <p>
          사람들이 책을 읽지 않게 되었다는 이야기가 나온 것은 이미 오래다. 너무 많이 들어서 더 이상
          문제의식을 갖지 않는 사람도 있을 것이다. 그렇다면 우리는 책을 읽지 않고 무엇을 하고
          있을까? 독서를 하지 않는다고 아예 글자를 안 보는 것은 아니다. 오히려 읽는 양은 더 늘었다.
        </p>
      </Description>
    </Contents>
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
`;

const Book = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 20%;
  height: 100%;
`;

const Cover = styled.img`
  height: inherit;
  transition: 0.5s ease-in-out;
`;
