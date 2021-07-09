import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideDrawer = ({ show, click }) => {
  const showSideDrawer = show ? "translateX(0)" : "translateX(-100%)";

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <Wrap style={{ transform: showSideDrawer }}>
      <SideDrawerLink onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <CartBadge>{getCartCount()}</CartBadge>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </SideDrawerLink>
    </Wrap>
  );
};

export default SideDrawer;

const Wrap = styled.div`
  width: 70%;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  transform: translateX(-100%);
  transition: all 0.3s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 960px) {
    display: none;
  }
`;

const CartBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #171717;
  color: #f4f4f4;
  font-size: 1rem;
  margin: 0 0 0 8px;
`;

const SideDrawerLink = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  li {
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex: 1;
      padding: 1rem;
      text-decoration: none;
      color: #171717;
      font-size: 1.6rem;
      span {
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        margin: 0 0 0 8px;
      }
      &:hover {
        background: #171717;
        color: #f4f4f4;
        ${CartBadge} {
          color: #171717;
          background: #f4f4f4;
        }
      }
    }
  }
`;
