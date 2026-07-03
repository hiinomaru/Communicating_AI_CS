import styled, { keyframes } from "styled-components";

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const bounce = keyframes`
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, 10px); }
`;

const HeroSection = styled.section`
  position: relative;
  height: 65vh;
  min-height: 480px;
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 0 auto;
  padding: 0 40px;
  text-align: center;
  opacity: ${(props) => props.$opacity};
`;

const Eyebrow = styled.p`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #94a3b8;
  margin: 0 0 12px;
`;

const HeroTitle = styled.h1`
  background: linear-gradient(90deg, #818cf8, #ec4899, #22d3ee, #818cf8);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${gradientShift} 8s ease infinite;
`;

const AboutContent = styled.div`
  margin: 60px auto 0;
  line-height: 1.7;
  color: #cbd5e1;

  p + p {
    margin-top: 16px;
  }
`;

const ScrollCue = styled.button`
  position: absolute;
  left: 50%;
  bottom: 32px;
  transform: translate(-50%, 0);
  z-index: 1;
  background: none;
  border: none;
  color: #94a3b8;
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
  opacity: ${(props) => props.$opacity};
  animation: ${bounce} 1.8s ease-in-out infinite;
  transition: color 0.2s ease;

  &:hover {
    color: #e2e8f0;
  }
`;

export default function Hero({ fade = 1 }) {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroSection id="about">
      <Content $opacity={fade}>
        <Eyebrow>Communicating AI &amp; CS</Eyebrow>
        <HeroTitle>I spy with my little AI</HeroTitle>
        <AboutContent>
          <p>
            Communicating AI &amp; CS showcases projects built around artificial
            intelligence, computer science, and practical problem solving.
          </p>
          <p>
            The goal is to present projects and team members in a simple,
            navigable interface.
          </p>
        </AboutContent>
      </Content>
      <ScrollCue
        onClick={scrollToProjects}
        $opacity={fade}
        aria-label="Scroll to projects"
      >
        ↓
      </ScrollCue>
    </HeroSection>
  );
}
