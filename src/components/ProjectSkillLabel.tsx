import "../index.css";
import { ProjectSkill } from "../types";

type ProjectSkillLabelProps = {
  skill: ProjectSkill;
};

function ProjectSkillLabel({ skill }: ProjectSkillLabelProps) {
  return (
    <span
      className={`px-1.5 py-1 text-xs font-mono rounded ${getSkillColor(
        skill,
      )}`}
    >
      {skill}
    </span>
  );
}

function getSkillColor(skill: ProjectSkill): string {
  switch (skill) {
    case ProjectSkill.Cpp:
      return "bg-blue-200 text-blue-800";
    case ProjectSkill.Python:
      return "bg-yellow-200 text-blue-600";
    case ProjectSkill.PcbDesign:
      return "bg-green-200 text-green-800";
    default:
      return "bg-gray-200 text-gray-800";
  }
}

export default ProjectSkillLabel;