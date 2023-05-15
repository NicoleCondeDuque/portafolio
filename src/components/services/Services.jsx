import React, { useState } from "react";
import "./services.css";
//import {
//  HiOutlineClipboardList,
//  HiOutlineArrowSmRight,
//  HiOutlineCheckCircle,
//  HiX,
//} from "react-icons/hi";

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
              Web + App
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
              {/*<HiX
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              />*/}
              <h3 className="services__modal-title">Developer</h3>
              <p className="services__modal-description">
                Over 1 years of experience in web development providing creative
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
              {/*<HiX
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              />*/}
              <h3 className="services__modal-title">Designer</h3>
              <p className="services__modal-description">
                Over 1 years of experience in UI/UX design providing quality
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
              Social media
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
              {/*<HiX
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              />*/}
              <h3 className="services__modal-title">Marketing</h3>
              <p className="services__modal-description">
                Over 4 years experience in Creation of digital campaigns on
                platforms such as Instagram Ads and Facebook Ads • Management of
                advertising budgets for social media advertising campaigns.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
                  <p className="services__modal-info">
                    •Monitor and analyze social media metrics
                  </p>
                </li>
                <li className="services__modal-service">
                  {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
                  <p className="services__modal-info">
                    •Custom website and landing page
                  </p>
                </li>
                <li className="services__modal-service">
                  {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
                  <p className="services__modal-info">•Build brand loyalty</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            {/*<HiOutlineClipboardList className="services__icon" />*/}
            <h3 className="services__title">
              Project
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
              {/*<HiX
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              />*/}
              <h3 className="services__modal-title">Manager</h3>
              <p className="services__modal-description">
                Over 6 years experience responsible for planning, executing, and
                closing projects within an organization. Including budgeting,
                scheduling, resource allocation, team management, risk
                management, and quality assurance.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
                  <p className="services__modal-info">
                    •Meeting the project objectives:
                  </p>
                </li>
                <li className="services__modal-service">
                  {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
                  <p className="services__modal-info">
                    •Managing project resources:
                  </p>
                </li>
                <li className="services__modal-service">
                  {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
                  <p className="services__modal-info">
                    •Building a strong project team
                  </p>
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
