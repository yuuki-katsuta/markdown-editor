import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: dodgerblue;
  border: none;
  box-shadow: none;
  color: white;
  font-size: 1rem;
  height: 2rem;
  min-width: 5rem;
  padding: 0 1rem;
  &.cancel {
    background: white;
    border: 1px solid gray;
    color: gray;
  }
`;

//このコンポーネントに渡すパラメーターの型を定義
interface Props {
  cancel?: boolean;
  children: string;
  onClick: () => void;
}

//React.FC<Props> のように定義すると、引数の props は Props であると型を明示できる
export const Button: React.FC<Props> = (props) => (
  <StyledButton onClick={props.onClick} className={props.cancel? 'cancel': ''}>
    {props.children}
  </StyledButton>
);
