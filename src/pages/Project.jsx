import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { projects } from "../data/projects";
import { resolveAssetPath } from "../utils/assetPath";

const Page = styled.div`
  padding: 40px;
  color: white;
  background: #0f172a;
  min-height: 100vh;
`;

const ProjectName = styled.h1`
  margin-bottom: 16px;
`;

const ProjectAuthor = styled.p`
  margin-bottom: 16px;
  color: #94a3b8;
  font-size: 0.95rem;
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

const ProjectVideoContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  margin-top: 3rem;
  margin-bottom: 24px;
  background: #000;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const ProjectSlidesFallback = styled.a`
  display: inline-block;
  margin-top: 8px;
  color: #94a3b8;
  font-size: 0.85rem;

  &:hover {
    color: #cbd5e1;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 24px 0;
  border-radius: 8px;
  overflow: hidden;
  background: #1e293b;
`;

const CarouselImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 44rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: opacity 0.3s ease;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(59, 130, 246, 0.8);
  border: none;
  color: white;
  font-size: 24px;
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 4px;
  z-index: 10;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(37, 99, 235, 0.9);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${(props) => (props.left ? "left: 16px;" : "right: 16px;")}
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  background: #1e293b;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${(props) => (props.active ? "#3b82f6" : "#64748b")};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #3b82f6;
  }
`;

const SlideCounter = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  z-index: 10;
`;

export default function Projects() {
  const { id } = useParams();
  const project = projects.find((p) => p.uri === id);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (project) document.title = `${project.name} — I spy with my little AI`;
    return () => {
      document.title = "I spy with my little AI";
    };
  }, [project]);

  const handleNextSlide = () => {
    if (project?.slides && project.slides.length > 0) {
      setCurrentSlide((prev) => Math.min(prev + 1, project.slides.length - 1));
    }
  };

  const handlePrevSlide = () => {
    if (project?.slides && project.slides.length > 0) {
      setCurrentSlide((prev) => Math.max(prev - 1, 0));
    }
  };

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (project?.slides && project.slides.length > 0) {
        if (e.key === "ArrowLeft") {
          handlePrevSlide();
        } else if (e.key === "ArrowRight") {
          handleNextSlide();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, project?.slides, handleNextSlide, handlePrevSlide]);

  if (!project) {
    return (
      <Page>
        <ProjectName>Project not found</ProjectName>
      </Page>
    );
  }

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Page>
      <ProjectName>{project.name}</ProjectName>
      {project.authorName && <ProjectAuthor>By {project.authorName}</ProjectAuthor>}
      <ProjectDescription>{project.description}</ProjectDescription>

      {project.text && <ProjectText>{project.text}</ProjectText>}

      {project.image && (
        <ProjectImage src={resolveAssetPath(project.image)} alt={project.name} />
      )}

      {project.videoUrl && (
        <ProjectVideoContainer>
          <iframe
            src={project.videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </ProjectVideoContainer>
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

      {project.slides && project.slides.length > 0 && (
        <div>
          <CarouselContainer>
            <CarouselImageWrapper>
              <CarouselImage
                src={resolveAssetPath(project.slides[currentSlide])}
                alt={`Slide ${currentSlide + 1}`}
              />
              <SlideCounter>
                {currentSlide + 1} / {project.slides.length}
              </SlideCounter>
              {project.slides.length > 1 && (
                <>
                  <NavButton
                    left
                    onClick={handlePrevSlide}
                    disabled={currentSlide === 0}
                    aria-label="Previous slide"
                  >
                    ❮
                  </NavButton>
                  <NavButton
                    onClick={handleNextSlide}
                    disabled={currentSlide === project.slides.length - 1}
                    aria-label="Next slide"
                  >
                    ❯
                  </NavButton>
                </>
              )}
            </CarouselImageWrapper>
          </CarouselContainer>

          {project.slides.length > 1 && (
            <DotsContainer>
              {project.slides.map((_, index) => (
                <Dot
                  key={index}
                  active={index === currentSlide}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </DotsContainer>
          )}

          {project.slidesPdf && (
            <ProjectSlidesFallback
              href={resolveAssetPath(project.slidesPdf)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download slides (PDF) ↗
            </ProjectSlidesFallback>
          )}
        </div>
      )}
    </Page>
  );
}
