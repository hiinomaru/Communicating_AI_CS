import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Project";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<Projects />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
