import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CartItem = ({ item, qtyChangeHandler, removeFromCartHandler }) => {
  return (
    <Wrap>
      <ItemImage>
        <img src={item.imageUrl} alt={item.name} />
      </ItemImage>

      <Link to={`/product/${item._id}`}>
        <ItemName>{item.name}</ItemName>
      </Link>

      <ItemPrice> {item.price}원</ItemPrice>
      <ItemSelect value={item.qty} onChange={(e) => qtyChangeHandler(item._id, e.target.value)}>
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </ItemSelect>

      <DeleteButton onClick={() => removeFromCartHandler(item._id)}>
        <i className="fas fa-trash"></i>
      </DeleteButton>
    </Wrap>
  );
};

export default CartItem;

const Wrap = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  margin: 0 0 8px 0;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
  gap: 8px;
  background: #fff;
  border-radius: 2px;
  place-items: center;
`;

const ItemImage = styled.div`
  img {
    width: 100%;
  }
`;

const ItemName = styled.p`
  text-decoration: none;
  color: #171717;
  &:hover {
    color: #dd219e;
  }
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
  @media (max-width: 500px) {
    font-size: 0.6rem;
  }
`;

const ItemPrice = styled.p`
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
  @media (max-width: 500px) {
    font-size: 0.6rem;
  }
`;

const ItemSelect = styled.select`
  padding: 10px 17px;
  @media (max-width: 700px) {
    padding: 8px 13px;
  }
  @media (max-width: 500px) {
    padding: 5px 8px;
  }
`;

const DeleteButton = styled.button`
  padding: 10px 17px;
  color: red;
  background: #f4f4f4;
  border: 1px solid #171717;
  cursor: pointer;
  transition: all 0.5 ease-out;
  &:hover,
  :focus,
  :active {
    background: #171717;
    transform: scale(1.2);
  }
  @media (max-width: 700px) {
    padding: 8px 13px;
  }
  @media (max-width: 500px) {
    padding: 5px 8px;
  }
`;
