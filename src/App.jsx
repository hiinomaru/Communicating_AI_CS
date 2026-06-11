import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Project";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
