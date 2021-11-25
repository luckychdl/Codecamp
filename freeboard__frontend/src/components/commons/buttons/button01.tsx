import styled from "@emotion/styled";
const Button01 = styled.button`
  width: 170px;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  background-color: #512771;
  color: white;
  border: none;
  border-radius: 5px;
  margin-right: 30px;
  margin-top: 40px;
  margin-bottom: 40px;
  /* margin-right: 24px; */
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
  }
  @media (max-width: 767px) {
    width: 130px;
    margin: 30px 0 0 0;
  }
`;

const ButtonWrite = (props: any) => {
  return (
    <Button01 type={props.buttonType} onClick={props.onClick}>
      {props.buttonName}
    </Button01>
  );
};

export default ButtonWrite;
