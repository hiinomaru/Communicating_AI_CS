import styled from "styled-components";

const FooterContainer = styled.footer`
  position: relative;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  color: #94a3b8;
  background-color: #0f172a;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, #818cf8, #ec4899, #22d3ee);
    opacity: 0.6;
  }
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterHint = styled.p`
  margin: 6px 0 0;
  font-size: 0.7rem;
  color: #334155;
  cursor: default;

  &:hover {
    color: #64748b;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© {new Date().getFullYear()} I spy with my little AI</FooterText>
      <FooterHint title="↑ ↑ ↓ ↓ ← → ← → B A">psst, try the Konami code</FooterHint>
    </FooterContainer>
  );
};

export default Footer;
