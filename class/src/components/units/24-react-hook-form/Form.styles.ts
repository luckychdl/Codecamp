import styled from "@emotion/styled";

export const MyButton = styled.button`
  width: 100px;
  background-color: ${(props) => (props.isActive ? "yellow" : "gray")};
`;
