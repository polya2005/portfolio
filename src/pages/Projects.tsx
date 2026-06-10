import ProjectCard from "../components/ProjectCard";
import "../index.css";
import { getAllProjectIds } from "../projects";

function Projects() {
  const projectIds = getAllProjectIds();

  return (
    <div className="flex grow shrink w-full bg-bg-primary/50 rounded-xl p-6 space-x-2.5">
      <div className="flex flex-1 grow shrink flex-col space-y-10">
        <h1 className="text-accent text-6xl font-mono font-bold mt-6">
          Projects
        </h1>
        <div className="flex flex-col space-y-4">
          {projectIds.map((id) => (
            <ProjectCard key={id} projectId={id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;