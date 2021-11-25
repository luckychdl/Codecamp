import styled from "@emotion/styled";
const Button02 = styled.button`
  width: 91px;
  height: 52px;
  background: #512771;
  color: white;
  cursor: pointer;
  border: none;
  @media (max-width: 767px) {
    width: 60px;
    height: 35px;
    font-size: 12px;
  }
`;

const SubmitButton02 = (props: any) => {
  return (
    <Button02 type={props.buttonType} onClick={props.onClick}>
      {props.buttonName}
    </Button02>
  );
};

export default SubmitButton02;
