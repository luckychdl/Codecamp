import styled from "@emotion/styled";

const Input03 = styled.input`
  width: 850px;
  height: 60px;
  border-radius: 5px;
  padding-left: 15px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  outline-color: #512771;
  ::placeholder {
    color: #bdbdbd;
  }
  @media (max-width: 767px) {
    width: 300px;
  }
`;
const ErrorMessage = styled.div`
  color: red;
`;

const InputMarket = (props: any) => {
  return (
    <>
      <Input03
        type={props.type}
        {...props.register}
        placeholder={props.inputName}
        defaultValue={props.defaultValue}
      />
      <ErrorMessage style={{ paddingTop: "5px" }}>
        {props.errorMessage}
      </ErrorMessage>
    </>
  );
};

export default InputMarket;
