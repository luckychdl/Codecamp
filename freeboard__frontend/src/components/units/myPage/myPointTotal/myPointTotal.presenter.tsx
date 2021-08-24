import { getDate } from "../../../../commons/libraries/utils";
import {
  MainWrapper,
  Wrapper,
  Row,
  ListColumn,
  Column,
  Title,
} from "./myPointTotal.styles";
const MyPointTotalPageUI = (props: any) => {
  return (
    <MainWrapper>
      <Wrapper>
        <Row>
          <ListColumn>날짜</ListColumn>
          <ListColumn>내용</ListColumn>
          <ListColumn>거래 및 충전 내역</ListColumn>
          <ListColumn>잔액</ListColumn>
        </Row>
        {props.data?.fetchPointTransactions

          .map((data: any, index: number) => (
            <Row key={data._id}>
              <Column>{getDate(data.updatedAt)}</Column>
              <Title id={data._id}>{data.status}</Title>

              <Column>{data.statusDetail}</Column>
              <Column>{data.balance}</Column>
            </Row>
          ))
          .reverse()}
      </Wrapper>
    </MainWrapper>
  );
};
export default MyPointTotalPageUI;
