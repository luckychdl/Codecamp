import styled from "@emotion/styled";

const Input03 = styled.input`
  width: 996px;
  height: 60px;
  border-radius: 7px;
  padding-left: 15px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  outline-color: #757575;
  ::placeholder {
    color: #bdbdbd;
  }
`;
const ErrorMessage = styled.div`
  color: red;
`;

const InputMarket = (props) => {
  return (
    <>
      <Input03
        type={props.type}
        {...props.register}
        placeholder={props.inputName}
      />
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </>
  );
};

export default InputMarket;
