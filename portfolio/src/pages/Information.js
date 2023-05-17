import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import linkedIn from "../assets/linkedin_profile.png"

function Information() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
        {showModal ? (
        <div className="modal-container">
          <div className="modal-content">
            <h2>Welcome to my personal website!</h2>
            <p>I appreciate you taking the time to learn more about me. I am responsible for the entire creation of this personal website: from design, development, to deployment. Hope you like it!</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      ) : null}
    <div className="landing-content-area">
      <div className="landing-top-container">
        <div className="landing-left">
          <div className="landing-left-container">
            <div className="landing-top-content">
              <div className="landing-name-title">LUCAS VORON</div>
              <div className="landing-subtitle">UI/UX Engineer</div>
            </div>
            <div className="landing-middle-content">
              <div className="landing-top-title">Mission</div>
              <div className="landing-top-text">Driven to use creative design & front-end implementation to promote innovation.</div>
            </div>
            <div className="landing-middle-content">
              <div className="landing-top-title">Education</div>
              <div className="landing-top-text">Computer Science & Engineering Major with a Mathematics Minor</div>
            </div>
            <div className="landing-middle-content">
              <div className="landing-top-title">Languages</div>
              <div className="landing-top-text">C | C++ | JavaScript | TypeScript | CSS | HTML | Assembly | PHP | VHDL | MATLAB | French</div>
            </div>
            <div className="landing-bottom-content">
              <div className="landing-top-title">Frameworks & Databases</div>
              <div className="landing-top-text">Next.js | React | Vue.js | Ruby on Rails | Firebase</div>
            </div>
          </div>
        </div>
        <div className="landing-right">
          <img src={linkedIn} className="landing-top-image-container" alt="waste graphic 3" />
        </div>
      </div>
      <div className="landing-tiles-container">
        <Link to='/about'>
          <div className="landing-tile">
            <div className="landing-tile-text">About Me</div>
          </div>
        </Link>
        <Link to='/experience'>
        <div className="landing-tile">
          <div className="landing-tile-text">Professional Experience</div>
        </div>
        </Link>
        <Link to='/projects'>
        <div className="landing-tile">
          <div className="landing-tile-text">Personal Projects</div>
        </div>
        </Link>
        <Link to='/coursework'>
        <div className="landing-tile">
          <div className="landing-tile-text">Relevant Coursework</div>
        </div>
        </Link>
        <Link to='/leadership'>
        <div className="landing-tile">
          <div className="landing-tile-text">Leadership</div>
        </div>
        </Link>
        <Link to='/awards'>
        <div className="landing-tile">
          <div className="landing-tile-text">Awards</div>
        </div>
        </Link>
      </div>
      <div className="landing-top-container">
        <div className="landing-top-content">
          <div className="landing-bottom-text">If you would like to learn more about me and my work, feel free to contact me directly or continue to explore this site.</div>
        </div>
      </div>
    </div>
    </div>
  );
};
  
export default Information;