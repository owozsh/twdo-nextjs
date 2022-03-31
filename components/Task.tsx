import styled from "styled-components";
import { MouseEventHandler, useState } from "react";

export default function Task({ description }: { description: string }) {
  const [editMode, setEditMode] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const toggleEditMode = () => setEditMode(!editMode);

  const toggleIsComplete = (e: any) => {
    e.stopPropagation();
    setIsComplete(!isComplete);
  };

  return (
    <TaskContainer editMode={editMode} onClick={toggleEditMode}>
      <Checkbox
        editMode={editMode}
        isComplete={isComplete}
        onClick={(e) => toggleIsComplete(e)}
      ></Checkbox>
      <p>{description}</p>
    </TaskContainer>
  );
}

const TaskContainer = styled.li`
  display: flex;

  flex-direction: ${(props: { editMode: boolean }) =>
    props.editMode ? "column" : "row"};

  align-items: center;

  width: 100%;
  padding: 0.2rem 0.5rem;
  margin-bottom: 0.1rem;
  border-radius: 5px;

  user-select: ${(props: { editMode: boolean }) =>
    props.editMode ? "text" : "none"};

  height: ${(props: { editMode: boolean }) =>
    props.editMode ? "5rem" : "2rem"};

  cursor: default;
  outline: 0px solid #eee;

  transition: background-color 0.1s ease-in-out, transform 0.05s ease-in-out,
    outline 0.1s ease-in-out, height 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    background-color: #eee;
    outline: 1px solid #ccc;
  }

  &:active {
    transform: scale(0.98);
  }

  p {
    width: 100%;
  }
`;

const Checkbox = styled.div`
  width: 0.8rem;
  height: 0.8rem;

  ${(props: { isComplete: boolean; editMode: boolean }) =>
    props.editMode ? "display: none;" : ""}

  border-radius: 5px;
  border: 1px solid #000;
  margin-right: 0.5rem;

  background-color: ${(props: { isComplete: boolean; editMode: boolean }) =>
    props.isComplete ? "#000;" : "#FFF;"};

  transition: transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:before {
    content: " ";

    display: block;

    transform: translate(-0.3rem, -0.3rem);

    border: 0.7rem solid transparent;
  }
`;
