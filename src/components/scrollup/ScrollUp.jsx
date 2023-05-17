import React from "react";
import "./scrollup.css";
//import { HiOutlineArrowSmUp } from "react-icons/hi";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <a href="about" className="scrollup">
      <h2 className="scrollup__icon">⬆</h2>
      {/*<HiOutlineArrowSmUp className="scrollup__icon" />*/}
    </a>
  );
};

export default ScrollUp;
