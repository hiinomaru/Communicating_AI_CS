import styled from "styled-components";

const Page = styled.div`
  padding: 40px;
  color: white;
  background: #0f172a;
  min-height: 100vh;
`;

const Content = styled.section`
  max-width: 760px;
  margin: 48px auto 0;
  text-align: left;
  line-height: 1.7;
  color: #cbd5e1;
`;

export default function About() {
  return (
    <Page>
      <h1>About</h1>
      <Content>
        <p>
          Communicating AI & CS showcases projects built around artificial
          intelligence, computer science, and practical problem solving.
        </p>
        <p>
          The goal is to present projects, team members, and contact details in
          a simple, navigable interface.
        </p>
      </Content>
    </Page>
  );
}
