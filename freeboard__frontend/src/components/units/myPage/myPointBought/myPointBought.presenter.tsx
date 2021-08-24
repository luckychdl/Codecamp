import { getDate } from "../../../../commons/libraries/utils";
import {
  MainWrapper,
  Wrapper,
  Row,
  ListColumn,
  Column,
  Title,
} from "./myPointBought.styles";
const MyPointBoughtPageUI = (props: any) => {
  console.log(props.data);
  return (
    <MainWrapper>
      <Wrapper>
        <Row>
          <ListColumn>거래일</ListColumn>
          <ListColumn>제목</ListColumn>
          <ListColumn>거래 내역</ListColumn>
          <ListColumn>거래 후 잔액</ListColumn>
          <ListColumn>판매자</ListColumn>
        </Row>
        {props.data?.fetchPointTransactionsOfBuying

          .map((data: any) => (
            <Row key={data._id}>
              <Column>{getDate(data.updatedAt)}</Column>
              <Title id={data._id}>{data.useditem.name}</Title>

              <Column>{data.status}</Column>
              <Column>{data.statusDetail}</Column>
              <Column>{data.user.seller}</Column>
            </Row>
          ))
          .reverse()}
      </Wrapper>
    </MainWrapper>
  );
};
export default MyPointBoughtPageUI;
