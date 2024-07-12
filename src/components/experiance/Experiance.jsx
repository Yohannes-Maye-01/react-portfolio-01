import React from "react";
import "./Experiance.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experiance = () => {
  return (
    <section id="experience">
      <div className="experience_header">
        {" "}
        <small>My Skill</small>
        <h3>MY EXPERIANCE</h3>
      </div>
      <div className="container experiance_container">
        <div className="front_end_experiance">
          <article className="experiance_ditail">
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>HTML</h4>
              <small>experianced</small>
            </div>
          </article>

          <article className="experiance_ditail">
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>HTML</h4>
              <small>experianced</small>
            </div>
          </article>

          <article className="experiance_ditail">
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>CSS</h4>
              <small>experianced</small>
            </div>
          </article>
          <article className="experiance_ditail">
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>JAVASCRIPT</h4>
              <small>experianced</small>
            </div>
          </article>

          <article className="experiance_ditail">
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>Tailwind</h4>
              <small>experianced</small>
            </div>
          </article>

          <article className="experiance_ditail">
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>BootStrap</h4>
              <small>experianced</small>
            </div>
          </article>
          <article className="experiance_ditail">
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>React</h4>
              <small>experianced</small>
            </div>
          </article>
        </div>
        <div className="back_end_experiance">
          <article className="experiance_ditail">
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>React</h4>
              <small>experianced</small>
            </div>
          </article>
          <article className="experiance_ditail">
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>Node.js</h4>
              <small>experianced</small>
            </div>
          </article>
          <article className="experiance_ditail">
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>PHP</h4>
              <small>experianced</small>
            </div>
          </article>
          <article className="experiance_ditail">
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>Python</h4>
              <small>experianced</small>
            </div>
          </article>
          <article className="experiance_ditail">
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>MySQL</h4>
              <small>experianced</small>
            </div>
          </article>
          <article className="experiance_ditail">
            <BsPatchCheckFill className="icons" />
            <div>
              <h4>MONGODB</h4>
              <small>experianced</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
