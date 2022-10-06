import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { SimpleButton } from "../../components/global/button";

const ProductDetails = (props) => {
  const { product, setIntoCart, intoCart } = props;
  const navigate = useNavigate();

  let into = getProductQuantity(product.id);

  function getProductQuantity(id) {
    let quantity = 0;
    const copy = [...intoCart];
    const filtered = copy.filter((item) => item.id === id);
    if (filtered.length > 0) {
      quantity = filtered[0].quantity;
    } else {
      quantity = 0;
    }
    return quantity;
  }
  const [add, setAdd] = useState(getProductQuantity(product.id));

  function reduce() {
    if (add === 0) {
      return;
    } else {
      setAdd(add - 1);
    }
  }
  function plus() {
    setAdd(add + 1);
  }
  function addToCart() {
    if (add === 0) {
      return;
    } else {
      setIntoCart((prev) => {
        const copy = [...prev];
        const filtered = copy.findIndex((el) => el.id === product.id);

        if (filtered >= 0) {
          copy[filtered].quantity = add;
          toast.success("Updated order quantity for this item");
          localStorage.setItem("Cart", JSON.stringify(copy));
        } else {
          const newProductToAdd = product;
          newProductToAdd.quantity = add;
          copy.push(newProductToAdd);
          toast.success("Item add to cart");
          localStorage.setItem("Cart", JSON.stringify(copy));
        }

        navigate("/Cart");
        return copy;
      });
    }
  }

  return (
    <div className="productDetails">
      <div className="productImg">
        <img src={product.img} alt="" />
      </div>
      <div className="left">
        <div className="info">
          <p className="nom">{product.nom}</p>
          <p className="price">${product.price}</p>
          <p className="category">
            Category : <span>{product.type}</span>
          </p>
        </div>
        <div className="desc">{product.desc}</div>
        <div className="selectNumber">
          <p onClick={reduce}>-</p>
          <span>{add}</span>
          <p onClick={plus}>+</p>
        </div>
        <SimpleButton
          content={into > 0 ? "UPDATE QUANTITY" : "ADD TO CART"}
          className="butArt"
          onClick={addToCart}
          disabled={true}
          disableCond={add === 0}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
