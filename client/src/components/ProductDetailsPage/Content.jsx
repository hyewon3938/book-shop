import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

const lineLimit = 18;
const lineHeight = 24;
const maxHeight = lineHeight * lineLimit;

const Content = ({ title, contents }) => {
  const [isMoreMode, setIsMoreMode] = useState(false);
  const [offsetHeight, setOffsetHeight] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);

  const contentsComponent = useRef();

  useEffect(() => {
    if (!title) return;
    if (title === "소개 이미지" || title === "책정보") return;
    setOffsetHeight(contentsComponent.current.offsetHeight);
  }, []);

  const contentsStyle =
    offsetHeight > maxHeight
      ? isMoreMode
        ? {
            contents: {
              maxHeight: "none",
            },
            contentsBackground: {
              display: "none",
            },
            moreButton: {
              display: "flex",
            },
          }
        : {
            contents: { maxHeight: `${maxHeight}px` },
            contentsBackground: {
              display: "flex",
            },
            moreButton: {
              display: "flex",
            },
          }
      : "";

  const moreModeClickHandler = () => {
    setIsMoreMode(!isMoreMode);
    if (!isMoreMode) {
      setCurrentScroll(window.scrollY);
    } else {
      window.scrollTo(0, currentScroll);
    }
  };

  return (
    <>
      {!contents ? (
        <>
          <ContentWrap>
            <ContentTitle>책정보</ContentTitle>
            <ContentValue>
              <span>　　</span>
              <span>　　</span>
              <span>　　</span>
            </ContentValue>
          </ContentWrap>
          <ContentWrap>
            <ContentTitle>책소개</ContentTitle>
            <ContentValue>
              <div style={{ height: maxHeight }}></div>
            </ContentValue>
          </ContentWrap>
          <ContentWrap>
            <ContentTitle>목차</ContentTitle>
            <ContentValue>
              <div style={{ height: maxHeight }}></div>
            </ContentValue>
          </ContentWrap>
        </>
      ) : (
        <ContentWrap>
          <ContentTitle>{title}</ContentTitle>
          {title === "책정보" ? (
            <ContentValue>
              <span>{contents.pages}쪽</span>
              <span>{contents.weight}g</span>
              <span>
                {contents.width}mmX{contents.height}mmX{contents.depth}mm
              </span>
            </ContentValue>
          ) : title === "소개 이미지" ? (
            <ContentValue>
              <img src={contents} alt={title + " 소개이미지"} />
            </ContentValue>
          ) : (
            <ContentValue ref={contentsComponent} style={contentsStyle.contents}>
              <MoreButton onClick={moreModeClickHandler} style={contentsStyle.moreButton}>
                {isMoreMode ? (
                  <Icon className="fas fa-angle-up"></Icon>
                ) : (
                  <Icon className="fas fa-angle-down"></Icon>
                )}
              </MoreButton>
              <ContentBackground style={contentsStyle.contentsBackground} />
              {contents.split("\n").map((line, index) => {
                return (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                );
              })}
            </ContentValue>
          )}
        </ContentWrap>
      )}
    </>
  );
};

export default Content;

const ContentWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 20px;
  @media (max-width: ${device.large}px) {
    flex-direction: column;
    padding: 0 20px 30px 20px;
    border-bottom: solid 1px #cecece;
  }
  @media (max-width: ${device.small}px) {
    padding: 30px 10px;
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

const ContentValue = styled.div`
  position: relative;
  flex: 0.7;
  border-left: solid 1px grey;
  padding: 30px;
  line-height: ${lineHeight}px;
  overflow: hidden;
  img {
    width: 100%;
  }
  span {
    margin: 0 10px 0 0;
  }

  @media (max-width: ${device.large}px) {
    border-left: none;
    padding: 30px 20px;
  }
  @media (max-width: ${device.small}px) {
    padding: 20px 0;
  }
`;

const ContentBackground = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background: linear-gradient(rgba(255, 255, 255, 0), 80%, rgba(255, 255, 255, 1));
`;

const MoreButton = styled.button`
  display: none;
  position: absolute;
  bottom: -5px;
  right: 0;
  cursor: pointer;
  width: 100%;
  color: #a4a585;
  justify-content: center;
  z-index: 2;
`;

const Icon = styled.i`
  font-size: 25px;
`;
