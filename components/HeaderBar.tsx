import styled from "styled-components";

import { Plus } from "react-feather";

export default function HeaderBar({ title }: { title: string }) {
  return (
    <HeaderBarContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <ActionButton>
        <Plus />
      </ActionButton>
    </HeaderBarContainer>
  );
}

const HeaderBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 5rem 0;
`;

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

const ActionButton = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  background-color: transparent;

  cursor: default;
  outline: 0px solid #eee;

  transition: background-color 0.1s ease-in-out, transform 0.05s ease-in-out,
    outline 0.1s ease-in-out;

  &:hover {
    background-color: #eee;
    outline: 1px solid #ccc;
  }

  &:active {
    transform: scale(0.9);
  }

  svg {
    width: 2rem;
  }
`;
