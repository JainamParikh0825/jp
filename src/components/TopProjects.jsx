import { projects } from "../data";
import "../styles/top-projects.css";
import Project from "../widgets/Project";

const TopProjects = () => {
  return (
    <div className="top-projects-container">
      <h2 className="highlight">Top Projects</h2>
      <div className="projects" id="top-projects">
        {projects.top.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default TopProjects;
