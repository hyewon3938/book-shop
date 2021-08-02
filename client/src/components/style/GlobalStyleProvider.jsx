import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "@/components/style/theme";
import smoothScroll from "smoothscroll-polyfill";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html * {
    box-sizing: border-box;
    font-size: ${theme.fontSize.base};
    font-family: "Roboto", "Apple SD Gothic Neo", "Helvetica", "Arial", sans-serif;
  }
  button {
    background: none;
    border: 0;
    outline : 0;
  }
  
  input {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
            outline : 0;
}

/* IE10 이상에서 input box 에 추가된 지우기 버튼 제거 */
input::-ms-clear { display: none; }

/* input type number 에서 화살표 제거 */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
}

  @font-face {
    font-family: 'NotoSerifKR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NotoSerifKR.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

`;

const GlobalStyleProvider = ({ children }) => {
  smoothScroll.polyfill();
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default GlobalStyleProvider;
