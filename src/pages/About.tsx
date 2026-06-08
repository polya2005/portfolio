import { NavLink } from "react-router-dom";
import "../index.css";
import { TooltipProvider } from "../context/TooltipContext";
import Tooltip from "../components/Tooltip";
import HorizontalLine from "../components/HorizontalLine";
import { useState } from "react";

type Course = {
  courseNumber: string;
  courseName: string;
};

type Semester = {
  semesterName: string;
  courses: Course[];
};

type Year = {
  yearName: string;
  semesters: Semester[];
};

const courseworkData: Year[] = [
  {
    yearName: "Freshman Year",
    semesters: [
      {
        semesterName: "Fall 2024",
        courses: [
          {
            courseNumber: "6.101",
            courseName: "Fundamentals of Programming",
          },
          {
            courseNumber: "7.012",
            courseName: "Introductory Biology",
          },
          {
            courseNumber: "14.01",
            courseName: "Principles of Microeconomics",
          },
          {
            courseNumber: "14.30",
            courseName: "Introduction to Statistical Methods in Economics",
          },
        ],
      },
      {
        semesterName: "IAP 2025",
        courses: [
          {
            courseNumber: "6.9620",
            courseName: "Web Lab: A Web Programming Class and Competition",
          },
        ],
      },
      {
        semesterName: "Spring 2025",
        courses: [
          {
            courseNumber: "5.111",
            courseName: "Principles of Chemical Science",
          },
          {
            courseNumber: "6.1200",
            courseName: "Mathematics for Computer Science",
          },
          {
            courseNumber: "6.1904",
            courseName:
              "Introduction to Low-level Programming in C and Assembly",
          },
          {
            courseNumber: "15.076",
            courseName: "Optimization Methods in Business Analytics",
          },
          {
            courseNumber: "24.09",
            courseName: "Minds and Machines",
          },
        ],
      },
    ],
  },
  {
    yearName: "Sophomore Year",
    semesters: [
      {
        semesterName: "Fall 2025",
        courses: [
          {
            courseNumber: "6.191",
            courseName: "Computation Structures",
          },
          {
            courseNumber: "6.200",
            courseName:
              "Electrical Circuits: Modeling and Design of Physical Systems",
          },
          {
            courseNumber: "6.205",
            courseName: "Digital Systems Laboratory",
          },
          {
            courseNumber: "14.02",
            courseName: "Principles of Macroeconomics",
          },
          {
            courseNumber: "14.73",
            courseName: "The Challenge of World Poverty",
          },
        ],
      },
      {
        semesterName: "IAP 2026",
        courses: [
          {
            courseNumber: "6.S092",
            courseName: "The Art and Science of PCB Design",
          },
        ],
      },
      {
        semesterName: "Spring 2026",
        courses: [
          {
            courseNumber: "6.121",
            courseName: "Introduction to Algorithms",
          },
          {
            courseNumber: "6.180",
            courseName: "Computer System Engineering",
          },
          {
            courseNumber: "6.300",
            courseName: "Signal Processing",
          },
          {
            courseNumber: "15.0251",
            courseName: "Game Theory for Strategic Advantage",
          },
          {
            courseNumber: "15.076",
            courseName: "Analytics for the Better World",
          },
        ],
      },
    ],
  },
  {
    yearName: "Junior Year",
    semesters: [
      {
        semesterName: "Fall 2026",
        courses: [
          {
            courseNumber: "2.004",
            courseName: "Dynamics and Control II",
          },
          {
            courseNumber: "6.181",
            courseName: "Operating System Engineering",
          },
          {
            courseNumber: "6.3702",
            courseName: "Introduction to Probability",
          },
          {
            courseNumber: "6.640",
            courseName: "Applied Quantum and Statistical Physics",
          },
          {
            courseNumber: "14.19",
            courseName: "Market Design",
          },
        ],
      },
    ],
  },
];

function Intro() {
  return (
    <>
      <p className="text-text-secondary text-2xl font-sans w-full h-auto px-6">
        Hi! My name is Boonyakorn Thanpanit, but I usually go by "Than". I am
        from Thailand and currently a student at Massachusetts Institute of
        Technology (MIT), where I am pursuing a degree in Electrical Engineering
        with Computing (known at MIT as course 6-5, formerly 6-2). I am also a
        recipient of Thailand's King's Scholarship and former IOAA
        <Tooltip>
          International Olympiad in Astronomy and Astrophysics
        </Tooltip>{" "}
        gold medalist, IPhO<Tooltip>International Physics Olympiad</Tooltip>{" "}
        silver medalist, and APhO<Tooltip>Asian Physics Olympiad</Tooltip>{" "}
        bronze medalist.
      </p>
      <p className="text-text-secondary text-2xl font-sans w-full h-auto px-6 mt-6">
        You can contact me through email at{" "}
        <a href="mailto:thanpa28@mit.edu" className="text-accent">
          thanpa28@mit.edu
        </a>{" "}
        or through other platforms linked in the{" "}
        <NavLink to="/contact" className="text-accent">
          contact page
        </NavLink>
        . My resume is also available on the{" "}
        <NavLink to="/resume" className="text-accent">
          resume page
        </NavLink>
        .
      </p>
    </>
  );
}

