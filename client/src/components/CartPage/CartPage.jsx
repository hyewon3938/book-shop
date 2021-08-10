import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Components
import PageWrap from "@/components/style/layout/PageWrap";
import CartItem from "@/components/CartPage/CartItem";
import Checkbox from "@/components/CartPage/Checkbox";

// Utils
import { numberWithCommas } from "@/lib/utils";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Actions
import { removeSelectedItem, selectAllCart, unselectAllCart } from "@/redux/actions/cartActions";
import { postStockCheck, removeStockCheckData, setOrderInfo } from "@/redux/actions/orderActions";

const CartPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const { auth } = useSelector((state) => state.auth);

  const stockCheckData = useSelector((state) => state.stockCheck);
  let { stockCheck, loading, error } = stockCheckData;

  const unselectedList = cartItems.filter((item) => !item.isSelected);

  const [isAllChecked, setIsAllChecked] = useState(unselectedList.length === 0 ? true : false);

  const productInfoArray = cartItems
    .map((item) => {
      if (item.isSelected) {
        return {
          productId: item._id,
          countOfOrder: item.qty,
          title: item.title,
          category: item.category,
          imageUrl: item.imageUrl,
          price: item.price,
        };
      }
    })
    .filter((item) => item);

  useEffect(() => {
    dispatch(selectAllCart());
    return () => {
      dispatch(removeStockCheckData());
    };
  }, []);

  useEffect(() => {
    if (cartItems.length === 0) return setIsAllChecked(false);
    setIsAllChecked(unselectedList.length === 0 ? true : false);
  }, [cartItems]);

  useEffect(() => {
    if (!stockCheck) return;
    if (error) return alert("Server Error");
    if (stockCheck.isAvailable) {
      dispatch(setOrderInfo(productInfoArray));
      if (auth.isAuth) return history.push("/order");
      return history.push("/login");
    }
    if (!stockCheck.isAvailable) {
      const listMessage = stockCheck.outOfStockList.reduce((acc, item) => {
        return acc + `${item.title}(${item.countInStock <= 0 ? "품절" : item.countInStock}),`;
      }, "");
      return alert(`재고가 부족합니다(주문가능 수량)\n${listMessage}`);
    }
  }, [stockCheckData]);

  const selectedItems = cartItems.filter((item) => item.isSelected);

  const totalPrice = selectedItems.reduce((acc, cur) => {
    return acc + Number(cur.price) * cur.qty;
  }, 0);

  const totalCount = selectedItems.reduce((acc, cur) => {
    return acc + cur.qty;
  }, 0);

  const deleteListHandler = () => {
    let result = confirm("선택한 상품을 삭제하시겠습니까?");
    result ? dispatch(removeSelectedItem()) : "";
  };

  const allCheckClickHandler = () => {
    setIsAllChecked(!isAllChecked);
    !isAllChecked ? dispatch(selectAllCart()) : dispatch(unselectAllCart());
  };

  const orderButtonHandler = () => {
    const productArray = cartItems
      .map((item) => {
        if (item.isSelected) {
          return {
            productId: item._id,
            countOfOrder: item.qty,
          };
        }
      })
      .filter((item) => item);
    if (productArray.length === 0) return alert("주문할 상품이 없습니다.");
    dispatch(postStockCheck(productArray));
  };

  return (
    <PageWrap>
      {loading ? <CheckStockLoading /> : ""}
      <Wrap>
        <CartTitle>북샵 카트 ({totalCount})</CartTitle>
        <RemoveCartListWrap>
          <RemoveCartListButton onClick={deleteListHandler}>선택 상품 삭제</RemoveCartListButton>
        </RemoveCartListWrap>
        <CartListWrap>
          <MobileAllCheckboxWrap>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Checkbox onClick={allCheckClickHandler} isChecked={isAllChecked} />
              <span>전체선택</span>
            </div>
            <RemoveCartListButton onClick={deleteListHandler}>선택 상품 삭제</RemoveCartListButton>
          </MobileAllCheckboxWrap>
          <ListHeader>
            <Checkbox onClick={allCheckClickHandler} isChecked={isAllChecked} />
            <ListHeaderItem style={{ flex: "0.5" }}>상품정보</ListHeaderItem>
            <ListHeaderItem style={{ flex: "0.1" }}>가격</ListHeaderItem>
            <ListHeaderItem style={{ flex: "0.2" }}>수량</ListHeaderItem>
            <ListHeaderItem style={{ flex: "0.1" }}>주문</ListHeaderItem>
          </ListHeader>
          {cartItems.length === 0 ? (
            <EmptyCart>카트가 비어있습니다.</EmptyCart>
          ) : (
            cartItems.map((item, index) => {
              return <CartItem data={item} key={index} />;
            })
          )}
          <ListFooter>
            <TotalCount>
              <span>총 상품 수</span> {selectedItems.length}종 {totalCount}개
            </TotalCount>
            <TotalPrice>
              <span>총 결제금액</span>
              {numberWithCommas(totalPrice)}원
            </TotalPrice>
          </ListFooter>
        </CartListWrap>
        <ButtonWrap>
          <BuyCartButton onClick={orderButtonHandler}>선택 상품 주문하기</BuyCartButton>
        </ButtonWrap>
      </Wrap>
    </PageWrap>
  );
};

