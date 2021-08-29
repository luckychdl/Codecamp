import styled from "@emotion/styled";

const Title02 = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #757575;
  margin-bottom: 20px;
`;

const TitleMarketWrite = (props: any) => {
  return <Title02 defaultValue={props.defaultValue}>{props.divName}</Title02>;
};

export default TitleMarketWrite;
