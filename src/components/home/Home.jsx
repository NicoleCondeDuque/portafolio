// import React from "react";
// import "./home.css";
// import Social from "./Social";
// import Data from "./Data";
// import Scroll from "./Scroll";

// const Home = () => {
//   return (
//     <section className="home section" id="home">
//       <div className="home__container container grid">
//         <div className="home__content grid">
//           <Social />
//           <div className="home__img"></div>
//           <Data />
//         </div>
//         <Scroll />
//       </div>
//     </section>
//   );
// };

// export default Home;


import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import Scroll from "./Scroll";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__content">
          <Social />

          <div className="home__visual">
            <div className="home__img"></div>

            <div className="home__card home__card--top">
              <span>Currently</span>
              <strong>UX/UI Specialist</strong>
            </div>

            <div className="home__card home__card--bottom">
              <span>Focus</span>
              <strong>Complex workflows → clarity</strong>
            </div>
          </div>

          <Data />
        </div>

        <Scroll />
      </div>
    </section>
  );
};

export default Home;