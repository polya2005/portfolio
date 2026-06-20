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
  Personal: { name: "personal", color: "bg-green-200 text-green-800" },
  Coursework: { name: "coursework", color: "bg-blue-200 text-blue-800" },
  Project: { name: "project", color: "bg-yellow-200 text-yellow-800" },
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
