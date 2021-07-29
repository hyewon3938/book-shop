import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// Images
import woodTexture from "@/image/woodTexture.jpg";

// Style
import { device } from "@/components/style/responsiveBreakPoints";
import { shine, animationSec } from "@/components/style/skeletonLoadingAnimation";

// lib
import { numberWithCommas } from "@/lib/utils";

// Actions
import { addToCart } from "@/redux/actions/cartActions";

const Product = ({ data }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isShown, setIsShown] = useState(false);
  const target = useRef();

  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          setIsShown(true);
        } else {
          setIsShown(false);
        }
      });
    };
    const observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 0,
      rootMargin: "0px",
    });

    observer.observe(target.current);
  }, []);

  const productClickHandler = () => {
    history.push(`/product/${data.category}/${data._id}`);
  };

  const addCartButtonHandler = () => {
    const payload = {
      _id: data._id,
      title: data.title,
      category: data.category,
      imageUrl: data.coverImage.front,
      price: data.price,
      qty: 1,
      isSelected: true,
    };

    dispatch(addToCart(payload));
    let result = confirm("상품이 카트에 담겼습니다.\n바로 확인하시겠습니까?");
    result ? history.push("/cart") : "";
  };

  return (
    <>
      {!data || !isShown ? (
        <Wrap ref={target}>
          <SkeletonBook></SkeletonBook>
          <Shelf>
            <div />
            <BookCategory>
              <p>　</p>
            </BookCategory>
          </Shelf>
          <BookInfo loading="true">
            <BookTitle loading="true">　</BookTitle>
            <span>　</span>
            <BookPrice loading="true">　</BookPrice>
          </BookInfo>
        </Wrap>
      ) : (
        <Wrap>
          <Book src={data.coverImage.front} alt={data.title} onClick={productClickHandler}></Book>
          <Shelf>
            <div />
            <BookCategory>
              <p>{data.category}</p>
            </BookCategory>
          </Shelf>
          <BookInfo>
            <BookTitle onClick={productClickHandler}>{data.title}</BookTitle>
            <span>{data.writer}</span>
            <PriceCartWrap>
              {data.countInStock === 0 ? (
                <BookPrice>재고없음</BookPrice>
              ) : (
                <>
                  <BookPrice>{numberWithCommas(data.price)}원</BookPrice>
                  <Icon onClick={addCartButtonHandler} className="fas fa-shopping-cart"></Icon>
                </>
              )}
            </PriceCartWrap>
          </BookInfo>
        </Wrap>
      )}
    </>
  );
};

export default Product;

const Shelf = styled.div`
  width: 200px;
  height: 25px;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  background: #492211;
  position: relative;
  div {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-image: url(woodTexture.jpg);
  }
  @media (max-width: ${device.small}px) {
    width: 130px;
    height: 20px;
  }
`;

const Book = styled.img`
  min-width: 150px;
  height: 228px;
  margin: 0 10px;
  cursor: pointer;
  box-shadow: 10px 2px 10px rgba(0, 0, 0, 0.4);
  background-color: #e2e5e7;
  @media (max-width: ${device.small}px) {
    min-width: 100px;
    height: 152px;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  &:hover ${Book} {
    transform: scale(1.15) translateY(8px);
    transition: all 0.3s ease-out;
    z-index: 1;
  }
  &:hover ${Shelf} {
    transform: translateY(-8px) scale(0);
    transition: all 0.3s ease-out;
  }
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 20px 0;
  span {
    margin: 10px 0 5px 0;
    font-size: 13px;
    width: 200px;
    text-align: center;
    line-height: 15px;
    height: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @media (max-width: ${device.small}px) {
    width: 130px;
    margin: 20px 0;
    span {
      width: 130px;
    }
  }
  ${(props) => {
    if (props.loading) {
      return css`
        span {
          width: 200px;
          background-color: #e2e5e7;
          animation: ${shine} ${animationSec}s ease infinite;
        }
        @media (max-width: ${device.small}px) {
          span {
            width: 130px;
          }
        }
      `;
    }
  }}
`;

const BookTitle = styled.div`
  font-family: "NotoSerifKR";
  font-size: 15px;
  font-weight: bold;
  line-height: 18px;
  width: 100%;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  @media (max-width: ${device.small}px) {
    font-size: 13px;
  }
  ${(props) => {
    if (props.loading) {
      return css`
        width: 100%;
        background-color: #e2e5e7;
        animation: ${shine} ${animationSec}s ease infinite;
      `;
    }
  }}
`;

const PriceCartWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0 0 0;
`;

const Icon = styled.i`
  margin: 0 0 0 5px;
  cursor: pointer;
`;

const BookPrice = styled.p`
  font-weight: bold;
  font-size: 15px;
  display: flex;
  justify-content: center;
  ${(props) => {
    if (props.loading) {
      return css`
        width: 100%;
        background-color: #e2e5e7;
        animation: ${shine} ${animationSec}s ease infinite;
      `;
    }
  }}
`;

const BookCategory = styled.span`
  position: absolute;
  top: -21px;
  right: 3px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 5;
  p {
    font-family: "NotoSerifKR";
    background: black;
    font-size: 10px;
    padding: 5px 10px;
    color: #fff;
    border-radius: 3px 3px 0 0;
  }
  @media (max-width: ${device.small}px) {
    font-size: 8px;
    top: -18px;
    right: 3px;
    p {
      padding: 4px 7px;
    }
  }
`;

const SkeletonBook = styled.div`
  width: 150px;
  height: 228px;
  margin: 0 10px;
  box-shadow: 10px 2px 10px rgba(0, 0, 0, 0.4);
  background-color: #e2e5e7;
  animation: ${shine} ${animationSec}s ease infinite;
  cursor: pointer;
  @media (max-width: ${device.small}px) {
    width: 100px;
    height: 152px;
  }
`;
