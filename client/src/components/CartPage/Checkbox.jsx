import React from "react";
import styled from "styled-components";

// Images
import checkedImage from "@/image/check.svg";
import uncheckedImage from "@/image/uncheck.svg";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

const Checkbox = ({ onClick, isChecked }) => {
  return (
    <>
      <CheckboxInput type="checkbox" id="allCheck" />
      <CheckBoxLabel htmlFor="allCheck" onClick={onClick}>
        <CheckBoxIcon>
          {isChecked ? <img src={checkedImage} /> : <img src={uncheckedImage} />}
        </CheckBoxIcon>
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
    background: white;
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
