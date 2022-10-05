import React from "react";
import { useState } from "react";

const Totop = () => {
  let [scroll, setScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 140) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div
        className={`to-top ${scroll ? "" : "not-ready-to-back"}`}
        onClick={top}
      >
        <img src={require("../../assets/img/up.svg").default} alt="" />
      </div>
    </div>
  );
};

export default Totop;
