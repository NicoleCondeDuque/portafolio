// import React from "react";


// const ProjectItems = ({ item }) => {
//   return (
//     <div className="project__card" key={item.id}>
//       <img className="project__img" src={item.image} alt="" />
//       <h3 className="project__title">{item.title}</h3>
//       <button class="buttonP">
//       <a href={item.demo} className="project__button" target="_blank" rel="noopener noreferrer">
//   Check
// </a>

//       </button>
//     </div>
//   );
// };

// export default ProjectItems;

import React from "react";

const ProjectItems = ({ item }) => {
  return (
    <article className="project__card">
      <div className="project__image-wrapper">
        <img className="project__img" src={item.image} alt={item.title} />
        <span className="project__category">{item.category}</span>
      </div>

      <div className="project__content">
        <div className="project__top">
          <h3 className="project__title">{item.title}</h3>
          <span className="project__role">{item.role}</span>
        </div>

        <div className="project__details">
          <div className="project__block">
            <span className="project__label">Challenge</span>
            <p className="project__text">{item.challenge}</p>
          </div>

          <div className="project__block">
            <span className="project__label">Solution</span>
            <p className="project__text">{item.solution}</p>
          </div>

          <div className="project__block">
            <span className="project__label">Outcome</span>
            <p className="project__text">{item.impact}</p>
          </div>
        </div>

        <a
          href={item.demo}
          className="project__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Demo
        </a>
      </div>
    </article>
  );
};

export default ProjectItems;