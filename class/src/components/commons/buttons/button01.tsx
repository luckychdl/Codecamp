import styled from "@emotion/styled";

export const MyButton = styled.button`
  width: 100px;
  background-color: ${(props) => (props.isActive ? "yellow" : "gray")};
`;

const Button01 = (props) => {
  return (
    <MyButton type={props.type} isActive={props.isActive}>
      {props.buttonName}
    </MyButton>
  );
};

export default Button01;
