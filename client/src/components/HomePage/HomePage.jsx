import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { debounce } from "lodash";
import { useHistory } from "react-router-dom";

// Components
import AdCarousel from "@/components/HomePage/AdCarousel";
import NewArrival from "@/components/HomePage/NewArrival";
import Recommendation from "@/components/HomePage/Recommendation";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Images
import homepageImage from "@/image/homepageImage.jpg";
import mobileHomepageImage from "@/image/mobileHomepageImage.jpg";
import homepageLogo from "@/image/homepageLogo.png";

// Actions
import { setIsHomePage } from "@/redux/actions/homePageActions";

const adList = {
  pc: ["https://ifh.cc/g/TiXOK2.png", "https://ifh.cc/g/9M1uei.png", "https://ifh.cc/g/gCJCD4.png"],
  mobile: [
    "https://ifh.cc/g/Bmu0i7.png",
    "https://ifh.cc/g/PcswRz.png",
    "https://ifh.cc/g/m13ahX.png",
  ],
};

const ad = {
  pc: "https://ifh.cc/g/G5KtAY.png",
  mobile: "https://ifh.cc/g/WxvVEM.png",
  id: "60fbc0b0aeb8ad47dc987aeb",
  category: "잡지",
};

const HomePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const homePageData = useSelector((state) => state.homePage);
  const { isHomePage } = homePageData;

  useEffect(() => {
    dispatch(setIsHomePage(true));
    return () => {
      dispatch(setIsHomePage(false));
    };
  }, []);

  const [isMobileMode, setIsMobileMode] = useState(window.innerWidth > device.small ? false : true);
  const adCarouselData = isMobileMode ? adList.mobile : adList.pc;
  const adData = isMobileMode ? ad.mobile : ad.pc;

  const resizeEventHandler = debounce(() => {
    window.innerWidth > device.small ? setIsMobileMode(false) : setIsMobileMode(true);
  }, 300);

  useEffect(() => {
    window.addEventListener("resize", resizeEventHandler);
    return () => {
      window.removeEventListener("resize", resizeEventHandler);
    };
  }, []);

  const adClickHandler = () => {
    history.push(`/product/${ad.category}/${ad.id}`);
  };

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
        <AdWrap>
          <CarouselWrap>
            <AdCarousel data={adCarouselData} />
          </CarouselWrap>
          <Ad>
            <div onClick={adClickHandler}>
              <button>보러가기</button>
            </div>
            <img src={adData} />
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
    padding: 20px;
  }
  img {
    width: 180px;
  }
  @media (max-width: ${device.small}px) {
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

const Ad = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 300px;
  padding: 10px;
  background: #44381e;
  cursor: pointer;
  img {
    height: 100%;
  }
  div {
    position: absolute;
    display: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  button {
    justify-content: center;
    align-items: center;
    border: solid 3px white;
    color: white;
    padding: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
  }
  &:hover {
    div {
      display: flex;
    }
  }
  @media (max-width: ${device.large}px) {
    width: 100%;
  }
  @media (max-width: ${device.small}px) {
    width: 100%;
    height: 200px;
    button {
      padding: 15px;
      font-size: 15px;
    }
  }
  @media (max-width: ${device.extraSmall}px) {
    img {
      height: auto;
      width: 100%;
    }
  }
`;
