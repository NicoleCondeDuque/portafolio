import React from "react";
//import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt="" />
      <h3 className="project__title">{item.title}</h3>
      <button class="buttonP">
        <a href={item.demo} className="project__button">
          {" "}
          Check!
          {/*Demo <HiOutlineArrowSmRight className="project__button-icon" />*/}
        </a>
      </button>
    </div>
  );
};

export default ProjectItems;
