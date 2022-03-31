import styled from "styled-components";
import Sidebar from "./Sidebar/Sidebar";
import TaskView from "./TaskView";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <LayoutContainer>
      <Sidebar />
      <TaskView>{children}</TaskView>
      <Spacer></Spacer>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Spacer = styled.div`
  flex: 1;
`;
