import { useParams } from "react-router-dom";
import styled from "styled-components";
import { projects } from "../data/projects";

const Page = styled.div`
  padding: 40px;
  color: white;
  background: #0f172a;
  min-height: 100vh;
`;

const ProjectName = styled.h1`
  margin-bottom: 16px;
`;

const ProjectDescription = styled.p`
  margin-bottom: 24px;
  color: #cbd5e1;
`;

const ProjectText = styled.p`
  line-height: 1.7;
  color: #cbd5e1;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 24px;
`;

const ProjectWebsiteButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  margin-top: 24px;
  transition: background 0.2s ease;

  &:hover {
    background: #2563eb;
  }
`;

const ProjectVideo = styled.video`
  width: 100%;
  max-height: 24rem;
  border-radius: 8px;
  margin-bottom: 24px;
  background: #000;
`;

export default function Projects() {
  const { id } = useParams();
  const project = projects.find((p) => p.uri === id);

  if (!project) {
    return (
      <Page>
        <ProjectName>Project not found</ProjectName>
      </Page>
    );
  }

  return (
    <Page>
      <ProjectName>{project.name}</ProjectName>
      <ProjectDescription>{project.description}</ProjectDescription>

      {project.text && <ProjectText>{project.text}</ProjectText>}

      {project.image && <ProjectImage src={project.image} alt={project.name} />}

      {project.video && (
        <ProjectVideo controls poster={project.image}>
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </ProjectVideo>
      )}

      {project.website && (
        <ProjectWebsiteButton
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Website
        </ProjectWebsiteButton>
      )}
      {project.videoUrl && (
        <ProjectVideo controls>
          <source src={project.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </ProjectVideo>
      )}
    </Page>
  );
}
