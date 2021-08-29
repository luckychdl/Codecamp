import { getComma, getDate } from "../../../../commons/libraries/utils";
import {
  MainWrapper,
  Wrapper,
  Row,
  ListColumn,
  Column,
  Title,
} from "./myPointPay.styles";
const MyPointPayPageUI = (props: any) => {
  return (
    <MainWrapper>
      <Wrapper>
        <Row>
          <ListColumn>충전일</ListColumn>
          <ListColumn>결제 ID</ListColumn>
          <ListColumn>충전 내역</ListColumn>
          <ListColumn>충전 후 잔액</ListColumn>
        </Row>
        {props.data?.fetchPointTransactionsOfLoading.map((data: any) => (
          <Row key={data._id}>
            <Column>{getDate(data.updatedAt)}</Column>
            <Title id={data._id}>{data.impUid}</Title>
            <Column>{getComma(data.amount)}</Column>
            <Column>{getComma(data.balance)}</Column>
          </Row>
        ))}
      </Wrapper>
    </MainWrapper>
  );
};

export default MyPointPayPageUI;
