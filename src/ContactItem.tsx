import "./index.css";

function ContactItem({
  children,
  icon,
  href,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <div className="flex items-center space-x-4">
      <div className="text-3xl text-accent">{icon}</div>
      <div className="text-2xl text-text-primary">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          {children}
        </a>
      </div>
    </div>
  );
}

export default ContactItem;
