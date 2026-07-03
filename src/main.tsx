import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import Resume from "./pages/Resume.tsx";
import About from "./pages/About.tsx";
import ErrorPage from "./Error.tsx";
import Notes from "./pages/Notes.tsx";
import NotePage from "./pages/NotePage.tsx";
import Projects from "./pages/Projects.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/note/:noteId" element={<NotePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
