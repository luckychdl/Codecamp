import styled from "@emotion/styled";

const Input = styled.input`
  border-color: green;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 11px;
`;

const Input01 = (props) => {
  return (
    <>
      {props.inputName}:
      <Input type={props.type} {...props.register} />
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </>
  );
};

export default Input01;
