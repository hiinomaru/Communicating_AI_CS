import styled from "styled-components";

const Card = styled.article`
  text-align: center;
`;

const Avatar = styled.img`
  width: 100%;
  height: 260px;
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

export default function TeamMemberCard({ name, avatar }) {
  const avatarPath = `${import.meta.env.BASE_URL}${avatar}`;

  return (
    <Card>
      <Avatar src={avatarPath} alt={`${name} avatar`} />
      <Name>{name}</Name>
    </Card>
  );
}