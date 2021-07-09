import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// Actions
import { getProductDetails } from "@/redux/actions/productActions";
import { addToCart } from "@/redux/actions/cartActions";

const ProductPage = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push("/cart");
  };

  return (
    <Wrap>
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div>
            <LeftSide>
              <LeftImage>
                <img src={product.imageUrl} alt={product.name} />
              </LeftImage>
              <LeftInfo>
                <LeftName>{product.name}</LeftName>
                <p>Price : {product.price}원</p>
                <p>출판사 : {product.publisher}</p>
                <p>{product.writer} 저 </p>
                <p>출판일 : {product.publishDate}</p>
                <p>카테고리 : {product.category}</p>
              </LeftInfo>
            </LeftSide>
            <RightSide>
              <RightInfo>
                <p>
                  Price : <span>{product.price}원</span>
                </p>
                <p>
                  status : <span>재고 {product.countInStock} 있음</span>
                </p>
                <p>
                  수량
                  <SelectQuantity value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </SelectQuantity>
                </p>
                <p>
                  <button type="button" onClick={addToCartHandler}>
                    카트에 추가
                  </button>
                </p>
              </RightInfo>
            </RightSide>
          </div>
          <p>{product.description}</p>
          <img style={{ maxWidth: "60%" }} src={product.descriptionImageUrl} />
        </>
      )}
    </Wrap>
  );
};

export default ProductPage;

const Wrap = styled.div`
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex: 0.8;
  @media (max-width: 960px) {
    flex-direction: column;
    flex: 1;
  }
`;

const RightSide = styled.div`
  flex: 0.2;
  @media (max-width: 960px) {
    flex: 1;
    padding: 1rem;
  }
`;

const LeftImage = styled.div`
  margin: 1rem;
  flex: 0.6;
  img {
    width: 100%;
  }
  @media (max-width: 960px) {
    flex: 1;
  }
`;

const LeftInfo = styled.div`
  margin: 1rem;
  flex: 0.4;
  background: #fff;
  height: fit-content;
  font-size: 0.9rem;
  p {
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 960px) {
    flex: 1;
  }
`;

const LeftName = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
`;

const RightInfo = styled.div`
  width: 250px;
  margin: 1rem;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  p {
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    button {
      grid-column: 1/-1;
      padding: 10px 16px;
      background: #171717;
      color: #f4f4f4;
      border: 1px solid #171717;
      cursor: pointer;
    }
  }

  @media (max-width: 960px) {
    width: 100%;
    margin: 0;
  }
`;

const SelectQuantity = styled.select`
  padding: 10px 16px;
`;
