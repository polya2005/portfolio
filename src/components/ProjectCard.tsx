import "../index.css";
import { getProjectById } from "../projects";
import { Link } from "react-router-dom";
import HorizontalLine from "./HorizontalLine";
import ProjectSkillLabel from "./ProjectSkillLabel";

function ProjectCard({ projectId }: { projectId: string }) {
  const projectItem = getProjectById(projectId);
  if (!projectItem) {
    return <></>;
  }

  return (
    <div className="flex p-6 bg-bg-elevated rounded-xl shadow">
      <div className="flex flex-col">
        <div className="mb-4">
          <Link
            to={`/project/${projectId}`}
            className="text-3xl text-accent-bright font-semibold relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-soft after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            {projectItem.title}
          </Link>
        </div>
        <div className="flex px-1 text-sm text-text-secondary font-mono space-x-4">
          <div className="flex items-center space-x-1">
            {projectItem.skills.length > 0 &&
              projectItem.skills.map((skill) => (
                <ProjectSkillLabel key={skill.name} skill={skill} />
              ))}
          </div>
        </div>
        <HorizontalLine />
        <p className="pt-4 text-lg text-text-primary">
          {projectItem.description}
        </p>
      </div>
      {projectItem.imagePath && (
        <img
          src={projectItem.imagePath}
          alt={`${projectItem.title} image`}
          className="ml-6 w-48 h-48 object-cover rounded bg-white"
        />
      )}
    </div>
  );
}

export default ProjectCard;
