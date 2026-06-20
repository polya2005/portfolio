// Coursework data types
export type Course = {
  courseNumber: string;
  courseName: string;
};
export type Semester = {
  semesterName: string;
  courses: Course[];
};
export type Year = {
  yearName: string;
  semesters: Semester[];
};

// Tooltip context type
export interface TooltipContextType {
  getNextTooltipId: () => number;
}

// Note data types
export const NoteTag = {
  Personal: "personal",
  Coursework: "coursework",
  Project: "project",
} as const;

export type NoteTag = (typeof NoteTag)[keyof typeof NoteTag];

export type NoteItem = {
  fileName: string;
  title: string;
  datePosted: Date;
  dateEdited: Date;
  preview?: string;
  tags: NoteTag[];
};

// Project data types
export const ProjectSkill = {
  C: { name: "C", color: "bg-blue-200 text-blue-800" },
  Cpp: { name: "C++", color: "bg-blue-200 text-blue-800" },
  Python: { name: "Python", color: "bg-yellow-200 text-yellow-800" },
  PcbDesign: { name: "PCB Design", color: "bg-green-200 text-green-800" },
  LaserCutting: { name: "Laser Cutting", color: "bg-red-200 text-red-800" },
  ThreeDPrinting: {
    name: "3D Printing",
    color: "bg-orange-200 text-orange-800",
  },
  Verilog: { name: "Verilog", color: "bg-zinc-200 text-zinc-800" },
};

export type ProjectSkill = (typeof ProjectSkill)[keyof typeof ProjectSkill];

export type ProjectItem = {
  title: string;
  imagePath?: string;
  description: string;
  skills: ProjectSkill[];
  fileName: string;
};
