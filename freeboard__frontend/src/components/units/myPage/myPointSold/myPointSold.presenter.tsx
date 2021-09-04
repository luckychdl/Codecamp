import { getComma, getDate } from "../../../../commons/libraries/utils";
import {
  MainWrapper,
  Wrapper,
  Row,
  ListColumn,
  Column,
  Title,
} from "./myPointSold.styles";
const MyPointSellingPageUI = (props: any) => {
  return (
    <MainWrapper>
      <Wrapper>
        <Row>
          <ListColumn>거래일</ListColumn>
          <ListColumn>제목</ListColumn>
          <ListColumn>거래 내역</ListColumn>
          <ListColumn>거래 후 잔액</ListColumn>
        </Row>
        {props.sellingData?.fetchPointTransactionsOfSelling.map((data: any) => (
          <Row key={data._id}>
            <Column>{getDate(data.updatedAt)}</Column>
            <Title id={data._id}>{data.useditem.name}</Title>

            <Column>{getComma(data.amount)}</Column>
            <Column>{getComma(data.balance)}</Column>
          </Row>
        ))}
      </Wrapper>
    </MainWrapper>
  );
};
export default MyPointSellingPageUI;
