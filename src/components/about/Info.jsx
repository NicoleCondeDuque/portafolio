// import React from "react";


// const Info = () => {
//   return (
//     <div className="about__info grid">
//       <div className="about__box">
//         {/*<HiOutlineDesktopComputer className="about__icon" />*/}
//         <h3 className="about__title">Experience</h3>
//         <span className="about__subtitle">+5 Year</span>
//       </div>
//       <div className="about__box">
//         {/*<HiOutlineTerminal className="about__icon" />*/}
//         <h3 className="about__title">Completed</h3>
//         <span className="about__subtitle">20+ Projects</span>
//       </div>
//       {/* <div className="about__box"> */}
//         {/*<HiOutlineSparkles className="about__icon" />*/}
//         {/* <h3 className="about__title">Support</h3>
//         <span className="about__subtitle">Online 24/7</span>
//       </div> */}
//     </div>
//   );
// };

// export default Info;

import React from "react";

const Info = ({ isVisible }) => {
  const items = [
    {
      title: "Experience",
      subtitle: "5+ Years",
    },
    {
      title: "Projects",
      subtitle: "20+ Completed",
    },
    {
      title: "Focus",
      subtitle: "UX/UI + Product Thinking",
    },
  ];

  return (
    <div className="about__info grid">
      {items.map((item, index) => (
        <div
          key={item.title}
          className={`about__box ${isVisible ? "about__box--visible" : ""}`}
          style={{ transitionDelay: `${0.1 + index * 0.12}s` }}
        >
          <h3 className="about__title">{item.title}</h3>
          <span className="about__subtitle">{item.subtitle}</span>
        </div>
      ))}
    </div>
  );
};

export default Info;
