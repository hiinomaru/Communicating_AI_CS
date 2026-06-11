import styled from "styled-components";

const FooterContainer = styled.footer`
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  color: #08060d;
  background-color: white;
`;

const FooterText = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© {new Date().getFullYear()} AI&CS Projects</FooterText>
    </FooterContainer>
  );
};

export default Footer;
