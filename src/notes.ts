import type { NoteItem } from "./types";
import { NoteTag } from "./types";

const notes: Map<string, NoteItem> = new Map([
  [
    "test",
    {
      fileName: "test.md",
      title: "Test Note",
      datePosted: new Date("2026-06-08"),
      dateEdited: new Date("2026-06-08"),
      preview: "This is a preview of the test note.",
      tags: [NoteTag.Personal],
    },
  ],
]);

export function getAllNoteIds(): string[] {
  return Array.from(notes.keys());
}

export function getNoteById(noteId: string): NoteItem | undefined {
  return notes.get(noteId);
}
