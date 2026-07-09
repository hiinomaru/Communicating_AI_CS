import { useEffect, useRef, useState } from "react";
import CategorySection from "../components/CategorySection";
import TeamGrid from "../components/TeamGrid";
import Hero from "../components/Hero";
import { projects } from "../data/projects";
import { categories } from "../data/categories";
import { teamMembers } from "../data/teamMembers";
import { useMatrixRainCanvas } from "../hooks/useMatrixRainCanvas";
import styled, { keyframes } from "styled-components";

const drift = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, -30px) scale(1.1); }
`;

const Page = styled.div`
  position: relative;
  color: white;
  background: #0f172a;
  min-height: 100vh;
`;

const CanvasBg = styled.canvas`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const ProjectsWrap = styled.div`
  position: relative;
  z-index: 1;
  background: rgba(15, 23, 42, ${(props) => props.$opacity});
`;

const Blob = styled.div`
  position: fixed;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.18;
  pointer-events: none;
  z-index: 0;
  animation: ${drift} 16s ease-in-out infinite;

  &.one {
    top: -120px;
    left: -120px;
    background: #6366f1;
  }
  &.two {
    top: 20%;
    right: -160px;
    background: #ec4899;
    animation-delay: -6s;
  }
  &.three {
    bottom: -160px;
    left: 30%;
    background: #22d3ee;
    animation-delay: -11s;
  }
`;

export default function Home() {
  const canvasRef = useRef(null);
  const [heroFade, setHeroFade] = useState(1);
  const [projectsFade, setProjectsFade] = useState(0);

  useMatrixRainCanvas(canvasRef);

  useEffect(() => {
    const handleScroll = () => {
      const progress = window.scrollY / window.innerHeight;
      setHeroFade(Math.max(0, 1 - progress * 2));
      setProjectsFade(Math.min(0.88, Math.max(0, (progress - 0.25) * 2)));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const grouped = categories.map((category) => ({
    category,
    items: projects.filter((p) => p.category === category.key),
  }));

  return (
    <Page id="top">
      <CanvasBg ref={canvasRef} />
      <Blob className="one" />
      <Blob className="two" />
      <Blob className="three" />

      <Hero fade={heroFade} />

      <ProjectsWrap id="projects" $opacity={projectsFade}>
        {grouped.map(({ category, items }) => (
          <CategorySection key={category.key} category={category} projects={items} />
        ))}
      </ProjectsWrap>

      <TeamGrid id="team" members={teamMembers} />
    </Page>
  );
}
