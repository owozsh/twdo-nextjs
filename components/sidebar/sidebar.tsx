import { Sun, Calendar, Package } from "react-feather";
import styled from "styled-components";

import SidebarButton from "./sidebarButton";

const SidebarContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 1rem;
  flex: 1;

  padding-top: 11.5rem;
  margin-right: 1rem;
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <nav>
        <ul>
          <li>
            <SidebarButton
              label="today"
              icon={<Sun />}
              route="today"
            ></SidebarButton>
          </li>
          <li>
            <SidebarButton
              label="up-next"
              icon={<Calendar />}
              route="up-next"
            ></SidebarButton>
          </li>
          <li>
            <SidebarButton
              label="someday"
              icon={<Package />}
              route="someday"
            ></SidebarButton>
          </li>
        </ul>
      </nav>
    </SidebarContainer>
  );
}
