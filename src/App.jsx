import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import Project from "./routes/Project.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<About />} />
      <Route path="/awards" element={<Contact />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
}

export default App;
