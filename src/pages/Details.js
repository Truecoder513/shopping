import React from "react";
import { PageLocale } from "../components/global/pageLocale";
import { useParams } from "react-router";
import Products from "../data/Products";
import ProductDetails from "./components/ProductDetails";

const Details = (props) => {
  const { setIntoCart, intoCart } = props;
  const productId = useParams().productId;

  function getProduct() {
    const copy = [...Products];

    const filtered = copy.filter((item) => item.id == productId);
    return filtered[0];
  }
  return (
    <div>
      <PageLocale page="Home > Product Details" />
      <ProductDetails
        product={getProduct()}
        setIntoCart={setIntoCart}
        intoCart={intoCart}
      />
    </div>
  );
};

export default Details;
