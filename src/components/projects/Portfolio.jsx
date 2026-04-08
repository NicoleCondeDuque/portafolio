// import React from "react";
// import Projects from "./Projects";
// import "./projects.css";

// const Portfolio = () => {
//   return (
//     <section className="portfolio section" id="portfolio">
//       <h2 className="section__title">Portfolio</h2>
//       <span className="section__subtitle">Recent Projects</span>

//       <Projects />
//     </section>
//   );
// };

// export default Portfolio;


import React from "react";
import Projects from "./Projects";
import "./projects.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="work">
      <h2 className="section__title">Case Studies</h2>
      <span className="section__subtitle">
        Selected work focused on problem-solving, usability, and digital experiences
      </span>

      <Projects />
    </section>
  );
};

export default Portfolio;