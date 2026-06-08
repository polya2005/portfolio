import { FaDownload } from "react-icons/fa6";
import "../index.css";

function Resume() {
  return (
    <div className="flex flex-col grow shrink w-full bg-bg-primary/50 rounded-xl p-6 space-x-2.5 items-center-safe">
      <h1 className="grow-0 shrink text-accent text-5xl font-mono font-bold mt-8 mb-12">
        Resume
      </h1>
      <a
        href="/resume.pdf"
        download
        className="flex items-center bg-bg-elevated border-border-primary border-2 text-text-primary text-4xl font-mono w-full h-20 px-6 rounded-2xl  hover:bg-accent hover:text-bg-primary hover:cursor-pointer transition-colors"
      >
        <div className="text-4xl mr-4">
          <FaDownload />
        </div>
        <div className="grow shrink text-center"> Download Resume (pdf)</div>
      </a>
      <iframe
        className="grow shrink w-full h-[80vh] rounded-lg border-2 border-accent mt-12"
        src="/resume.pdf"
        title="Resume"
      />
    </div>
  );
}

export default Resume;
