import styled from "styled-components";

export default function TouchableComponent(props: any) {
  return (
    <TouchableComponentContainer>{props.children}</TouchableComponentContainer>
  );
}

const TouchableComponentContainer = styled.div`
  border-radius: 5px;

  background-color: transparent;

  cursor: default;
  outline: 0px solid #eee;

  transition: background-color 0.1s ease-in-out, transform 0.05s ease-in-out,
    outline 0.1s ease-in-out;

  &:hover {
    background-color: #eee;
    outline: 1px solid #ccc;
  }

  &:active {
    transform: scale(0.9);
  }
`;
