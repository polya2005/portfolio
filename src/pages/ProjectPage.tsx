import { getProjectById } from "../projects";
import ErrorPage from "../Error";
import "../index.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import MarkdownComponents from "../components/MarkdownComponents";

function ProjectPage() {
  const { projectId } = useParams();
  const projectItem = getProjectById(projectId || "");

  if (!projectItem) {
    return <ErrorPage />;
  }

  const [noteContent, setNoteContent] = useState<string>("");

  useEffect(() => {
    async function loadText() {
      try {
        const response = await fetch(`/projects/${projectItem!.fileName}`);
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
      <div>
        <Link
          to="/projects"
          className="text-sm text-text-muted font-mono mb-2 hover:underline"
        >
          &larr; Back to Projects
        </Link>
      </div>
      <ReactMarkdown components={MarkdownComponents}>
        {noteContent}
      </ReactMarkdown>
    </div>
  );
}

export default ProjectPage;
