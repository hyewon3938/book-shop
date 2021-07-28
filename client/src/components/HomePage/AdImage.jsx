import React from "react";
import styled from "styled-components";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

const AdImage = ({ data, isMobileMode }) => {
  if (!data) return <></>;

  const adClickHandler = (url) => {
    history.push(url);
  };

  return (
    <Ad>
      <div onClick={() => adClickHandler(data.url)}>
        <button>보러가기</button>
      </div>
      {isMobileMode ? <img src={data.imageUrl.mobile} /> : <img src={data.imageUrl.pc} />}
    </Ad>
  );
};

export default AdImage;

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
