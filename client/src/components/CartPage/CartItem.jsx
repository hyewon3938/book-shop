import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// Components
import Checkbox from "@/components/CartPage/Checkbox";

// Utils
import { numberWithCommas } from "@/lib/utils";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Actions
import { addToCart, removeFromCart, selectItem } from "@/redux/actions/cartActions";

const CartItem = ({ data }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [itemCount, setItemCount] = useState(data.qty);

  const countInput = React.createRef();
  const mobileCountInput = React.createRef();

  const increaseButtonClickHandler = () => {
    if (data.qty === 999) return;
    setItemCount(Number(itemCount) + 1);
    changeCartItemCount(data.qty + 1);
  };

  const decreaseButtonClickHandler = () => {
    if (data.qty === 1) return;
    setItemCount(Number(itemCount) - 1);
    changeCartItemCount(data.qty - 1);
  };

  const onChangeCountHandler = (ref) => {
    const value = ref.current.value;
    if (value < 0 || value > 999) return setItemCount(1);
    setItemCount(value);
  };

  const checkCountValue = (ref) => {
    const value = Number(ref.current.value);
    if (value === 0) {
      setItemCount(1);
      changeCartItemCount(1);
      return;
    }
    ref.current.value = ref.current.value;
    setItemCount(value);
    changeCartItemCount(value);
  };

  const deleteItemHandler = () => {
    let result = confirm("선택한 상품을 삭제하시겠습니까?");
    result ? dispatch(removeFromCart(data._id)) : "";
  };

  const changeCartItemCount = (qty) => {
    const payload = {
      _id: data._id,
      title: data.title,
      category: data.category,
      imageUrl: data.imageUrl,
      price: data.price,
      qty,
      isSelected: true,
    };

    dispatch(addToCart(payload));
  };

  const itemClickHandler = () => {
    history.push(`/product/${data.category}/${data._id}`);
  };

  const checkboxClickHandler = () => {
    dispatch(selectItem(data._id));
  };

  return (
    <Wrap>
      <Checkbox onClick={checkboxClickHandler} isChecked={data.isSelected} />
      <Item style={{ flex: "0.5" }}>
        <ProductInfoWrap>
          <img onClick={itemClickHandler} src={data.imageUrl} alt={data.title} />
          <TitleWrap onClick={itemClickHandler}>
            <p>
              [{data.category}] {data.title}
            </p>
          </TitleWrap>
        </ProductInfoWrap>
      </Item>
      <Item style={{ flex: "0.1" }}>
        <PriceWrap>{numberWithCommas(data.price)}원</PriceWrap>
      </Item>
      <Item style={{ flex: "0.2" }}>
        <Count>
          <button onClick={decreaseButtonClickHandler}>-</button>
          <InputNumber
            ref={countInput}
            value={itemCount}
            type="number"
            onChange={() => onChangeCountHandler(countInput)}
            onBlur={() => checkCountValue(countInput)}
          />
          <button onClick={increaseButtonClickHandler}>+</button>
        </Count>
      </Item>
      <Item style={{ flex: "0.1" }}>
        <OrderWrap>
          <Button order="true">주문</Button>
          <Button onClick={deleteItemHandler}>삭제</Button>
        </OrderWrap>
      </Item>
      <MobileItem>
        <ProductInfoWrap>
          <img onClick={itemClickHandler} src={data.imageUrl} alt={data.title} />
          <TitleWrap>
            <p onClick={itemClickHandler}>
              [{data.category}] {data.title}
            </p>
            <PriceWrap>{numberWithCommas(data.price)}원</PriceWrap>
            <Count>
              <button onClick={decreaseButtonClickHandler}>-</button>
              <InputNumber
                ref={mobileCountInput}
                value={itemCount}
                type="number"
                onChange={() => onChangeCountHandler(mobileCountInput)}
                onBlur={() => checkCountValue(mobileCountInput)}
              />
              <button onClick={increaseButtonClickHandler}>+</button>
            </Count>
          </TitleWrap>
        </ProductInfoWrap>
        <MobileDeleteButton onClick={deleteItemHandler}>
          <Xbar1></Xbar1>
          <Xbar2></Xbar2>
        </MobileDeleteButton>
      </MobileItem>
    </Wrap>
  );
};

