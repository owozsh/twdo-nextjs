import { Sun, Calendar, Package } from "react-feather";
import styled from "styled-components";

import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <nav>
        <ul>
          <li>
            <SidebarItem
              label="today"
              icon={<Sun />}
              route="/today"
            ></SidebarItem>
          </li>
          <li>
            <SidebarItem
              label="upcoming"
              icon={<Calendar />}
              route="/upcoming"
            ></SidebarItem>
          </li>
          <li>
            <SidebarItem
              label="someday"
              icon={<Package />}
              route="/someday"
            ></SidebarItem>
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