export default CartPage;

const Wrap = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 0 10rem;
  @media (max-width: ${device.extraLarge}px) {
    padding: 0 5rem;
  }
  @media (max-width: ${device.large}px) {
    padding: 0 2rem;
  }
  @media (max-width: ${device.medium}px) {
    padding: 0 1rem;
  }
  @media (max-width: ${device.small}px) {
    padding: 0 5px;
  }
`;

const CheckStockLoading = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 500;
`;

const CartTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 30px 20px 10px 20px;
  @media (max-width: ${device.medium}px) {
    margin: 10px;
    font-size: 18px;
  }
  @media (max-width: ${device.small}px) {
    margin: 0px 10px 0px 10px;
  }
`;

const CartListWrap = styled.div`
  margin: 10px;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 35px;
  border-top: solid 2px lightgray;
  border-bottom: solid 2px lightgray;
  background: #cacba82f;
  @media (max-width: ${device.medium}px) {
    display: none;
  }
`;

const MobileAllCheckboxWrap = styled.div`
  display: none;
  span {
    margin: 0 0 0 10px;
  }
  @media (max-width: ${device.medium}px) {
    display: flex;
    margin: 25px 0 20px 0;
    align-items: center;
    justify-content: space-between;
  }
`;

const ListHeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

const EmptyCart = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px lightgray;
  color: grey;
  @media (max-width: ${device.medium}px) {
    border-bottom: none;
    border-top: solid 1px lightgray;
    font-size: 12px;
  }
`;

const ListFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  border-bottom: solid 2px lightgray;
  padding: 30px 20px;

  @media (max-width: ${device.medium}px) {
    border-top: solid 2px lightgray;
    padding: 20px 10px;
  }
  @media (max-width: ${device.small}px) {
    padding: 20px 5px;
  }
`;

const TotalCount = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  margin: 0 0 15px 0;
  font-weight: bold;
  font-size: 16px;
  color: #464646;
  span {
    font-weight: normal;
    margin: 0 10px 0 0;
    color: black;
  }
  @media (max-width: ${device.medium}px) {
    width: 100%;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  span {
    margin: 0 10px 0 0;
    font-weight: normal;
  }
  @media (max-width: ${device.medium}px) {
    width: 100%;
  }
  @media (max-width: ${device.small}px) {
    span {
      font-size: 13px;
    }
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 0 0;
  @media (max-width: ${device.medium}px) {
    flex-direction: column;
    margin: 30px 10px;
  }
`;

const BuyCartButton = styled.div`
  padding: 20px 0;
  width: 250px;
  text-align: center;
  cursor: pointer;
  background: #3d3d3d;
  color: white;
  border: 1px solid #3d3d3d;
  font-size: 15px;
  font-weight: bold;
  &:hover {
    background: #cacba8;
    color: white;
    border: 1px solid #cacba8;
  }
  @media (max-width: ${device.medium}px) {
    width: 100%;
    margin: 0 0 10px 0;
  }
  @media (max-width: ${device.small}px) {
    font-size: 15px;
  }
`;

const RemoveCartListWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
  @media (max-width: ${device.medium}px) {
    display: none;
  }
`;

const RemoveCartListButton = styled.button`
  padding: 5px 10px;
  border: 1px solid grey;
  cursor: pointer;
  font-size: 12px;
  @media (max-width: ${device.medium}px) {
    padding: 5px;
  }
`;
