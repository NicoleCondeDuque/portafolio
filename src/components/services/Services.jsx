import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">Create + Collaborate</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            {/*<HiOutlineClipboardList className="services__icon" />*/}
            <h3 className="services__title">
              Front end
              <br />
              Developer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            {/*<HiOutlineArrowSmRight className="services__button-icon" />*/}
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <button
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              >
                x
              </button>
              <h3 className="services__modal-title">Developer</h3>
              <p className="services__modal-description">
                Over 2 years of experience in web development providing creative
                and quality work.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
                  <p className="services__modal-info">
                    •Web page and app development
                  </p>
                </li>
                <li className="services__modal-service">
                  {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
                  <p className="services__modal-info">
                    •Integrate creative colloboration
                  </p>
                </li>
                <li className="services__modal-service">
                  {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
                  <p className="services__modal-info">
                    •Provide product Web and Apps
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            {/*<HiOutlineClipboardList className="services__icon" />*/}
            <h3 className="services__title">
              UI/UX
              <br />
              Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            {/*<HiOutlineArrowSmRight className="services__button-icon" />*/}
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <button
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              >
                x
              </button>
              <h3 className="services__modal-title">Designer</h3>
              <p className="services__modal-description">
                Over 1 year of experience in UI/UX design providing quality
                work.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
                  <p className="services__modal-info">
                    •Create a user friendly interface
                  </p>
                </li>
                <li className="services__modal-service">
                  {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
                  <p className="services__modal-info">
                    •Develop with a minimal approach
                  </p>
                </li>
                <li className="services__modal-service">
                  {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
                  <p className="services__modal-info">
                    •Design with accessibility in mind
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            {/*<HiOutlineClipboardList className="services__icon" />*/}
            <h3 className="services__title">
              Product
              <br />
              manager
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            {/*<HiOutlineArrowSmRight className="services__button-icon" />*/}
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <button
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              >
                x
              </button>
              <h3 className="services__modal-title">Manager</h3>
              <p className="services__modal-description">
                Over 7 years of experience developing a clear product strategy
                that aligns with the company's goals and vision. This includes
                understanding the market, identifying target customers, and
                defining the value proposition of your product.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
                  <p className="services__modal-info">•Professional Growth</p>
                </li>
                <li className="services__modal-service">
                  {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
                  <p className="services__modal-info">
                    •Srum and Agile Efficient Product Development
                  </p>
                </li>
                <li className="services__modal-service">
                  {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
                  <p className="services__modal-info">•Customer Satisfaction</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
