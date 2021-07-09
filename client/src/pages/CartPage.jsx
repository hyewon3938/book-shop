import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Components
import CartItem from "@/components/CartItem";

// Actions
import { addToCart, removeFromCart } from "@/redux/actions/cartActions";

const CartPage = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <Wrap>
      <LeftSide>
        <Title>카트</Title>
        {cartItems.length === 0 ? (
          <div>
            카트가 비어있습니다. <Link to="/">돌아가기</Link>
          </div>
        ) : (
          cartItems.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeFromCartHandler={removeFromCartHandler}
            />
          ))
        )}
      </LeftSide>
      <RightSide>
        <Info>
          <p>총 갯수 ({getCartCount()}) itmes</p>
          <p> {getCartSubTotal()}원</p>
        </Info>
        <button>결제하기</button>
      </RightSide>
    </Wrap>
  );
};

export default CartPage;

const Wrap = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 2rem auto;
  @media (max-width: 1320px) {
    max-width: 900px;
  }
  @media (max-width: 960px) {
    max-width: 800px;
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
`;

const LeftSide = styled.div`
  flex: 0.7;
  margin: 0 1rem 0 0;
  background-color: transparent;
  padding: 1rem;
  @media (max-width: 960px) {
    margin: 0;
  }
`;

const RightSide = styled.div`
  flex: 0.3;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  height: fit-content;
  div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 1rem;
  }
  button {
    padding: 10px 17px;
    width: 100%;
    background: #171717;
    color: #f4f4f4;
    border: 1px solid #171717;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
  @media (max-width: 960px) {
    margin: 1rem;
  }
`;

const Info = styled.div`
  p {
    padding: 8px;
  }
`;
