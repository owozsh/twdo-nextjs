import styled from "styled-components";

export default function TaskView({ children }: { children?: JSX.Element[] }) {
  return <TaskViewContainer>{children}</TaskViewContainer>;
}

const TaskViewContainer = styled.main`
  width: 100%;
  max-width: 500px;
  height: 100%;
`;
