import { projects } from "../constants/projects";

function Projects() {
  return (
    <div id="section-projects" className="aboutme">
      <header className="app-header  p-4 p-md-5 mx-lg-5">
        <h1 className="display-3">Projects</h1>

        <p className="lead px-4">
          Currently ongoing projects and recently completed projects.
        </p>
      </header>
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 p-lg-5">
        {projects.map((project, i) => (
          <div className="col" key={i}>
            <div className="card h-100">
              <img src={project.imgSrc} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">{project.name}</p>
              </div>
              <div className="card-footer text-muted">
                <a>Links: </a>
                {project.links.map((link, j) => (
                  <a href={link.href} className="card-link" key={j}>
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
