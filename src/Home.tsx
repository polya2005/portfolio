import "./index.css";
import QuickLink from "./QuickLink.tsx";
import { FaFileLines, FaGithub } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { PiCircuitryBold } from "react-icons/pi";

function Home() {
  return (
    <div className="flex grow shrink w-full bg-bg-primary/80 rounded-xl p-6 space-x-2.5">
      <div className="flex flex-1 grow shrink flex-col space-y-10">
        <h1 className="text-accent-bright text-6xl font-mono font-bold mt-6">
          Than
          <br />
          Thanpanit
        </h1>
        <div className="flex flex-col space-y-4">
          <p className="text-text-primary text-3xl font-sans leading-10">
            MIT EECS student interested in embedded systems, FPGAs, and
            hardware-software co-design.
          </p>
          <p className="text-text-secondary text-2xl font-sans leading-8">
            Plus, former IOAA, IPhO, and APhO medalist.
          </p>
        </div>
      </div>
      <div className="flex flex-1 grow shrink flex-col space-y-10 pt-6">
        <QuickLink to="/projects" icon={<PiCircuitryBold />}>
          Projects
        </QuickLink>
        <QuickLink to="/resume" icon={<FaFileLines />}>
          Resume
        </QuickLink>
        <QuickLink
          to="https://github.com/polya2005"
          external
          icon={<FaGithub />}
        >
          GitHub
        </QuickLink>
        <QuickLink to="/contact" icon={<HiOutlineEnvelope />}>
          Contact
        </QuickLink>
      </div>
    </div>
  );
}

export default Home;
