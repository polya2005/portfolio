import "../index.css";
import { NoteTag } from "../types";

type NoteTagLabelProps = {
  tag: NoteTag;
};

function NoteTagLabel({ tag }: NoteTagLabelProps) {
  return (
    <span className={`px-1.5 py-1 text-xs font-mono rounded ${tag.color}`}>
      {tag.name}
    </span>
  );
}

export default NoteTagLabel;
