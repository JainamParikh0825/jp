import { projects } from "../data";
import "../styles/projects.css";
import Project from "../widgets/Project";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects" id="all-projects">
        {[...projects.top, ...projects.others].map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
