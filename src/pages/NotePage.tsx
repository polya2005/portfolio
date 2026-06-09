import { getNoteById } from "../notes";
import ErrorPage from "../Error";
import "../index.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import MarkdownComponents from "../components/MarkdownComponents";

function NotePage() {
  const { noteId } = useParams();
  const noteItem = getNoteById(noteId || "");

  if (!noteItem) {
    return <ErrorPage />;
  }

  const [noteContent, setNoteContent] = useState<string>("");

  useEffect(() => {
    async function loadText() {
      try {
        const response = await fetch(`/notes/${noteItem!.fileName}`);
        const text = await response.text();
        setNoteContent(text);
      } catch (err) {
        console.error(err);
      }
    }

    loadText();
  }, []);

  return (
    <div className="flex flex-col grow shrink w-full bg-bg-primary/50 rounded-xl p-6 space-y-2.5">
      <ReactMarkdown components={MarkdownComponents}>
        {noteContent}
      </ReactMarkdown>
    </div>
  );
}

export default NotePage;
