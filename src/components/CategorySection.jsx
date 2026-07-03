import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const Section = styled.section`
  position: relative;
  padding: 72px 0 24px;
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  width: min(1100px, calc(100% - 48px));
  margin: 0 auto;
`;

const Heading = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 16px;

  .icon {
    font-size: 1.7rem;
    filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.25));
  }

  .text {
    background: ${(props) => props.$gradient};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const Intro = styled.p`
  max-width: 720px;
  color: #cbd5e1;
  line-height: 1.7;
  text-align: center;
  margin: 0 auto 40px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  row-gap: 64px;
  column-gap: 20px;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export default function CategorySection({ category, projects }) {
  return (
    <Section>
      <Container>
        <Reveal>
          <Heading $gradient={category.gradient}>
            <span className="icon">{category.icon}</span>
            <span className="text">{category.title}</span>
          </Heading>
          <Intro>{category.intro}</Intro>
        </Reveal>

        <ProjectsGrid>
          {projects.map((p, i) => (
            <Reveal key={p.uri} delay={i * 80}>
              <ProjectCard
                name={p.name}
                uri={p.uri}
                description={p.description}
                image={p.image}
                videoUrl={p.videoUrl}
                website={p.website}
                slides={p.slides}
                slidesPdf={p.slidesPdf}
                authorName={p.authorName}
                accent={category.gradient}
              />
            </Reveal>
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  );
}
