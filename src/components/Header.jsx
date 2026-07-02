import { styled } from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding: 40px;
  background: #0f172a;

  @media (max-width: 480px) {
    padding: 20px;
    gap: 8px;
  }
`;

const StyledTitle = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
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
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  display: inline-block;
  &:hover {
    transform: scale(1.1);
  }
`;

const base = import.meta.env.BASE_URL;

const navigationLinks = [
  { name: "About", hash: "about" },
  { name: "Projects", hash: "projects" },
  { name: "Team", hash: "team" },
];

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle href={base}>AI&CS Projects</StyledTitle>
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
