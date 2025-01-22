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
      Software  
      <br />
      Developer
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
      <h3 className="services__modal-title">Software Developer</h3>
      <p className="services__modal-description">
        Passionate about designing, developing, and optimizing scalable web applications. Experienced in front-end and full-stack development, ensuring high-quality, efficient, and user-friendly solutions.
      </p>
      <ul className="services__modal-services grid">
        <li className="services__modal-service">
          {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
          <p className="services__modal-info">
            • Develop and maintain responsive web applications.
          </p>
        </li>
        <li className="services__modal-service">
          {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
          <p className="services__modal-info">
            • Optimize performance, scalability, and security of web solutions.
          </p>
        </li>
        <li className="services__modal-service">
          {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
          <p className="services__modal-info">
            • Collaborate with designers and product managers to enhance user experience.
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
      IT  
      <br />
      Analyst
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
      <h3 className="services__modal-title">IT Analyst</h3>
      <p className="services__modal-description">
        Experienced in analyzing business and technical requirements, optimizing digital solutions, and ensuring efficient IT operations.
      </p>
      <ul className="services__modal-services grid">
        <li className="services__modal-service">
          {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
          <p className="services__modal-info">
            • Assess and improve system performance and efficiency.
          </p>
        </li>
        <li className="services__modal-service">
          {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
          <p className="services__modal-info">
            • Collaborate with teams to translate business needs into technical solutions.
          </p>
        </li>
        <li className="services__modal-service">
          {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
          <p className="services__modal-info">
            • Provide support and insights to enhance IT infrastructure and workflows.
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
            Digital Product 
              <br />
            Specialist
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
              <h3 className="services__modal-title">Digital Product Specialist</h3>
              <p className="services__modal-description">
              With a strong background in digital solutions, I specialize in bridging the gap between business needs and technology. My expertise lies in optimizing product strategies, enhancing user experiences, and ensuring seamless product development from concept to launch.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
                  <p className="services__modal-info">• User-Centered Digital Solutions</p>
                </li>
                <li className="services__modal-service">
                  {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
                  <p className="services__modal-info">
                    • Agile & Data-Driven Product Development
                  </p>
                </li>
                <li className="services__modal-service">
                  {/*<HiOutlineCheckCircle className="services__modal-icon" />*/}
                  <p className="services__modal-info">• Market Research & Customer Insights</p>
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
