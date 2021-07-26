import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

// Style
import { device } from "@/components/style/responsiveBreakPoints";

// Components
import BookCarousel from "@/components/HomePage/BookCarousel";

// Actions
import { getRecommendation } from "@/redux/actions/homePageActions";

const Recommendation = () => {
  const dispatch = useDispatch();

  const recommendationData = useSelector((state) => state.getRecommendation);
  const { recommendation, loading, error } = recommendationData;

  useEffect(() => {
    dispatch(getRecommendation("가정·요리·뷰티"));
  }, [dispatch]);

  return (
    <Wrap>
      <Title>북샵 추천 책</Title>
      {error ? (
        <h2>{error}</h2>
      ) : loading ? (
        <ProductList>
          <BookCarousel />
        </ProductList>
      ) : (
        <ProductList>
          {recommendation.length === 0 ? "" : <BookCarousel data={recommendation} />}
        </ProductList>
      )}
    </Wrap>
  );
};

export default Recommendation;

const Wrap = styled.div`
  width: 100%;
  padding: 30px 0;
  @media (max-width: ${device.medium}px) {
    padding: 30px 0 10px 0;
  }
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  font-family: "NotoSerifKR";
  margin: 0 0 30px 20px;
  @media (max-width: ${device.small}px) {
    font-size: 15px;
    margin: 0 0 20px 20px;
  }
`;

const ProductList = styled.div`
  display: flex;
  height: 350px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  @media (max-width: ${device.medium}px) {
    height: 500px;
  }
  @media (max-width: ${device.small}px) {
    height: 550px;
  }
`;
