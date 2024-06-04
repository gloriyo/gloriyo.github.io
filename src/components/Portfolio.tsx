import Container from "react-bootstrap/Container";

import AboutMe from "./AboutMe";
import Projects from "./Projects";
import TopNav from "./TopNav";

function Portfolio() {
  return (
    <>
      <TopNav />
      <Container className="justify-content-center page-container p-0">
        <div className="justify-content-center">
          <div>
            <AboutMe />
          </div>
          <div id="section-projects" className="section-container">
            <Projects />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Portfolio;
