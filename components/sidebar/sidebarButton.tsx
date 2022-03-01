import router from "next/router";
import { ReactElement } from "react";

import styled from "styled-components";

const SidebarButtonContainer = styled.div`
  width: 10rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  box-sizing: border-box;

  cursor: pointer;

  transition-timing-function: cubic-bezier();
  transition-duration: 0.2s;

  &:hover {
    background-color: #ddd;
  }
`;

const Label = styled.a`
  font-weight: bold;

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

export default function SidebarButton({
  label,
  icon,
  route,
}: {
  label: string;
  icon: ReactElement | string;
  route: string;
}) {
  const navigate = () => {
    router.push(route);
  };

  return (
    <SidebarButtonContainer onClick={navigate}>
      <Icon>{icon}</Icon>
      <Label>{label}</Label>
    </SidebarButtonContainer>
  );
}
