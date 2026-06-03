import "./index.css";
import ContactItem from "./components/ContactItem.tsx";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Contact() {
  return (
    <div className="flex flex-col grow shrink w-full bg-bg-primary/50 rounded-xl p-6 space-x-2.5">
      <div className="flex grow-0 shrink w-full flex-col">
        <p className="text-text-secondary text-3xl font-sans italic">
          Interested in collaborating, research, embedded systems, or just
          talking about engineering projects?
        </p>
        <p className="text-text-primary text-4xl font-sans font-semibold mt-20">
          Feel free to reach out.
        </p>
      </div>
      <div className="flex grow shrink w-full flex-col space-y-12 mt-16">
        <ContactItem
          icon={<HiOutlineEnvelope />}
          href="mailto:thanpa28@mit.edu"
        >
          thanpa28@mit.edu
        </ContactItem>
        <ContactItem
          icon={<FaGithub />}
          href="https://github.com/polya2005"
        >
          github.com/polya2005
        </ContactItem>
        <ContactItem
          icon={<FaLinkedin />}
          href="https://www.linkedin.com/in/than-thanpanit/"
        >
          linkedin.com/in/than-thanpanit/
        </ContactItem>
      </div>
    </div>
  );
}

export default Contact;
