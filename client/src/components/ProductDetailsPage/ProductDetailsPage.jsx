import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import PageWrap from "@/components/style/layout/PageWrap";
import ProductInfo from "@/components/ProductDetailsPage/ProductInfo";
import ProductDetails from "@/components/ProductDetailsPage/ProductDetails";
import LoadingIndicator from "@/components/LoadingIndicator";

// Actions
import { getProductDetails } from "@/redux/actions/productActions";

const ProductDetailsPage = ({ match }) => {
  const dispatch = useDispatch();

  const productDetailsData = useSelector((state) => state.getProductDetails);
  const { productDetails, loading, error } = productDetailsData;

  useEffect(() => {
    const categoryParam = match.params.category === "전체보기" ? "" : match.params.category;
    const idParam = match.params.id;
    dispatch(getProductDetails(categoryParam, idParam));
  }, [dispatch]);

  return (
    <PageWrap>
      {loading ? (
        <LoadingIndicator />
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
