import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  margin-top: 3rem;
  padding-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
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
