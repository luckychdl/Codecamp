import { Pagination } from "antd";
import { getDate } from "../../../../commons/libraries/utils";

import {
  MainWrapper,
  Wrapper,
  Row,
  ListColumn,
  Column,
  Title,
  Sold,
} from "./myMarket.styles";
const MyMarketUI = (props: any) => {
  return (
    <MainWrapper>
      <Wrapper>
        <Row>
          <ListColumn>번호</ListColumn>
          <ListColumn>제목</ListColumn>
          <ListColumn></ListColumn>
          <ListColumn>판매가격</ListColumn>
          <ListColumn>날짜</ListColumn>
        </Row>
        {props.data?.fetchUseditemsISold
          .map((data: any, index: number) => (
            <Row key={data._id}>
              <Column>{index + 1}</Column>
              <Title id={data._id}>{data.name}</Title>
              <Sold>{data.buyer?.name ? "판매완료" : ""}</Sold>
              <Column>{data.price}</Column>
              <Column>{getDate(data.updatedAt)}</Column>
            </Row>
          ))
          .reverse()}
      </Wrapper>
      <Pagination />
    </MainWrapper>
  );
};
export default MyMarketUI;
