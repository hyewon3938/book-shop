import React, { useState } from "react";
import styled, { css } from "styled-components";

// Components
import PageWrap from "@/components/style/layout/PageWrap";
import AdCarousel from "@/components/HomePage/AdCarousel";
import NewArrival from "@/components/HomePage/NewArrival";
import TodayProducts from "@/components/HomePage/TodayProducts";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Images
import homepageImage from "@/image/homepageImage.jpg";
import ad1 from "@/image/MainAd/1.png";
import ad2 from "@/image/MainAd/2.png";
import ad3 from "@/image/MainAd/3.png";
import ad4 from "@/image/MainAd/4.jpg";

const HomePage = () => {
  const adList2 = [ad1, ad2, ad3];

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
            <img src={ad4} />
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
  height: 1500px;
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
    height: 250px;
  }
  @media (max-width: ${device.large}px) {
    width: 100%;
  }
`;
