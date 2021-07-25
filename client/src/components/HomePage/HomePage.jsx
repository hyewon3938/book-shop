import React from "react";
import styled from "styled-components";

// Components
import AdCarousel from "@/components/HomePage/AdCarousel";
import NewArrival from "@/components/HomePage/NewArrival";
import TodayProducts from "@/components/HomePage/TodayProducts";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Images
import homepageImage from "@/image/homepageImage.jpg";

const HomePage = () => {
  const adList2 = [
    "https://ifh.cc/g/TiXOK2.png",
    "https://ifh.cc/g/9M1uei.png",
    "https://ifh.cc/g/gCJCD4.png",
  ];

  return (
    <Wrap>
      <MainImage></MainImage>
      <ContentsWrap>
        <TodayProducts />
        <AdWrap>
          <CarouselWrap>
            <AdCarousel data={adList2} />
          </CarouselWrap>
          <Ad>
            <img src="https://ifh.cc/g/d3lJ7S.png" />
          </Ad>
        </AdWrap>
        <NewArrival />
      </ContentsWrap>
    </Wrap>
  );
};

export default HomePage;

const Wrap = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const ContentsWrap = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 30px;
  @media (max-width: ${device.large}px) {
    padding: 0;
  }
`;

const MainImage = styled.div`
  width: 100%;
  height: 300px;
  background: #a49673;
  background-image: url(homepageImage.jpg);
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 50px;
`;

const AdWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: ${device.large}px) {
    flex-direction: column;
  }
`;

const CarouselWrap = styled.div`
  width: 65%;
  height: 300px;
  background: #f2f2f2;
  @media (max-width: ${device.large}px) {
    width: 100%;
    height: 280px;
  }
  @media (max-width: ${device.medium}px) {
    height: 250px;
  }
  @media (max-width: ${device.small}px) {
    height: 170px;
  }
`;

const Ad = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 300px;
  padding: 10px;
  background: #44381e;
  img {
    height: 300px;
  }
  @media (max-width: ${device.large}px) {
    width: 100%;
  }
`;
