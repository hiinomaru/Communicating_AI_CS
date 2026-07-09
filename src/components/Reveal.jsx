import styled from "styled-components";
import { useReveal } from "../hooks/useReveal";

const RevealBox = styled.div`
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transform: translateY(${(props) => (props.$visible ? "0" : "24px")});
  transition:
    opacity 0.6s ease ${(props) => props.$delay}ms,
    transform 0.6s ease ${(props) => props.$delay}ms;
`;

export default function Reveal({ children, delay = 0, as, className }) {
  const [ref, visible] = useReveal();

  return (
    <RevealBox ref={ref} $visible={visible} $delay={delay} as={as} className={className}>
      {children}
    </RevealBox>
  );
}
