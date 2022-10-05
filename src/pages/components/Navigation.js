import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "../../components/global/menu";

const Navigation = (props) => {
  let [scroll, setScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 40) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  const { intoCart } = props;
  const [reveal, setReveal] = useState(false);
  const revealFunc = () => {
    setReveal(!reveal);
  };

  return (
    <header>
      <div className={`navigation ${scroll ? "nav-fixed" : ""}`}>
        <div className={`menu ${reveal ? "reveal" : ""}`}>
          <div className="head">
            <div>My account</div>
            <Link to="/Cart" className="card">
              <img src={require("../../assets/img/card.svg").default} alt="" />
              <span>{intoCart.length}</span>
            </Link>
            <div className="bars" onClick={revealFunc}>
              <span>Menu</span>
              <span>
                {" "}
                <img
                  src={require("../../assets/img/menu.svg").default}
                  alt=""
                />
              </span>
            </div>
          </div>
          <div style={reveal ? { display: "block" } : { display: "none" }}>
            <Menu />
          </div>
        </div>
        <div className="nav-container">
          <div className="logo">
            <img src={require("../../assets/img/logo.jpg")} alt="" />
          </div>
          <div className="routes">
            <Menu />
          </div>
          <div className="right">
            <div className="search">
              <input type="text" placeholder="Search Product" />
              <img
                src={require("../../assets/img/search.svg").default}
                alt=""
              />
            </div>
            <div className="account">My account</div>
            <Link to="/Cart" className="card">
              <img src={require("../../assets/img/card.svg").default} alt="" />
              <span>{intoCart.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
