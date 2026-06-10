import "../index.css";
import { getNoteById } from "../notes";
import { Link } from "react-router-dom";
import { FaCalendar } from "react-icons/fa6";
import HorizontalLine from "./HorizontalLine";
import NoteTagLabel from "./NoteTagLabel";

function NoteCard({ noteId }: { noteId: string }) {
  const note = getNoteById(noteId);
  if (!note) {
    return <></>;
  }
  return (
    <div className="flex flex-col p-6 bg-bg-elevated rounded-xl shadow">
      <div className="mb-4">
        <Link
          to={`/note/${noteId}`}
          className="text-3xl text-accent-bright font-semibold relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-soft after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          {note.title}
        </Link>
      </div>
      <div className="flex px-1 text-sm text-text-secondary font-mono">
        <div className="flex items-center space-x-2">
          <FaCalendar className="h-full" />
          <span>
            {note.datePosted.toLocaleDateString() +
              (note.dateEdited.getTime() === note.datePosted.getTime()
                ? ""
                : ` (edited: ${note.dateEdited.toLocaleDateString()})`)}
          </span>
        </div>
        <div className="flex items-center space-x-1 ml-4">
          {note.tags.length > 0 &&
            note.tags.map((tag) => <NoteTagLabel key={tag} tag={tag} />)}
        </div>
      </div>
      <HorizontalLine />
      <p className="pt-4 text-lg text-text-primary">{note.preview}</p>
    </div>
  );
}

export default NoteCard;
