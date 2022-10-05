import React from "react";
import { LinkButton } from "../../components/global/button";

const Instagram = () => {
  return (
    <div className="instagram">
      <div className="left">
        <img src={require("../../assets/img/insta.webp")} alt="" />
        <h2>GET INSPIRED WITH INSTAGRAM</h2>
        <p>
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
          quis viverra ornare, eros dolor interdum nulla.
        </p>
        <LinkButton className="butPro ins" content="DISCOVER MORE" />
      </div>
      <div className="right">
        <img src={require("../../assets/img/instra1.webp")} alt="" />
        <div>
          <span>logo insta</span>
        </div>
      </div>
      <div className="right">
        <img src={require("../../assets/img/instra2.webp")} alt="" />
        <div>
          <span>logo insta</span>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
