import { getComma, getDate } from "../../../../commons/libraries/utils";
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
        {props.totalData?.fetchPointTransactions.map(
          (data: any, index: number) => (
            <Row key={data._id}>
              <Column>{getDate(data.updatedAt)}</Column>
              <Title id={data._id}>{data.status}</Title>

              <Column>{data.statusDetail}</Column>
              <Column>{getComma(data.balance)}</Column>
            </Row>
          )
        )}
      </Wrapper>
    </MainWrapper>
  );
};
export default MyPointTotalPageUI;
