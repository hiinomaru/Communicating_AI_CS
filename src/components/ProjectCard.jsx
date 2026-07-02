import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { resolveAssetPath } from "../utils/assetPath";

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

const ProjectAuthor = styled.p`
  margin-top: 4px;
  font-size: 0.8rem;
  color: #94a3b8;
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

const ProjectVideoThumbWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const PlayButtonOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  &::after {
    content: "";
    width: 0;
    height: 0;
    margin-left: 4px;
    border-top: 0.7rem solid transparent;
    border-bottom: 0.7rem solid transparent;
    border-left: 1.1rem solid white;
  }
`;

const getYoutubeVideoId = (videoUrl) => videoUrl.split("/embed/").pop();

const ProjectCard = ({ name, description, uri, image, videoUrl, authorName }) => {
  const navigate = useNavigate();

  const onCardTitleClick = (uri) => {
    navigate(`/projects/${uri}`);
  };

  return (
    <CardContainer>
      {videoUrl ? (
        <ProjectVideoThumbWrapper onClick={() => onCardTitleClick(uri)}>
          <ProjectImage
            src={`https://img.youtube.com/vi/${getYoutubeVideoId(videoUrl)}/hqdefault.jpg`}
            alt={name}
          />
          <PlayButtonOverlay />
        </ProjectVideoThumbWrapper>
      ) : image ? (
        <ProjectImage src={resolveAssetPath(image)} alt={name} />
      ) : null}
      <ProjectName onClick={() => onCardTitleClick(uri)}>{name}</ProjectName>
      {authorName && <ProjectAuthor>By {authorName}</ProjectAuthor>}
      <ProjectDescription>{description}</ProjectDescription>
    </CardContainer>
  );
};

export default ProjectCard;
