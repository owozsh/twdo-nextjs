import styled from "styled-components";

const HeaderBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 5rem;
`;

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

export default function HeaderBar({ title }: { title: string }) {
  return (
    <HeaderBarContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderBarContainer>
  );
}
