import React, { useState, useEffect, useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { throttle } from "lodash";

// Image
import logo from "@/image/logo.png";

const Navbar = ({ click }) => {
  const [isScrollTop, setIsScrollTop] = useState(true);
  const cartItemCount = 90;

  const wrapStyle = isScrollTop
    ? {
        borderBottom: "transparent solid 1.5px",
        background: "transparent",
      }
    : { borderBottom: "#cacba8 solid 1.5px", background: "#fff" };

  const throttledSaveIsScrollTop = throttle(() => {
    window.pageYOffset === 0 ? setIsScrollTop(true) : setIsScrollTop(false);
  }, 300);


  useEffect(() => {
    window.addEventListener("scroll", throttledSaveIsScrollTop);
    return () => {
      window.removeEventListener("scroll", throttledSaveIsScrollTop);
    };
  }, [scrollY]);

  return (
    <Wrap style={wrapStyle}>
      <HamburgerMenu onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerMenu>
      <StyledLink to="/">
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
      </StyledLink>
      <Menu>
        <button>
          로그인
          <div />
        </button>
        <StyledLink to="/cart">
          <button>
            카트 {cartItemCount === 0 ? "" : <span>{cartItemCount}</span>}
            <div />
          </button>
        </StyledLink>
      </Menu>
    </Wrap>
  );
};

export default Navbar;

const Wrap = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-bottom: lightgray solid 1px;
  padding: 0 1.5rem 1rem 1.5rem;
  z-index: 10;
  @media (max-width: 600px) {
    padding: 0 1rem 0 1rem;
    height: 65px;
  }
`;

const Logo = styled.div`
  cursor: pointer;
  img {
    height: 60px;

    @media (max-width: 600px) {
      height: 40px;
    }

    @media (max-width: 320px) {
      height: 35px;
    }
  }
`;

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 20px;
  cursor: pointer;
  div {
    width: 25px;
    height: 3px;
    border-radius: 3px;
    background: black;
  }
  @media (max-width: 600px) {
    height: 15px;
    div {
      width: 20px;
      height: 2px;
    }
  }
`;

const makeBorder = keyframes`
  from {
      width : 0;
  }
  to {
      width : 100%;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    position: relative;
    padding: 3px;
    font-size: 1rem;
    margin: 0 5px 0 0;
    cursor: pointer;
    &:hover {
      div {
        display: flex;
      }
    }
    span {
      font-weight: bold;
      margin: 0 0 0 4px;
    }
    div {
      position: absolute;
      left: 0;
      bottom: 0;
      display: none;
      margin: 0 5px 0 0;
      border-bottom: black solid 1px;
      animation: ${makeBorder} 0.3s;
      animation-fill-mode: forwards;
    }
  }
  :last-child {
    margin: 0;
  }
  @media (max-width: 600px) {
    button {
      font-size: 0.8rem;
      margin: 0 3px 0 0;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
