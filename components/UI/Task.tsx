import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

export default function Task(props: { description: string }) {
  const [isComplete, setIsComplete] = useState(false);
  const [description, setDescription] = useState(props.description);
  const [editMode, setEditMode] = useState(false);

  const inputElement = useRef<HTMLInputElement>(null);

  const exitEditMode = () => {
    setEditMode(false);
    if (inputElement.current != null) inputElement.current.blur();
  };

  const toggleIsComplete = (e: any) => {
    e.stopPropagation();
    setIsComplete(!isComplete);
  };

  const handleEscKey = () => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") exitEditMode();
    });
  };

  useEffect(handleEscKey, []);

  return (
    <>
      <TaskContainer editMode={editMode} onClick={() => setEditMode(true)}>
        <Checkbox
          editMode={editMode}
          isComplete={isComplete}
          onClick={(e) => toggleIsComplete(e)}
        ></Checkbox>
        <input
          value={description}
          ref={inputElement}
          onChange={(e) => setDescription(e.target.value)}
        />
      </TaskContainer>
      {editMode ? (
        <EditModeBackgroundBlur onClick={() => exitEditMode()} />
      ) : (
        ""
      )}
    </>
  );
}

const EditModeBackgroundBlur = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

const TaskContainer = styled.li`
  display: flex;
  position: relative;

  ${(props: { editMode: boolean }) => (props.editMode ? "z-index: 5;" : "")};

  flex-direction: ${(props: { editMode: boolean }) =>
    props.editMode ? "column" : "row"};

  align-items: center;

  width: 100%;
  margin-bottom: 0.1rem;
  border-radius: 5px;

  padding: ${(props: { editMode: boolean }) =>
    props.editMode ? "0.5rem 0.7rem" : "0.2rem 0.5rem"};

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
    ${(props: { editMode: boolean }) =>
      props.editMode ? "" : "transform: scale(0.98);"};
  }

  input {
    font-size: 1rem;
    width: 100%;
    border: none;
    background-color: transparent;

    cursor: ${(props: { editMode: boolean }) =>
      props.editMode ? "text" : "default"};

    &:focus {
      outline: none;
      border: none;
    }
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
    content: "";

    display: block;

    transform: translate(-0.3rem, -0.3rem);

    border: 0.7rem solid transparent;
  }
`;
