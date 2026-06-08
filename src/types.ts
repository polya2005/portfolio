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

// Note data type
export type NoteItem = {
  fileName: string;
  title: string;
  datePosted: Date;
  dateEdited: Date;
}
