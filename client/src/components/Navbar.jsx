import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <Nav>
      <Logo>BOOK SHOP</Logo>

      <NavbarLinks>
        <CartLink>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <CartBadge>{getCartCount()}</CartBadge>
            </span>
          </Link>
        </CartLink>
        <li>
          <Link to="/">shop</Link>
        </li>
      </NavbarLinks>

      <HamburgerMenu onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerMenu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  background-color: #171717;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  z-index: 50;
`;

const Logo = styled.div`
  color: #f4f4f4;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const NavbarLinks = styled.ul`
  display: flex;
  align-items: center;
  li {
    padding: 0.5rem;
    a {
      text-decoration: none;
      color: #f4f4f4;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      span {
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        margin: 0 0 0 8px;
      }
    }
  }

  @media (max-width: 960px) {
    display: none;
  }
`;

const CartLink = styled.li`
  background: #333;
  padding: 5px;
  border-radius: 8px;
  &:hover {
    background: #dd219e;
    color: #f4f4f4;
  }
`;

const CartBadge = styled.span`
  width: 30px;
  height: 30px;
  background: #f4f4f4;
  border-radius: 50%;
  margin: 0 0 0 8px;
  color: #171717;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
`;

const HamburgerMenu = styled.div`
  width: 30px;
  height: 30px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  div {
    width: 100%;
    height: 3px;
    background: #f4f4f4;
    border-radius: 50px;
  }
  &:hover {
    div {
      background: #dd219e;
    }
  }
  @media (max-width: 960px) {
    display: flex;
  }
`;
