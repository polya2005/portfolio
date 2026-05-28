import "./index.css";
import { useNavigate } from "react-router";

function QuickLink({
  children,
  to,
  icon,
  external = false,
}: {
  children: React.ReactNode;
  to: string;
  icon?: React.ReactNode;
  external?: boolean;
}) {
  const navigate = useNavigate();
  return (
    <button
      className="flex items-center bg-bg-elevated border-border-primary border-2 text-text-primary text-4xl font-mono w-full h-20 px-6 rounded-2xl  hover:bg-accent hover:text-bg-primary hover:cursor-pointer transition-colors"
      onClick={() => {
        if (external) {
          window.open(to, "_blank");
        } else {
          navigate(to);
        }
      }}
    >
      {icon && <div className="text-4xl mr-4">{icon}</div>}
      <div className="grow shrink text-center">
        {children}
      </div>
    </button>
  );
}

export default QuickLink;
