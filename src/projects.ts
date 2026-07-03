import { ProjectSkill, type ProjectItem } from "./types";

const projects: Map<string, ProjectItem> = new Map([
  [
    "FPGA Spinthesizer",
    {
      title: "FPGA Spinthesizer",
      description: "In a team of two, we built the FPGA Spinthesizer, a MIDI-compatible, stepper-motor-based synthesizer which also improvises a musical response to the user's tunes. I was responsible for the high-level system design, tone generation on the stepper motors, PCB design, and mechanical assembly.",
      skills: [
        ProjectSkill.Verilog,
        ProjectSkill.PcbDesign,
        ProjectSkill.Python,
        ProjectSkill.ThreeDPrinting,
        ProjectSkill.LaserCutting,
      ],
      fileName: "fpga-spinthesizer/fpga-spinthesizer.md",
    },
  ],
  [
    "spaidv1",
    {
      title: "SPAIDv1: Star Pointing and Identification Device (Prototype v1)",
      description:
        "I developed the first working prototype of a device capable of physically pointing toward a selected star in the night sky and identifying the star currently aligned with the pointer.",
      skills: [
        ProjectSkill.Cpp,
        ProjectSkill.Python,
        ProjectSkill.ThreeDPrinting,
      ],
      fileName: "spaidv1/spaidv1.md",
      imagePath: "/projects/spaidv1/device.png",
    },
  ],
  [
    "spaidv2",
    {
      title: "SPAIDv2: Star Pointing and Identification Device",
      description:
        "I developed a second version of the SPAID device, which is more robust and has improved pointing algorithm compared to the first prototype. This is a work in progress.",
      skills: [
        ProjectSkill.Cpp,
        ProjectSkill.Python,
        ProjectSkill.ThreeDPrinting,
        ProjectSkill.PcbDesign,
      ],
      fileName: "spaidv2/spaidv2.md",
    },
  ],
]);

export function getAllProjectIds(): string[] {
  return Array.from(projects.keys());
}

export function getProjectById(projectId: string): ProjectItem | undefined {
  return projects.get(projectId);
}
