import styled from "@emotion/styled";
const Button02 = styled.button`
  position: absolute;
  right: 0px;
  bottom: 6px;
  width: 91px;
  height: 52px;
  background: #35c5f0;
  color: white;
  cursor: pointer;
  border: none;
`;

const SubmitButton02 = (props) => {
  return <Button02>{props.buttonName}</Button02>;
};

export default SubmitButton02;
