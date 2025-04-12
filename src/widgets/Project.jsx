import "../styles/project.css";
import Tag from "./Tag";

const Project = ({ project }) => {
  const { name, description, githubUrl, liveUrl, technologies } = project;
  return (
    <div className="project-item">
      <div className="details">
        <h3>{name}</h3>
        <p className="project-description" title={description}>
          {description}
        </p>
      </div>
      <div className="extra-details">
        <div className="technologies">
          {technologies.map((tech) => (
            <Tag key={tech} tagContent={tech} />
          ))}
        </div>
        <div className="urls">
          {githubUrl && (
            <a href={githubUrl} target="_blank">
              GitHub
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank">
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
