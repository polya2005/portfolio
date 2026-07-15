import type { NoteItem } from "./types";
import { NoteTag } from "./types";

const notes: Map<string, NoteItem> = new Map([
  [
    "bit-set-unset",
    {
      fileName: "bit-set-unset.md",
      title: "A Nice Branchless Bit Set/Unset Trick",
      datePosted: new Date("2026-06-08"),
      dateEdited: new Date("2026-06-08"),
      preview:
        "Setting and unsetting a single bit is a common operation in low-level programming, especially in embedded systems. For example, you might want to set a specific bit in a GPIO register to turn on an LED, or unset a bit to turn it off...",
      tags: [NoteTag.Embedded, NoteTag.Math],
    },
  ],
]);

export function getAllNoteIds(): string[] {
  return Array.from(notes.keys());
}

export function getNoteById(noteId: string): NoteItem | undefined {
  return notes.get(noteId);
}
