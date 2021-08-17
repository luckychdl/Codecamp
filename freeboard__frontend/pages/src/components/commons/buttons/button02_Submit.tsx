import styled from "@emotion/styled";
const Button02 = styled.button`
  width: 91px;
  height: 52px;
  background: #5f0080;
  color: white;
  cursor: pointer;
  border: none;
`;

const SubmitButton02 = (props) => {
  return (
    <Button02 type={props.buttonType} onClick={props.onClick}>
      {props.buttonName}
    </Button02>
  );
};

export default SubmitButton02;
