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
  C: "C",
  Cpp: "C++",
  Python: "Python",
  PcbDesign: "PCB Design",
  LaserCutting: "Laser Cutting",
  ThreeDPrinting: "3D Printing",
};

export type ProjectSkill = (typeof ProjectSkill)[keyof typeof ProjectSkill];

export type ProjectItem = {
  title: string;
  imagePath?: string;
  description: string;
  skills: ProjectSkill[];
  fileName: string;
};
