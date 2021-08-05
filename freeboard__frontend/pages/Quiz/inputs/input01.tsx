import styled from "@emotion/styled";

const MyInput = styled.input`
  border-color: red;
`;
const ErrorMessage = styled.div`
  color: red;
`;

const Input01 = (props) => {
  return (
    <>
      {props.inputName}:
      <MyInput type={props.type} {...props.register} />
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </>
  );
};

export default Input01;
