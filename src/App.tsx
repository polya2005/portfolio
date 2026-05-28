import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.tsx";

import "./index.css";

function App() {
  return (
    <div
      className="flex flex-col p-6 bg-bg-secondary min-h-screen space-y-2.5"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "20px 20px, 20px 20px",
      }}
    >
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
