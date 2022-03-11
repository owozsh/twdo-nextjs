import styled from "styled-components";

export default function Task({ description }: { description: string }) {
  return (
    <TaskContainer>
      <Checkbox></Checkbox>
      <p>{description}</p>
    </TaskContainer>
  );
}

const TaskContainer = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.2rem 0.5rem;
  margin-bottom: 0.1rem;
  border-radius: 5px;

  cursor: default;
  outline: 0px solid #eee;

  transition: background-color 0.1s ease-in-out, transform 0.05s ease-in-out,
    outline 0.1s ease-in-out;

  &:hover {
    background-color: #eee;
    outline: 1px solid #ccc;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Checkbox = styled.div`
  width: 0.8rem;
  height: 0.8rem;

  border-radius: 5px;
  border: 1px solid #000;
  margin-right: 0.5rem;
`;
