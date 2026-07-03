import { styled } from "styled-components";

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding: 24px 40px;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  color: white;

  @media (max-width: 480px) {
    padding: 16px 20px;
    gap: 8px;
  }
`;

const StyledTitle = styled.a`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  background: linear-gradient(90deg, #818cf8, #ec4899, #22d3ee);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1.25);
  }
`;

const SpyEmoji = styled.span`
  cursor: pointer;
  display: inline-block;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.3) rotate(-8deg);
  }
`;

const StyledNavigationBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding-right: 60px;

  @media (max-width: 480px) {
    gap: 16px;
    padding-right: 0;
  }
`;

const StyledLink = styled.a`
  position: relative;
  font-size: 18px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  display: inline-block;
  padding-bottom: 2px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #818cf8, #ec4899);
    transition: width 0.25s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const base = import.meta.env.BASE_URL;

const navigationLinks = [
  { name: "About", hash: "about" },
  { name: "Projects", hash: "projects" },
  { name: "Team", hash: "team" },
];

const handleSpyClick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  window.dispatchEvent(new Event("spy-emoji-click"));
};

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle href={base}>
        I{" "}
        <SpyEmoji onClick={handleSpyClick} title="👀 psst...">
          🕵️
        </SpyEmoji>{" "}
        with my little AI
      </StyledTitle>
      <StyledNavigationBar>
        {navigationLinks.map((link) => (
          <StyledLink key={link.name} href={`${base}#${link.hash}`}>
            {link.name}
          </StyledLink>
        ))}
      </StyledNavigationBar>
    </StyledHeader>
  );
};

export default Header;
