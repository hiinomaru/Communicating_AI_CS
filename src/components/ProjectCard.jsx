import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: block;
  padding: 20px;
  background: #1e293b;
  border-radius: 12px;
  color: white;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const ProjectName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const ProjectDescription = styled.p`
  margin-top: 8px;
  font-size: 0.875rem;
  color: #cbd5e1;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const onCardTitleClick = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const ProjectCard = ({ name, description, url, image }) => {
  return (
    <CardContainer>
      {image ? <ProjectImage src={image} alt={name} /> : null}
      <ProjectName onClick={() => onCardTitleClick(url)}>{name}</ProjectName>
      <ProjectDescription>{description}</ProjectDescription>
    </CardContainer>
  );
};

export default ProjectCard;
