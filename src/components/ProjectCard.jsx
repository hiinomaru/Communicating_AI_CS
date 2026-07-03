import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { resolveAssetPath } from "../utils/assetPath";

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  background: #1e293b;
  border-radius: 14px;
  color: white;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.06);
  cursor: ${(props) => (props.$interactive ? "pointer" : "default")};
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    background: ${(props) => props.$accent || "transparent"};
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.25s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 32px -12px rgba(0, 0, 0, 0.55);

    &::before {
      opacity: 1;
    }
  }
`;

const ProjectName = styled.span`
  font-size: 1rem;
  font-weight: 600;

  ${CardContainer}[data-interactive="true"]:hover & {
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
  flex: 1;
`;

const ImageClip = styled.div`
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 12px;
  flex-shrink: 0;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;

  ${CardContainer}:hover & {
    transform: scale(1.06);
  }
`;

const ProjectVideoThumbWrapper = styled.div`
  position: relative;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 10rem;
  display: block;
  border: none;
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

const ProjectCard = ({
  name,
  description,
  uri,
  image,
  videoUrl,
  website,
  slides,
  slidesPdf,
  authorName,
  accent,
}) => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const hasPresentation = Boolean(slides?.length) || Boolean(slidesPdf);
  const hasWebsite = !hasPresentation && Boolean(website);
  const hasVideo = !hasPresentation && !hasWebsite && Boolean(videoUrl);
  const isInteractive = hasPresentation || hasWebsite || (hasVideo && !isPlaying);

  const handleCardClick = () => {
    if (hasPresentation) {
      navigate(`/projects/${uri}`);
    } else if (hasVideo && !isPlaying) {
      setIsPlaying(true);
    }
  };

  const containerProps = hasWebsite
    ? { as: "a", href: website, target: "_blank", rel: "noopener noreferrer" }
    : { onClick: handleCardClick };

  return (
    <CardContainer
      $accent={accent}
      $interactive={isInteractive}
      data-interactive={isInteractive}
      {...containerProps}
    >
      {hasVideo && isPlaying ? (
        <ImageClip>
          <VideoFrame
            src={`${videoUrl}?autoplay=1`}
            title={name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onClick={(e) => e.stopPropagation()}
          />
        </ImageClip>
      ) : videoUrl ? (
        <ImageClip>
          <ProjectVideoThumbWrapper>
            <ProjectImage
              src={`https://img.youtube.com/vi/${getYoutubeVideoId(videoUrl)}/hqdefault.jpg`}
              alt={name}
            />
            <PlayButtonOverlay />
          </ProjectVideoThumbWrapper>
        </ImageClip>
      ) : image ? (
        <ImageClip>
          <ProjectImage src={resolveAssetPath(image)} alt={name} />
        </ImageClip>
      ) : null}
      <ProjectName>{name}</ProjectName>
      {authorName && <ProjectAuthor>By {authorName}</ProjectAuthor>}
      <ProjectDescription>{description}</ProjectDescription>
    </CardContainer>
  );
};

export default ProjectCard;
