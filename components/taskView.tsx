import styled from "styled-components";

const TaskViewContainer = styled.main`
  width: 40%;
  max-width: 500px;
  height: 100%;
`;

export default function TaskView({ children }: { children: JSX.Element }) {
  return <TaskViewContainer>{children}</TaskViewContainer>;
}
