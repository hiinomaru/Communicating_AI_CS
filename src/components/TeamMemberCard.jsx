import styled from "styled-components";

const Card = styled.article`
  text-align: center;
`;

const Avatar = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 5px;
  display: block;
  margin-bottom: 12px;
`;

const Name = styled.h3`
  margin: 0;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
`;

const Role = styled.p`
  margin: 7px 0 0;
  color: #ffffff;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export default function TeamMemberCard({ name, role, avatar }) {
  const avatarPath = `${import.meta.env.BASE_URL}${avatar}`;

  return (
    <Card>
      <Avatar src={avatarPath} alt={`${name} avatar`} />
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Card>
  );
}