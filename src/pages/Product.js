import React from "react";
import { PageLocale } from "../components/global/pageLocale";
import { SectionTitle, LinkButton } from "../components/global/button";
import Card from "./components/Card";

const Product = () => {
  return (
    <div>
      <PageLocale page="Home > Product" />
      <SectionTitle
        title="POPULAR PRODUCTS"
        info="Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
        className="sectionTitle"
      />
      <Card />
      <LinkButton content="DISCOVER MORE" className="butPro" />
    </div>
  );
};

export default Product;
