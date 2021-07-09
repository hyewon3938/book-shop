import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "@/components/style/theme";

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
`;

const GlobalStyleProvider = () => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default GlobalStyleProvider;
