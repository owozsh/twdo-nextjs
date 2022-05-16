import { useState, useRef, useEffect } from "react";
import { Trash2, Calendar, Check } from "react-feather";

import styled from "styled-components";

export default function Task(props: { description: string }) {
  const [isComplete, setIsComplete] = useState(false);
  const [description, setDescription] = useState(props.description);
  const [editMode, setEditMode] = useState(false);

  const inputElement = useRef<HTMLInputElement>(null);

  const toggleIsComplete = (e: any) => {
    e.stopPropagation();
    setIsComplete(!isComplete);
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" || e.key === "Enter") setEditMode(false);
    });

    if (description == "") {
      setEditMode(true);
    }
  }, [description]);

  useEffect(() => {
    if (inputElement.current != null) {
      editMode ? inputElement.current.focus() : inputElement.current.blur();
    }
  }, [editMode]);

  return (
    <>
      <TaskContainer editMode={editMode} onClick={() => setEditMode(true)}>
        <Checkbox
          editMode={editMode}
          isComplete={isComplete}
          onClick={(e) => toggleIsComplete(e)}
        >
          <Check />
        </Checkbox>
        <input
          disabled={!editMode}
          value={description}
          ref={inputElement}
          onFocus={(e) =>
            e.currentTarget.setSelectionRange(
              e.currentTarget.value.length,
              e.currentTarget.value.length
            )
          }
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
        <EditModeBackgroundBlur onClick={() => setEditMode(false)} />
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
      : "&:hover {\nbackground-color: #f5f5f5;\noutline: 1px solid #ddd;\n}"};

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
    props.editMode ? "4rem" : "2rem"};

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

  display: ${(props: { isComplete: boolean; editMode: boolean }) =>
    props.editMode ? "none" : "flex"};

  position: relative;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  border: 1px solid #000;
  margin-right: 0.5rem;

  transition: transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:before {
    content: "";

    display: block;
    transform: translate(-0.3rem, -0.3rem);
    border: 0.7rem solid transparent;
  }

  svg {
    ${(props: { isComplete: boolean; editMode: boolean }) =>
      props.isComplete ? "" : "display: hidden"}
    min-width: 1rem;
    stroke-width: 2px;
    transform: translate(-0.55rem, -0.05rem);
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
        props.buttonType == "destructive" ? "#ff000030" : "#0000ff30"};

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
