import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch, useHistory } from "react-router-dom";

// Components
import PageWrap from "@/components/style/layout/PageWrap";
import ProductInfo from "@/components/ProductDetailsPage/ProductInfo";
import ProductDetails from "@/components/ProductDetailsPage/ProductDetails";

// Actions
import { getProductDetails } from "@/redux/actions/productActions";

// constants
import { category } from "@/constants/category";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();

  const productDetailsData = useSelector((state) => state.getProductDetails);
  const { productDetails, loading, error } = productDetailsData;

  useEffect(() => {
    if (!category.includes(match.params.category)) return history.replace("/notFound");
    const categoryParam = match.params.category === "전체보기" ? "" : match.params.category;
    const idParam = match.params.id;
    dispatch(getProductDetails(categoryParam, idParam));
  }, [dispatch]);

  useEffect(() => {
    if (error) return history.replace("/notFound");
  }, [productDetailsData]);

  return (
    <PageWrap>
      {loading ? (
        <>
          <ProductInfo />
          <ProductDetails />
        </>
      ) : error ? (
        <h2>{error}</h2>
      ) : productDetails ? (
        <>
          <ProductInfo data={productDetails} />
          <ProductDetails data={productDetails} />
        </>
      ) : (
        <></>
      )}
    </PageWrap>
  );
};

export default ProductDetailsPage;
