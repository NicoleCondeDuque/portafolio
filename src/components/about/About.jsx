// import React from "react";
// import "./about.css";
// import AboutImg from "../../assets/nicole1Bg.png";
// import CV from "../../assets/ResumeNicoleConde.pdf";
// import Info from "./Info.jsx";

// const About = () => {
//   return (
//     <section className="about section" id="about">
//       <h2 className="section__title">About Me</h2>
//       <span className="section__subtitle">A short introduction</span>
//       <div className="about__container container grid">
//         {/* <img src={AboutImg} alt="about" className="about__img" /> */}
//         <div className="about__data">
//           <Info />
//          <p className="about__description">
//   I enjoy working on complex products — the kind that don’t make sense at first.
//   <br /><br />
//   My role is to bring structure to that complexity. I look at how things actually work,
//   where people get stuck, and how to make the experience clearer and easier to use.
//   <br /><br />
//   With a background in front-end development, I don’t just think about how things look —
//   I think about how they behave, how they’re built, and how they hold up in real use.
//   <br /><br />
//   Recently, I’ve been working on products with heavy workflows and multiple stakeholders,
//   where clarity and usability are critical.
//   <br /><br />
//   I’m also building tools outside of work, like a Spanish driving practice test to support
//   the Latin community in Calgary — something practical, simple, and genuinely useful.
//   <br /><br />
//   If you’re working on something complex and need clarity, we’ll probably get along.
// </p>
//           {/* <a href="https://driver-test-hazel.vercel.app/welcome" target="_blank" rel="noopener noreferrer" className="button button--flex">
//           Driver Test
           
//           </a>        */}
//           {/* <a download="" href={CV} className="button button--flex">
//             Download CV
//             <svg
//               class="button__icon"
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//             >
//               <path
//                 d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
//                 fill="var(--container-color)"
//               ></path>
//               <path
//                 d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
//                 fill="var(--container-color)"
//               ></path>
//               <path
//                 d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
//                 fill="var(--container-color)"
//               ></path>
//               <path
//                 d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
//                 fill="var(--container-color)"
//               ></path>
//             </svg>
//           </a> */}
    
    
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React, { useEffect, useRef, useState } from "react";
import "./about.css";
import Info from "./Info.jsx";

const aboutParagraphs = [
  "I enjoy working on complex products the kind that don’t make sense at first.",
  "My role is to bring structure to that complexity. I look at how things actually work, where people get stuck, and how to make the experience clearer and easier to use.",
  "With a background in front-end development, I don’t just think about how things look I think about how they behave, how they’re built, and how they hold up in real use.",
  "I’m also building tools outside of work, like a Spanish driving practice test inspired by a real need: having better ways to study in Spanish for the driving exam.",
  "I like building things that are practical, thoughtful, and genuinely useful."
];

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about section ${isVisible ? "about--visible" : ""}`}
      id="about"
    >
      {/* <h2 className="section__title about__heading-reveal">About Me</h2>
      <span className="section__subtitle about__heading-reveal">
        More than a short introduction
      </span> */}

      <div className="about__container container grid">
        <div className="about__data">
          <div className="about__intro-block">
            <span className="about__eyebrow">A bit about how I think</span>

            <h3 className="about__main-title">
              I like making complex digital experiences feel clear, useful, and human.
            </h3>

            <p className="about__lead">
              My work lives between product thinking, design, and front-end logic.
            </p>
          </div>

          <Info isVisible={isVisible} />

          <div className="about__story">
            {aboutParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="about__paragraph"
                style={{ transitionDelay: `${0.15 + index * 0.12}s` }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div
            className="about__highlight"
            style={{ transitionDelay: "0.8s" }}
          >
            <span className="about__highlight-line"></span>
            <p>
              If it solves a real problem and makes people’s lives easier, I’m interested.
            </p>
          </div>

          <a
            href="https://driver-test-hazel.vercel.app/welcome"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--flex about__cta"
            style={{ transitionDelay: "0.95s" }}
          >
            View Driving Test Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
