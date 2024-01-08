import React, { useState } from "react";
import "./qualification.css";
//import {
//  HiOutlineAcademicCap,
//  HiOutlineBriefcase,
//  HiOutlineCalendar,
//} from "react-icons/hi";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            {/*<HiOutlineAcademicCap className="qualification__icon" />*/}
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            {/*<HiOutlineBriefcase className="qualification__icon" />*/}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  <h3 className="qualification__title">
                    Front End Developer - UI/UX Design
                  </h3>
                </h3>
                <span className="qualification__subtitle">Laboratoria</span>
                <div className="qualification__calendar">
                  {/*<HiOutlineCalendar className="qualification__calendar-icon" />*/}
                  2022-2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  {" "}
                  <h3 className="qualification__title">Front End Developer </h3>
                </h3>
                <span className="qualification__subtitle">
                  Coderhouse - Argentina
                </span>
                <div className="qualification__calendar">
                  {/*<HiOutlineCalendar className="qualification__calendar-icon" />*/}
                  2022
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  <h3 className="qualification__title">
                    Visual identity for food projects
                  </h3>
                </h3>
                <span className="qualification__subtitle">Domestika</span>
                <div className="qualification__calendar">
                  {/*<HiOutlineCalendar className="qualification__calendar-icon" />*/}
                  2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  {" "}
                  <h3 className="qualification__title">
                    {" "}
                    Restaurant management
                  </h3>
                </h3>
                <span className="qualification__subtitle">
                  Le Cordon Bleu - Peru
                </span>
                <div className="qualification__calendar">
                  {/*<HiOutlineCalendar className="qualification__calendar-icon" />*/}
                  2022
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  <h3 className="qualification__title">
                    Bachelor's degree in Business Administration
                  </h3>
                </h3>
                <span className="qualification__subtitle">
                  University Catholic Andrés Bello - Venezuela
                </span>
                <div className="qualification__calendar">
                  {/*<HiOutlineCalendar className="qualification__calendar-icon" />*/}
                  2011 - 2016
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Front Developer Junior</h3>
                <span className="qualification__subtitle">Finca Grandez</span>
                <a href="https://www.fincagrandez.com/">Web</a>
                <div className="qualification__calendar">
                  {/*<HiOutlineCalendar className="qualification__calendar-icon" />*/}
                  2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Social media manager</h3>
                <span className="qualification__subtitle">Finca Grandez</span>
                <div className="qualification__calendar">
                  {/*<HiOutlineCalendar className="qualification__calendar-icon" />*/}
                  2021 - 2022
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Manager</h3>
                <span className="qualification__subtitle">
                  Mamma Tomato{" "}
                </span>{" "}
                <a href="https://www.mammatomato.com.pe/pedir">Web</a>
                <div className="qualification__calendar">
                  {/*<HiOutlineCalendar className="qualification__calendar-icon" />*/}
                  2020 - 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Manager</h3>
                <span className="qualification__subtitle">Pastipan</span>
                <a href="https://pastipan.com.pe/">Web</a>
                <div className="qualification__calendar">
                  {/*<HiOutlineCalendar className="qualification__calendar-icon" />*/}
                  2018-2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Manager junior</h3>
                <span className="qualification__subtitle">
                  La baguette{" "}
                </span>{" "}
                <a href="https://www.labaguette.pe/">Web</a>
                <div className="qualification__calendar">
                  {/*<HiOutlineCalendar className="qualification__calendar-icon" />*/}
                  2017 - 2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
