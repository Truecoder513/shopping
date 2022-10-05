import React from "react";
import { SimpleButton } from "../../components/global/button";

const Buy = (props) => {
  const { intoCart } = props;
  let total = 0;
  let productCost = 0;
  for (let i = 0; i < intoCart.length; i++) {
    productCost = intoCart[i].quantity * intoCart[i].price;
    total = productCost + total;
    productCost = 0;
  }
  return (
    <div className="buy">
      <div className="result">
        <p>Total Cost</p>
        <p>${total}</p>
      </div>
      <SimpleButton content="Make payement" className="butArt" />
    </div>
  );
};

export default Buy;