export default CartItem;

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-bottom: solid 1px lightgray;
  padding: 18px 0;
  @media (max-width: ${device.medium}px) {
    border-top: solid 1px lightgray;
    border-bottom: none;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${device.medium}px) {
    display: none;
  }
`;

const MobileItem = styled.div`
  display: none;

  @media (max-width: ${device.medium}px) {
    display: flex;
    width: 100%;
  }
`;

const ProductInfoWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  img {
    width: 100px;
    cursor: pointer;
    border: 1px solid lightgrey;
  }
  @media (max-width: ${device.medium}px) {
    margin: 0 0 0 10px;
    img {
      flex: 0.3;
    }
  }
  @media (max-width: ${device.small}px) {
    img {
      width: 100px;
    }
  }
  @media (max-width: ${device.extraSmall}px) {
    img {
      width: 60px;
    }
  }
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 20px;
  font-size: 13px;
  line-height: 20px;
  p {
    cursor: pointer;
    @media (hover: hover) {
      :hover {
        text-decoration: underline;
      }
    }
  }
  @media (max-width: ${device.medium}px) {
    flex: 0.8;
    p {
      font-size: 15px;
    }
  }
`;

const PriceWrap = styled.div`
  display: flex;
  width: 100%;
  font-weight: bold;
  font-size: 13px;
  justify-content: center;
  align-items: center;
  @media (max-width: ${device.medium}px) {
    justify-content: flex-start;
    margin: 5px 0 0 0;
    font-size: 15px;
  }
  @media (max-width: ${device.small}px) {
    font-size: 13px;
  }
`;

const Count = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    cursor: pointer;
    font-size: 18px;
    background: white;
    border: 1px solid #c2c2c2;
    text-align: center;
  }
  @media (max-width: ${device.medium}px) {
    justify-content: flex-start;
    margin: 5px 0 0 0;
    button {
      font-size: 15px;
    }
  }
`;

const InputNumber = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  width: 40px;
  height: 25px;
  border: 1px solid #c2c2c2;
  border-left: none;
  border-right: none;
  text-align: center;
  -moz-appearance: textfield;
  border-style: 1px solid #c2c2c2;
  border-radius: 0;
  font-size: 12px;
  &:focus {
    box-shadow: inset none;
    outline: none;
    border-style: 1px solid #c2c2c2;
    border-radius: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media (max-width: ${device.extraSmall}px) {
    width: 30px;
  }
`;

const OrderWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  font-size: 12px;
  border: solid 1px lightgrey;
  padding: 5px 15px;
  margin: 0 0 5px 0;
  cursor: pointer;

  @media (hover: hover) {
    :hover {
      background: #cacba8;
      color: white;
      border: solid 1px #cacba8;
    }
  }
  ${(props) => {
    if (props.order) {
      return css`
        background: #575757;
        color: white;
        border: solid 1px #575757;
      `;
    }
  }}
`;

const MobileDeleteButton = styled.div`
  margin: 10px 0 0px 10px;
  width: 22px;
  height: 22px;
  position: relative;
  cursor: pointer;
  @media (hover: hover) {
    div:hover {
      background: black;
    }
  }
  @media (max-width: ${device.small}px) {
    margin: 10px 0 0 0px;
    div {
      width: 18px;
    }
  }
`;

const Xbar1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 22px;
  height: 1px;
  background: grey;
  transform: rotate(45deg);
`;

const Xbar2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 22px;
  height: 1px;
  background: grey;
  transform: rotate(-45deg);
`;
