import ProjectCard from "../components/ProjectCard";
import TeamGrid from "../components/TeamGrid";
import { projects } from "../data/projects";
import { teamMembers } from "../data/teamMembers";
import styled from "styled-components";

const Page = styled.div`
  color: white;
  background: #0f172a;
  min-height: 100vh;
`;

const ProjectsGrid = styled.div`
  margin: 3rem;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const AboutSection = styled.section`
  padding: 40px 40px 0;
`;

const AboutContent = styled.div`
  max-width: 760px;
  margin: 24px auto 0;
  text-align: left;
  line-height: 1.7;
  color: #cbd5e1;

  p + p {
    margin-top: 16px;
  }
`;

export default function Home() {
  return (
    <Page id="top">
      <AboutSection id="about">
        <h1>I spy with my little AI</h1>
        <AboutContent>
          <p>
            Communicating AI & CS showcases projects built around artificial
            intelligence, computer science, and practical problem solving.
          </p>
          <p>
            The goal is to present projects and team members in a simple,
            navigable interface.
          </p>
        </AboutContent>
      </AboutSection>

      <ProjectsGrid id="projects">
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            name={p.name}
            uri={p.uri}
            description={p.description}
            image={p.image}
            videoUrl={p.videoUrl}
            authorName={p.authorName}
          />
        ))}
      </ProjectsGrid>

      <TeamGrid id="team" members={teamMembers} />
    </Page>
  );
}