function Interests() {
  return (
    <>
      <p className="text-text-secondary text-2xl font-sans w-full h-auto px-6">
        I am interested in embedded systems, FPGAs, and signal processing. My
        experience in these areas includes a UROP
        <Tooltip>Undergraduate Research Opportunities Program</Tooltip> project
        at MIT CSAIL
        <Tooltip>
          Computer Science and Artificial Intelligence Laboratory
        </Tooltip>{" "}
        where I worked on <span className="italic">Puppetmaster</span>, an
        FPGA-based accelerator for transaction scheduling; many{" "}
        <NavLink to="/projects" className="text-accent">
          projects
        </NavLink>{" "}
        both in classes and in my free time including an IoT-enabled LED matrix
        display, <span className="italic">FPGA Spinthesizer</span>
        <Tooltip>
          FPGA-based synthesizer for creating musical tones with stepper motors
        </Tooltip>
        , and <span className="italic">SPAID</span>
        <Tooltip>
          Star Pointing and Identification Device; pronounced "spade"
        </Tooltip>
        ; and relevant coursework as described{" "}
        <a href="#coursework" className="text-accent">
          below
        </a>
        .
      </p>
      <p className="text-text-secondary text-2xl font-sans w-full h-auto px-6 mt-6">
        Outside of academics, I enjoy soccer (both playing as a goalkeeper and
        supporting Liverpool FC), pop music (especially Ed Sheeran), boba, and
        chess.
      </p>
    </>
  );
}

function TeachingAndResearch() {
  return (
    <>
      <p className="text-text-secondary text-2xl font-sans w-full h-auto px-6">
        I have experience as an LA<Tooltip>Lab Assistant</Tooltip> for MIT's
        6.200{" "}
        <span className="italic">
          Electrical Circuits: Modeling and Design of Physical Systems
        </span>{" "}
        during the Spring 2026 semester. I am also planning to continue working
        as an LA for 6.200 in the Fall 2026 semester.
      </p>
      <p className="text-text-secondary text-2xl font-sans w-full h-auto px-6 mt-6">
        During the 2025-2026 academic year, I worked as a UROP research
        assistant at MIT CSAIL under the supervision of Professor{" "}
        <a href="http://adam.chlipala.net/" className="text-accent">
          Adam Chlipala
        </a>{" "}
        on the <span className="italic">Puppetmaster</span> project mentioned
        above. My contributions to the project included reducing the latency of
        the accelerator by more than 2x, possibly leading to a publication.
      </p>
      <p className="text-text-secondary text-2xl font-sans w-full h-auto px-6 mt-6">
        In the span of half a decade, I have taught physics, mathematics, and
        astronomy to hundreds of middle and high school students at my alma
        mater,{" "}
        <a href="https://www.sk.ac.th/" className="text-accent">
          Suankularb Wittayalai School
        </a>{" "}
        in Thailand as a volunteer tutor. More than ten of my students went on
        to win medals at the International Physics Olympiad, International
        Astronomy and Astrophysics Olympiad, and Asian Physics Olympiad; and
        many more won medals at national competitions.
      </p>
    </>
  );
}

function CourseBulletItem({ courseNumber, courseName }: Course) {
  return (
    <li>
      {courseNumber} <span className="italic">{courseName}</span>
    </li>
  );
}

function SemesterColumn({ semesterName, courses }: Semester) {
  return (
    <div className="flex flex-col items-start gap-2.5">
      <h4 className="text-text-secondary text-2xl font-mono font-medium">
        {semesterName}
      </h4>
      <ul className="list-disc text-text-secondary text-xl font-sans pl-6">
        {courses.map((course) => (
          <CourseBulletItem
            key={course.courseNumber}
            courseNumber={course.courseNumber}
            courseName={course.courseName}
          />
        ))}
      </ul>
    </div>
  );
}

function YearSection({ yearName, semesters }: Year) {
  return (
    <div>
      <h3 className="grow-0 shrink w-full text-text-primary text-[28px] font-mono font-semibold mt-6 mb-4 px-6">
        {yearName}
      </h3>
      <div className="flex flex-col items-start gap-6 px-6">
        {semesters.map((semester) => (
          <SemesterColumn
            key={semester.semesterName}
            semesterName={semester.semesterName}
            courses={semester.courses}
          />
        ))}
      </div>
    </div>
  );
}

