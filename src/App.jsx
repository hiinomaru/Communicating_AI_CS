import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";
import styled from "styled-components";

const ProjectsGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export default function App() {
  return (
    <div
      style={{
        padding: 40,
        color: "white",
        background: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <Header />
      <h1>AI&CS Projects</h1>

      <ProjectsGrid>
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            name={p.name}
            url={p.url}
            description={p.description}
            image={p.image}
          />
        ))}
      </ProjectsGrid>
      <Footer />
    </div>
  );
}
