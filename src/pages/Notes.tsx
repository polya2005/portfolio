import "../index.css";
import { getAllNoteIds } from "../notes";
import NoteCard from "../components/NoteCard";

function Notes() {
  const noteIds = getAllNoteIds();

  return (
    <div className="flex grow shrink w-full bg-bg-primary/50 rounded-xl p-6 space-x-2.5">
      <div className="flex flex-1 grow shrink flex-col space-y-10">
        <h1 className="text-accent text-6xl font-mono font-bold mt-6">
          Notes
        </h1>
        <div className="flex flex-col space-y-4">
          {noteIds.map((id) => (
            <NoteCard key={id} noteId={id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notes;
