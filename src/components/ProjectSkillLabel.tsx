import "../index.css";
import { ProjectSkill } from "../types";

type ProjectSkillLabelProps = {
  skill: ProjectSkill;
};

function ProjectSkillLabel({ skill }: ProjectSkillLabelProps) {
  return (
    <span className={`px-1.5 py-1 text-xs font-mono rounded ${skill.color}`}>
      {skill.name}
    </span>
  );
}

export default ProjectSkillLabel;
