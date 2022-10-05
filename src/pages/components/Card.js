import React, { useState } from "react";
import Products from "../../data/Products";
import { Link } from "react-router-dom";
import { SimpleButton } from "../../components/global/button";
import { ToastContainer } from "react-toastify";
const Card = () => {
  const [hover, setHover] = useState(0);
  const produtChoice = (index) => {
    switch (index) {
      case 0:
        setChoice("sofa");
        setHover(index);
        break;
      case 1:
        setChoice("table");
        setHover(index);
        break;
      case 2:
        setChoice("chair");
        setHover(index);
        break;
      case 3:
        setChoice("bed");
        setHover(index);
        break;
      case 4:
        setChoice("lighting");
        setHover(index);
        break;
      case 5:
        setChoice("decore");
        setHover(index);
        break;
      default:
        setChoice("sofa");
        setHover(0);

        break;
    }
  };
  const [choice, setChoice] = useState("sofa");
  const filtered = Products.filter((product) => product.type === choice);
  function speedAdd(e, index) {
    e.preventDefault();
  }
  return (
    <div>
      <ToastContainer />
      <ul className="filterHeader">
        {["Sofa", "Table", "Chair", "Bed", "Lightning", "Decore"].map(
          (item, index) => (
            <li
              key={index}
              onClick={() => produtChoice(index)}
              className={hover === index ? "choosen" : ""}
            >
              {item}
            </li>
          )
        )}
      </ul>
      <div className="product-container">
        {filtered.map((product, index) => (
          <Link key={index} to={"/Details/" + product.id}>
            <img src={product.img} alt="" />
            <p className="desc">{product.desc}</p>
            <p className="price">${product.price}</p>
            <SimpleButton
              className="add-to-cart"
              content="Add-to cart"
              onClick={(e) => speedAdd(e, index)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
