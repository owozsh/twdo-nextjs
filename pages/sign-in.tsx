import Link from "next/link";
import styled from "styled-components";

export default function SignIn() {
  return (
    <AuthLayout>
      <SignUpContainer>
        <Title>login</Title>

        <TextInput placeholder="email address"></TextInput>
        <TextInput placeholder="password" type="password"></TextInput>

        <Button>login</Button>

        <Subtext>
          <Link href="sign-in">forget your password?</Link>
        </Subtext>
        <Subtext>
          no account? <Link href="sign-up">create one</Link>
        </Subtext>
      </SignUpContainer>
    </AuthLayout>
  );
}

const AuthLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 90%;
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 300px;

  * {
    margin-bottom: 1rem;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.3rem;
`;

const TextInput = styled.input`
  border: 1px solid #000;
  height: 1rem;
  width: 100%;

  padding: 1.4rem 1rem;

  background-color: transparent;
  border-radius: 5px;

  font-size: 0.9rem;

  ::placeholder {
    color: #000;
    font-family: Nunito;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000;
  border-radius: 5px;
  border: none;
  color: #fff;

  cursor: pointer;

  height: 1rem;
  width: 100%;

  font-size: 1rem;

  padding: 1.5rem 1rem;
`;

const Subtext = styled.p`
  font-size: 0.85rem;
  margin-top: 0.5rem;

  a {
    color: #0038ff;
  }
`;
