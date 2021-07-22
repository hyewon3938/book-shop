import React, { useState } from "react";
import styled from "styled-components";

// Images
import checked from "@/image/check.svg";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

const Checkbox = ({}) => {
  const [isClicked, setIsClicked] = useState(true);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <CheckboxInput type="checkbox" id="allCheck" />
      <CheckBoxLabel htmlFor="allCheck" onClick={clickHandler}>
        <CheckBoxIcon>{isClicked ? <img src={checked} /> : <div></div>}</CheckBoxIcon>
      </CheckBoxLabel>
    </>
  );
};

export default Checkbox;

const CheckboxInput = styled.input`
  display: none;
`;

const CheckBoxIcon = styled.div`
  width: 22px;
  height: 22px;
  img {
    width: 100%;
  }
  div {
    width: 100%;
    height: 100%;
    border: solid 0.5px lightgray;
  }
  cursor: pointer;
  @media (max-width: ${device.small}px) {
    width: 18px;
    height: 18px;
  }
`;
const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  flex: 0.05;
`;