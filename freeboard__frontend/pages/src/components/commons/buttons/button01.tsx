import styled from "@emotion/styled";
const Button01 = styled.button`
  width: 170px;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  background-color: #212121;
  color: white;
  border: none;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-right: 24px;
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
  }
`;

const ButtonWrite = (props) => {
  return <Button01>{props.buttonName}</Button01>;
};

export default ButtonWrite;
