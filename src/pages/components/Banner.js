import React from "react";
import { LinkButton } from "../../components/global/button";

const Banner = () => {
  return (
    <div className="banner-back">
      <div className="banner">
        <div className="article">
          <p className="bonus">70% SALE OFF</p>
          <h2>FURNITURE AT COST</h2>
          <p className="brief">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ad
            ullam aspernatur, quae dolor assumenda sint iure natus magni
            quisquam deleniti eum, non
          </p>
          <LinkButton
            content="DISCOVER MORE"
            className="butArt"
            Link="/about"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
