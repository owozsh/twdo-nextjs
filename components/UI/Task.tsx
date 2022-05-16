import { useState, useRef, useEffect } from "react";
import { Trash2, Calendar } from "react-feather";

import styled from "styled-components";

export default function Task(props: { description: string }) {
  const [isComplete, setIsComplete] = useState(false);
  const [description, setDescription] = useState(props.description);
  const [editMode, setEditMode] = useState(false);

  const inputElement = useRef<HTMLInputElement>(null);

  const enterEditMode = () => {
    setEditMode(true);
    if (inputElement.current != null) inputElement.current.focus();
  };

  const exitEditMode = () => {
    setEditMode(false);
    if (inputElement.current != null) inputElement.current.blur();
  };

  const toggleIsComplete = (e: any) => {
    e.stopPropagation();
    setIsComplete(!isComplete);
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" || e.key === "Enter") exitEditMode();
    });

    if (description == "") {
      enterEditMode();
    }
  }, [description]);

  return (
    <>
      <TaskContainer editMode={editMode} onClick={enterEditMode}>
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
        <ActionMenu editMode={editMode}>
          <Button buttonType="default">
            <Calendar />
          </Button>
          <Button buttonType="destructive">
            <Trash2 />
          </Button>
        </ActionMenu>
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

  ${(props: { editMode: boolean }) =>
    props.editMode
      ? "z-index: 5;\nborder: 1px solid #ddd;\nbox-shadow: 0 5px 10px #eee"
      : "&:hover {\nbackground-color: #eee;\noutline: 1px solid #ccc;\n}"};

  flex-direction: ${(props: { editMode: boolean }) =>
    props.editMode ? "column" : "row"};

  align-items: ${(props: { editMode: boolean }) =>
    props.editMode ? "stretch" : "center"};
  justify-content: space-between;

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

const ActionMenu = styled.div`
  ${(props: { editMode: boolean }) =>
    props.editMode ? "display: flex;" : "display: none;"}
  justify-content: flex-end;
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

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 1.4rem;
  width: 1.4rem;
  margin-left: 0.2rem;

  border: none;
  border-radius: 0.2rem;
  background-color: transparent;

  outline: transparent;

  transition: background-color 0.2s cubic-bezier(0.165, 0.84, 0.44, 1),
    outline 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    background-color: ${(props: { buttonType: string }) =>
      props.buttonType == "destructive" ? "#ff000015" : "#0000ff15"};

    outline: 1px solid
      ${(props: { buttonType: string }) =>
        props.buttonType == "destructive" ? "#ff000050" : "#0000ff50"};

    svg {
      color: ${(props: { buttonType: string }) =>
        props.buttonType == "destructive" ? "red" : "blue"};
    }
  }

  svg {
    color: #888;
    width: 1rem;
    stroke-width: 1.5px;
    transition: color 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`;
