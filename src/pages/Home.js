import React from "react";
import { SectionTitle } from "../components/global/button";
import { ProductSelection } from "../components/global/productSelection";
import Banner from "./components/Banner";
import BestManuc from "./components/BestManuc";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Instagram from "./components/Instagram";
import Navigation from "./components/Navigation";

const Home = () => (
  <div>
    <Banner />
    <SectionTitle
      title="POPULAR PRODUCTS"
      info="Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
      className="sectionTitle"
    />
    <Card />
    <BestManuc />
    <ProductSelection
      selection="chair"
      buttonContent="DISCOVER MORE"
      buttonClassName="butPro"
      title="PRODUCT YOU MAY LIKE"
      info="Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
      sectionClassName="sectionTitle"
    />
    <Instagram />
    <ProductSelection
      selection="topPick"
      buttonContent="DISCOVER MORE"
      buttonClassName="butPro"
      title="TOP PICK"
      info="Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
      sectionClassName="sectionTitle"
    />
  </div>
);

export default Home;