function Coursework() {
  const [courseworkExpanded, setCourseworkExpanded] = useState(false);
  return courseworkExpanded ? (
    <>
      <button
        className="text-text-secondary text-xl font-mono underline hover:cursor-pointer"
        onClick={() => setCourseworkExpanded(false)}
      >
        [Hide Coursework]
      </button>
      <div className="flex flex-col items-start gap-12 w-full">
        {courseworkData.map((year) => (
          <YearSection
            key={year.yearName}
            yearName={year.yearName}
            semesters={year.semesters}
          />
        ))}
      </div>
      <button
        className="text-text-secondary text-xl font-mono underline hover:cursor-pointer mt-4"
        onClick={() => setCourseworkExpanded(false)}
      >
        [Hide Coursework]
      </button>
    </>
  ) : (
    <button
      className="text-text-primary text-xl font-mono underline hover:cursor-pointer"
      onClick={() => setCourseworkExpanded(true)}
    >
      [Show Coursework]
    </button>
  );
}

function CollapsibleSubsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className="flex items-center-safe justify-start gap-0 w-full">
        <h3
          className="grow-0 shrink text-text-primary text-[28px] font-mono font-medium mt-6 mb-4 px-6"
          id="name-explanation"
        >
          {title}
        </h3>
        <button
          className="text-text-secondary text-xl font-mono underline hover:cursor-pointer mt-6 mb-3"
          onClick={() => setExpanded(!expanded)}
        >
          [{expanded ? "Hide" : "Show"}]
        </button>
      </div>
      <div className={`${expanded ? "block" : "hidden"} w-full`}>
        {children}
      </div>
    </>
  );
}

function MiscInfo() {
  return (
    <>
      <CollapsibleSubsection title="Name Explanation">
        <p className="text-text-secondary text-2xl font-sans w-full h-auto px-6">
          In Thailand, people typically have two names that they go by: a formal
          (legal) name and a "nickname". Formal names often have Pali or
          Sanskrit roots and are used in official documents or formal settings.
          However, formal names tend to be long and complex, so most Thai also
          have a "nickname". Unlike western nicknames, Thai nicknames are not
          necessarily derived from the person's formal name (though they can
          be); instead, the person's parents can choose any nickname they
          prefer, and the nickname is used in most day-to-day situations.
        </p>
        <p className="text-text-secondary text-2xl font-sans w-full h-auto px-6 mt-6">
          My formal name is Boonyakorn Thanpanit, but I go by my nickname "Than"
          which is pronounced /tʰan/ (with an aspirated "t").
        </p>
      </CollapsibleSubsection>
      <CollapsibleSubsection title="My Favorite/Recommended X">
        <p className="text-text-secondary text-2xl font-sans w-full h-auto px-6">
          Here are some of my favorite things/recommendations in no particular
          order:
        </p>
        <ul className="list-disc text-text-secondary text-xl font-sans pl-6 mt-3">
          <li>
            Ed Sheeran Song: "Perfect". It is called "the anthem of love" for a
            reason.
          </li>
          <li>
            Chess Openings:{" "}
            <ul className="list-disc text-text-secondary text-xl font-sans pl-6">
              <li>
                For white: London System. Call me boring, but if it works, it
                works.
              </li>
              <li>
                For black: Caro-Kann Defense against 1.e4 (I am a GothamChess
                fan). Dutch Defense or Reversed London against everything else.
              </li>
            </ul>
          </li>
          <li>
            MIT Residence: East Campus, but only if you actually care about the
            community. Otherwise, Maseeh is a good choice thanks to its
            location.
          </li>
          <li>
            Niche Book: QED: The Strange Theory of Light and Matter by Richard
            Feynman. It is a rare popular science book that provides deeper
            insights into the actual physics and mathematics behind the theory.
          </li>
        </ul>
      </CollapsibleSubsection>
    </>
  );
}

function About() {
  return (
    <TooltipProvider>
      <div className="flex flex-col grow shrink w-full bg-bg-primary/50 rounded-xl p-6 space-x-2.5 items-center-safe">
        <h1 className="grow-0 shrink text-accent text-5xl font-mono font-bold mt-8 mb-12">
          About Me
        </h1>
        <Intro />
        <HorizontalLine />

        <h2 className="grow-0 shrink text-accent text-3xl font-mono font-semibold mt-12 mb-6">
          Interests
        </h2>
        <Interests />
        <HorizontalLine />

        <h2 className="grow-0 shrink text-accent text-3xl font-mono font-semibold mt-12 mb-6">
          Teaching and Research
        </h2>
        <TeachingAndResearch />
        <HorizontalLine />

        <h2
          className="grow-0 shrink text-accent text-3xl font-mono font-semibold mt-12 mb-6"
          id="coursework"
        >
          Coursework
        </h2>
        <Coursework />
        <HorizontalLine />

        <h2 className="grow-0 shrink text-accent text-3xl font-mono font-semibold mt-12 mb-6">
          Miscellaneous Information
        </h2>
        <MiscInfo />
      </div>
    </TooltipProvider>
  );
}

export default About;
