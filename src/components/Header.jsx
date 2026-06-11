import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 40px;
  background: #0f172a;
`;

const StyledTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const StyledNavigationBar = styled.div`
  display: flex;
  gap: 12px;
`;

const StyledLink = styled.a`
  font-size: 18px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const navigationLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Contacts", url: "/contacts" },
];

const Header = () => {
  const navigate = useNavigate();

  const handleLinkClick = (url) => {
    console.log(`Navigating to ${url}`);
    navigate(url);
  };

  return (
    <StyledHeader>
      <StyledTitle>AI&CS Projects</StyledTitle>
      <StyledNavigationBar>
        {navigationLinks.map((link) => (
          <StyledLink key={link.name} onClick={() => handleLinkClick(link.url)}>
            {link.name}
          </StyledLink>
        ))}
      </StyledNavigationBar>
    </StyledHeader>
  );
};

export default Header;
