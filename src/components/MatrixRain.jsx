import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useMatrixRainCanvas } from "../hooks/useMatrixRainCanvas";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  cursor: pointer;
  animation: ${fadeIn} 0.4s ease;
`;

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

const Banner = styled.div`
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  color: #22d3ee;
  font-family: ui-monospace, Consolas, monospace;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-shadow: 0 0 8px rgba(34, 211, 238, 0.8);
  padding: 8px 16px;
  border: 1px solid rgba(34, 211, 238, 0.4);
  border-radius: 8px;
  background: rgba(15, 23, 42, 0.6);
`;

export default function MatrixRain({ onDone, duration = 7000 }) {
  const canvasRef = useRef(null);

  useMatrixRainCanvas(canvasRef);

  useEffect(() => {
    const timeout = setTimeout(() => onDone(), duration);
    const handleKey = (e) => {
      if (e.key === "Escape") onDone();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("keydown", handleKey);
    };
  }, [onDone, duration]);

  return (
    <Overlay onClick={onDone}>
      <Canvas ref={canvasRef} />
      <Banner>🕵️ I spy with my little AI... click or press Esc to exit</Banner>
    </Overlay>
  );
}
