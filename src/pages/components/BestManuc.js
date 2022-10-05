import React from "react";
import { LinkButton } from "../../components/global/button";

const BestManuc = () => {
  return (
    <div className="bestManuc">
      <div className="sofaLight">
        <img src={require("../../assets/img/sofalight.jpg")} alt="" />
      </div>
      <div className="info">
        <h2>BEST FURNITURE MANUFACTURER</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nemo
          nihil perspiciatis aut sint doloribus quam obcaecati eveniet possimus
          harum. Animi cum eveniet fugit nulla odit assumenda alias dignissimos
          sit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          blanditiis consequuntur facere in cumque laborum, consequatur facilis,
          hic iure, inventore dolor officia sequi sint voluptatum iusto possimus
          mollitia id sapiente!
        </p>
        <LinkButton
          content="DISCOVER MORE"
          className="butArt manuc"
          Link="/about"
        />
      </div>
    </div>
  );
};

export default BestManuc;
