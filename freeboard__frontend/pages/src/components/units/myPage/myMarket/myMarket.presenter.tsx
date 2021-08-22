import { useQuery } from "@apollo/client";
import { getDate } from "../../../../commons/libraries/utils";
import { FETCH_USED_ITEM_I_SOLD } from "./myMarket.queries";
import {
  MainWrapper,
  Wrapper,
  Row,
  ListColumn,
  Column,
  Title,
  SubWrapper,
  MyProduct,
  MyPick,
  MyWrapper,
} from "./myMarket.styles";
import UserInfo from "../userInfo/userInfo.container";
const MyMarketUI = () => {
  const { data } = useQuery(FETCH_USED_ITEM_I_SOLD);
  return (
    <MainWrapper>
      <MyWrapper>
        <MyProduct>나의 상품</MyProduct>
        <MyPick>마이찜</MyPick>
      </MyWrapper>
      <SubWrapper>
        <UserInfo />

        <Wrapper>
          <Row>
            <ListColumn>번호</ListColumn>
            <ListColumn>제목</ListColumn>
            <ListColumn>판매가격</ListColumn>
            <ListColumn>날짜</ListColumn>
          </Row>
          {data?.fetchUseditemsISold.map((data: any, index: number) => (
            <Row key={data._id}>
              <Column>{index + 1}</Column>
              <Title id={data._id}>{data.name}</Title>
              <Column>{data.price}</Column>
              <Column>{getDate(data.updatedAt)}</Column>
            </Row>
          ))}
        </Wrapper>
      </SubWrapper>
    </MainWrapper>
  );
};
export default MyMarketUI;
