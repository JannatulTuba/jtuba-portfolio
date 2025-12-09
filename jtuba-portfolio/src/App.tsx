import React, { useState } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";

type Page = "home" | "about" | "skills" | "projects" | "gallery" | "contact";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "gallery":
        return <Gallery />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">JT<span className="accent">.</span></div>
        <nav className="nav">
          <button onClick={() => setCurrentPage("home")}>Home</button>
          <button onClick={() => setCurrentPage("about")}>About</button>
          <button onClick={() => setCurrentPage("skills")}>Skills</button>
          <button onClick={() => setCurrentPage("projects")}>Projects</button>
          <button onClick={() => setCurrentPage("gallery")}>Gallery</button>
          <button onClick={() => setCurrentPage("contact")}>Contact</button>
        </nav>
      </header>

      <main className="main">
        {renderPage()}

       
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Jannatul Tuba. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
