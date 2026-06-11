import ProjectCard from "../components/ProjectCard";
import TeamGrid from "../components/TeamGrid";
import { projects } from "../data/projects";
import { teamMembers } from "../data/teamMembers";
import styled from "styled-components";

const Page = styled.div`
  padding: 40px;
  color: white;
  background: #0f172a;
  min-height: 100vh;
`;

const ProjectsGrid = styled.div`
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

export default function Home() {
  return (
    <Page>
      <h1>AI&CS Projects</h1>

      <ProjectsGrid>
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            name={p.name}
            uri={p.uri}
            description={p.description}
            image={p.image}
          />
        ))}
      </ProjectsGrid>

      <TeamGrid members={teamMembers} />
    </Page>
  );
}
