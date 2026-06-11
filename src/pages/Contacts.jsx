import styled from "styled-components";

const Page = styled.div`
  padding: 40px;
  color: white;
  background: #0f172a;
  min-height: 100vh;
`;

const ContactList = styled.div`
  max-width: 760px;
  margin: 48px auto 0;
  text-align: left;
  color: #cbd5e1;
`;

const ContactItem = styled.p`
  margin-bottom: 12px;
`;

export default function Contacts() {
  return (
    <Page>
      <h1>Contacts</h1>
      <ContactList>
        <ContactItem>Email: info@example.com</ContactItem>
        <ContactItem>GitHub: github.com/hiinomaru</ContactItem>
        <ContactItem>Location: Online</ContactItem>
      </ContactList>
    </Page>
  );
}
