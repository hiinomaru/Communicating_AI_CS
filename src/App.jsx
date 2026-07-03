import { useCallback, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Project";
import MatrixRain from "./components/MatrixRain";
import { useKonamiCode } from "./hooks/useKonamiCode";

export default function App() {
  const [matrixActive, setMatrixActive] = useState(false);

  const unlockMatrix = useCallback(() => setMatrixActive(true), []);
  useKonamiCode(unlockMatrix);

  useEffect(() => {
    window.addEventListener("spy-emoji-click", unlockMatrix);
    return () => window.removeEventListener("spy-emoji-click", unlockMatrix);
  }, [unlockMatrix]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {matrixActive && <MatrixRain onDone={() => setMatrixActive(false)} />}
    </>
  );
}
