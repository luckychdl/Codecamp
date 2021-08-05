import styled from "@emotion/styled";

const LoginInput = styled.input`
  width: 460px;
  height: 70px;
  padding-left: 20px;
  border-radius: 7px;
  border: 1px solid #bdbdbd;
  font-size: 18px;
  outline-color: #35c5f0;
  ::placeholder {
    color: #bdbdbd;
  }
`;

const ErrorMessage = styled.div`
  color: red;
`;

const Input01 = (props) => {
  return (
    <>
      <LoginInput
        type={props.type}
        {...props.register}
        placeholder={props.inputName}
      />
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </>
  );
};

export default Input01;
