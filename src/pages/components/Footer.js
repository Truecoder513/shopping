import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="quality">
        <div>
          <img src={require("../../assets/img/services1.svg").default} alt="" />
          <h3>Fast & Free Delivery</h3>
          <p>Free delivery on all orders</p>
        </div>
        <div>
          <img src={require("../../assets/img/services2.svg").default} alt="" />
          <h3>Secure Payment</h3>
          <p>Free delivery on all orders</p>
        </div>
        <div>
          <img src={require("../../assets/img/services3.svg").default} alt="" />
          <h3>Money Back Guarantee </h3>
          <p>Free delivery on all orders</p>
        </div>
        <div>
          <img src={require("../../assets/img/services4.svg").default} alt="" />
          <h3>Online Support</h3>
          <p>Free delivery on all orders</p>
        </div>
      </div>
      <div className="bottom">
        <div className="top">
          <div className="left">
            <img src={require("../../assets/img/logo2.webp")} alt="" />
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              ad ullam aspernatur, quae dolor assumenda sint iure natus magni
              quisquam deleniti eum, non
            </p>
            <div>réseaux sociaux</div>
          </div>
          <div className="right">
            <div>
              <h4>Quick links</h4>
              <ul>
                {["Image licensin", "Style Guide", "Privacy Policy"].map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4>Shop Category</h4>
              <ul>
                {["Image licensin", "Style Guide", "Privacy Policy"].map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4>Pertenrs</h4>
              <ul>
                {["Image licensin", "Style Guide", "Privacy Policy"].map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright 2022 All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
