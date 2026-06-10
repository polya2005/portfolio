import { ProjectSkill, type ProjectItem } from "./types";

const projects: Map<string, ProjectItem> = new Map([
  [
    "spaidv1",
    {
      title: "SPAIDv1: Star Pointing and Identification Device (Prototype v1)",
      description:
        "I developed the first working prototype of a device capable of physically pointing toward a selected star in the night sky and identifying the star currently aligned with the pointer.",
      skills: [ProjectSkill.Cpp, ProjectSkill.Python, ProjectSkill.ThreeDPrinting],
      fileName: "spaidv1/spaidv1.md",
      imagePath: "/projects/spaidv1/device.png",
    },
  ],
]);

export function getAllProjectIds(): string[] {
  return Array.from(projects.keys());
}

export function getProjectById(projectId: string): ProjectItem | undefined {
  return projects.get(projectId);
}
