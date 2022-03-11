import Link from "next/link";
import { ReactElement } from "react";

import styled from "styled-components";

export default function SidebarButton({
  label,
  icon,
  route,
}: {
  label: string;
  icon: ReactElement | string;
  route: string;
}) {
  return (
    <Link href={route} passHref>
      <SidebarButtonContainer>
        <Icon>{icon}</Icon>
        <Label>{label}</Label>
      </SidebarButtonContainer>
    </Link>
  );
}

const SidebarButtonContainer = styled.div`
  width: 10rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  box-sizing: border-box;

  cursor: default;
  outline: 0px solid #eee;

  transition: background-color 0.1s ease-in-out, transform 0.05s ease-in-out,
    outline 0.1s ease-in-out;

  &:hover {
    background-color: #eee;
    outline: 1px solid #ccc;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Label = styled.p`
  font-weight: 600;

  * {
    width: 2px;
  }
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 0.8rem;

  svg {
    width: 1rem;
  }
`;
