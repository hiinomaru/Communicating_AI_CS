import styled from "styled-components";
import TeamMemberCard from "./TeamMemberCard";

const Section = styled.section`
  padding: 72px 0;
  background: #0f172a;
`;

const Container = styled.div`
  width: min(1000px, calc(100% - 40px));
  margin: 0 auto;
`;

const Title = styled.h2`
  max-width: 520px;
  margin: 0 auto 44px;
  color: #ffffff;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.25;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 38px 24px;

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

export default function TeamGrid({ id, members }) {
  return (
    <Section id={id}>
      <Container>
        <Title>Meet the Team Behind Communicating AI & CS</Title>

        <Grid>
          {members.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              avatar={member.avatar}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}