import React from "react";
import { Link } from "react-router-dom";
import Buy from "./components/Buy";

const Cart = (props) => {
  function reduce(index) {
    const copy = [...intoCart];

    if (copy[index].quantity === 1) {
      return;
    } else {
      copy[index].quantity--;
      setIntoCart(copy);
      localStorage.setItem("Cart", JSON.stringify(copy));
    }
  }
  function more(index) {
    const copy = [...intoCart];
    copy[index].quantity++;
    setIntoCart(copy);
    localStorage.setItem("Cart", JSON.stringify(copy));
  }
  function dropFromCart(index) {
    const copy = [...intoCart];
    copy.splice(index, 1);
    setIntoCart(copy);
    localStorage.setItem("Cart", JSON.stringify(copy));
  }
  const { setIntoCart, intoCart } = props;
  return (
    <div className="cart">
      {intoCart.length > 0 ? (
        <div className="cart-item">
          <p className="title">Liste des produits</p>
          <div className="container">
            {intoCart.map((productInCart, index) => (
              <div>
                <div key={index} className="container-item">
                  <img src={productInCart.img} alt="" />
                  <div>
                    <p>
                      Quantity wanted : <span>{productInCart.quantity}</span>
                    </p>
                    <p>
                      Price : <span>${productInCart.price}</span>
                    </p>
                    <p>
                      Total :
                      <span>
                        ${productInCart.price * productInCart.quantity}
                      </span>
                    </p>
                  </div>
                  <div className="action">
                    <div>
                      <p>Reduce quantity</p>
                      <div className="reduce-quantity">
                        <p onClick={() => reduce(index)}>-</p>
                        <span>{productInCart.quantity}</span>
                        <p onClick={() => more(index)}>+</p>
                      </div>
                    </div>
                    <div className="drop" onClick={() => dropFromCart(index)}>
                      Delete
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Buy intoCart={intoCart} />
        </div>
      ) : (
        <div className="empty">
          You have not added anything to the cart yet.
          <br /> Please go to the product page to make a choice.
          <Link to="/Product" className="butArt">
            Page Product
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
