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
          <AboutMe />
          <Projects />
        </div>
      </Container>
    </>
  );
}

export default Portfolio;
