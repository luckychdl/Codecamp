import styled from "@emotion/styled";

const Title01 = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 15px 0;
`;

const TitleSignIn = (props: any) => {
  return <Title01>{props.divName}</Title01>;
};

export default TitleSignIn;
