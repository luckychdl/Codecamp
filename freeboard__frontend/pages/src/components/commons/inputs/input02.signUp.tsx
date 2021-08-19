import styled from "@emotion/styled";

const Input02 = styled.input`
  margin-bottom: 30px;
  width: 460px;
  height: 50px;
  border-radius: 4px;
  padding-left: 15px;
  color: #9e9e9e;
  border: 1px solid #bdbdbd;
  outline-color: #512771;
  ::placeholder {
    color: #bdbdbd;
  }
`;
const Error = styled.div`
  color: red;
`;

const Input = (props) => {
  return (
    <>
      <Input02
        type={props.type}
        {...props.register}
        placeholder={props.inputName}
      />
      <Error>{props.errorMessage}</Error>
    </>
  );
};

export default Input;
