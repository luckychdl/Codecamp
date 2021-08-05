import styled from "@emotion/styled";
const MyButton = styled.button``;

const Button01 = (props) => {
  return (
    <MyButton type={props.type} isActive={props.isActive}>
      {props.buttonName}
    </MyButton>
  );
};

export default Button01;
