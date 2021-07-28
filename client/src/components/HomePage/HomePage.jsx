import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { debounce } from "lodash";

// Components
import AdCarousel from "@/components/HomePage/AdCarousel";
import NewArrival from "@/components/HomePage/NewArrival";
import Recommendation from "@/components/HomePage/Recommendation";
import AdImage from "@/components/HomePage/AdImage";

// Style
import { device } from "@/components/style/responsiveBreakPoints";
import { shine, animationSec } from "@/components/style/skeletonLoadingAnimation";

// Images
import homepageImage from "@/image/homepageImage.jpg";
import mobileHomepageImage from "@/image/mobileHomepageImage.jpg";
import homepageLogo from "@/image/homepageLogo.png";

// Actions
import { setIsHomePage, getAd } from "@/redux/actions/homePageActions";

const HomePage = () => {
  const dispatch = useDispatch();

  const [isMobileMode, setIsMobileMode] = useState(window.innerWidth > device.small ? false : true);

  const adData = useSelector((state) => state.getAd);
  let { ad, loading, error } = adData;

  const resizeEventHandler = debounce(() => {
    window.innerWidth > device.small ? setIsMobileMode(false) : setIsMobileMode(true);
  }, 300);

  useEffect(() => {
    dispatch(setIsHomePage(true));
    dispatch(getAd());
    window.addEventListener("resize", resizeEventHandler);
    return () => {
      dispatch(setIsHomePage(false));
      window.removeEventListener("resize", resizeEventHandler);
    };
  }, []);

  return (
    <Wrap>
      {isMobileMode ? (
        <MainImage mobile="true">
          <div>
            <img src={homepageLogo} alt="bookshop logo" />
          </div>
        </MainImage>
      ) : (
        <MainImage>
          <div>
            <img src={homepageLogo} alt="bookshop logo" />
          </div>
        </MainImage>
      )}
      <ContentsWrap>
        <Recommendation />
        {error ? (
          <h2>{error}</h2>
        ) : loading ? (
          <AdWrap loading="true"></AdWrap>
        ) : (
          <AdWrap>
            <CarouselWrap>
              <AdCarousel data={ad.carouselAd} isMobileMode={isMobileMode} />
            </CarouselWrap>
            <AdImage data={ad.imageAd} isMobileMode={isMobileMode} />
          </AdWrap>
        )}
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
  background: #969c48;
  background-image: url(homepageImage.jpg);
  background-size: cover;
  ${(props) => {
    if (props.mobile) {
      return css`
        background-image: url(mobileHomepageImage.jpg);
      `;
    }
  }}
  div {
    max-width: 1300px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 40px 20px;
  }
  img {
    width: 180px;
  }
  @media (max-width: ${device.small}px) {
    div {
      padding: 20px;
    }
    img {
      width: 150px;
    }
  }
`;

const AdWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: ${device.large}px) {
    flex-direction: column;
  }
  ${(props) => {
    if (props.loading) {
      return css`
        background-color: #e2e5e7;
        animation: ${shine} ${animationSec}s ease infinite;
        height: 300px;
        @media (max-width: ${device.large}px) {
          height: 600px;
        }
        @media (max-width: ${device.extraSmall}px) {
          height: 400px;
        }
      `;
    }
  }}
`;

const CarouselWrap = styled.div`
  width: 65%;
  height: 300px;
  background: #f2f2f2;
  @media (max-width: ${device.large}px) {
    width: 100%;
    height: 300px;
  }
  @media (max-width: ${device.small}px) {
    height: 300px;
  }
  @media (max-width: ${device.extraSmall}px) {
    height: 200px;
  }
`;
