import Container from "react-bootstrap/Container";

import appLogo from "../assets/logos/gloria.png";
import Skills from "./Skills";

function AboutMe() {
  return (
    <div className="aboutme">
      <Container className="app-header px-0 py-5">
        <img src={appLogo} className="app-logo" alt="logo" />
        <h1 className="display-3" id="section-cv">
          {" "}
          Gloria Yoon
        </h1>

        <p className="lead px-4">
          Hi, I'm a software developer with a passion in software and web
          development.
        </p>
      </Container>
      <Skills />
    </div>
  );
}

export default AboutMe;
