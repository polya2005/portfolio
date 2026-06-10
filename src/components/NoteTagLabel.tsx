import "../index.css";
import { NoteTag } from "../types";

type NoteTagLabelProps = {
  tag: NoteTag;
};

function NoteTagLabel({ tag }: NoteTagLabelProps) {
  return (
    <span className={`px-1.5 py-1 text-xs font-mono rounded ${getTagColor(tag)}`}>
      {tag}
    </span>
  );
}

function getTagColor(tag: NoteTag): string {
  switch (tag) {
    case NoteTag.Personal:
      return "bg-green-200 text-green-800";
    case NoteTag.Coursework:
      return "bg-blue-200 text-blue-800";
    case NoteTag.Project:
      return "bg-yellow-200 text-yellow-800";
    default:
      return "bg-gray-200 text-gray-800";
  }
}

export default NoteTagLabel;
