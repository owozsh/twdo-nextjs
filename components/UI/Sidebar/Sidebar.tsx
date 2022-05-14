import { Sun, Calendar, Package } from "react-feather";
import styled from "styled-components";

import SidebarButton from "./SidebarItem";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <nav>
        <ul>
          <li>
            <SidebarButton
              label="today"
              icon={<Sun />}
              route="/today"
            ></SidebarButton>
          </li>
          <li>
            <SidebarButton
              label="upcoming"
              icon={<Calendar />}
              route="/upcoming"
            ></SidebarButton>
          </li>
          <li>
            <SidebarButton
              label="someday"
              icon={<Package />}
              route="/someday"
            ></SidebarButton>
          </li>
        </ul>
      </nav>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;

  margin-top: 24rem;
  margin-right: 2rem;
`;
