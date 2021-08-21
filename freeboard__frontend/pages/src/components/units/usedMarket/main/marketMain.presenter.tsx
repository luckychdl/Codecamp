import { getDate } from "../../../../commons/libraries/utils";
import Button01 from "../../../commons/buttons/button01";
import Top from "../../../commons/toTop/toTop";
import {
  MainWrapper,
  MenuWrapper,
  SubWrapper,
  SellOn,
  Search,
  Date,
  SearchBtn,
  SearchWrapper,
  SellWrapper,
  ListWrapper,
  Img,
  InfoWrapper,
  Name,
  Remarks,
  Tags,
  InfoSecondWrapper,
  Seller,
  HeartImage,
  HeartScore,
  PriceWrapper,
  PriceImg,
  Price,
  ListSecondWrapper,
  ListMainWrapper,
  NameWrapper,
  TotalWrapper,
  TodayWrapper,
  TopWrapper,
} from "./marketMain.styles";
import Today from "../today/today.container";
import BestItem from "../bestItem/bestItem.container";

interface IMarketMainUIProps {
  onClickMove: () => void;

  data?: any;
}
const MarketMainUI = (props: IMarketMainUIProps) => {
  return (
    <TotalWrapper>
      <MainWrapper>
        <BestItem />
        <MenuWrapper>
          <SubWrapper>
            <SellWrapper>
              <SellOn>판매중상품</SellOn>
              <SellOn>판매된상품</SellOn>
            </SellWrapper>
            <SearchWrapper>
              <Search onChange={props.onChangeSearch}></Search>
              <Date>{getDate(props.data?.fetchUseditems.createdAt)}</Date>
              <SearchBtn onClick={props.onClickSearch}>검색</SearchBtn>
            </SearchWrapper>
          </SubWrapper>
        </MenuWrapper>
        {props.data?.fetchUseditems.map((data: any) => (
          <>
            <ListMainWrapper
              key={data._id}
              onClick={props.onClickMoveDetail(data)}
            >
              <ListWrapper>
                <Img src={`https://storage.googleapis.com/${data.images[0]}`} />
                <InfoWrapper>
                  <NameWrapper>
                    <Name>{data.name}</Name>
                    <Remarks>{data.remarks}</Remarks>
                    <Tags>{data.tags}</Tags>
                  </NameWrapper>
                  <InfoSecondWrapper>
                    <HeartImage src="/FreeBoard/profileMain.png" />
                    <Seller>{data.seller.name}</Seller>
                    <HeartImage src="/FreeBoard/heart.svg" />
                    <HeartScore>{data.pickedCount}</HeartScore>
                  </InfoSecondWrapper>
                </InfoWrapper>
              </ListWrapper>
              <ListSecondWrapper>
                <PriceWrapper>
                  <PriceImg src="/FreeBoard/money.svg" />
                  <Price>{data.price}</Price>
                </PriceWrapper>
              </ListSecondWrapper>
            </ListMainWrapper>
          </>
        ))}

        <form onSubmit={props.handleSubmit(props.onClickMove)}>
          <Button01 buttonName={"상품 등록하기"}></Button01>
        </form>
      </MainWrapper>

      <TodayWrapper>
        <Today />
      </TodayWrapper>
      <TopWrapper>
        <Top></Top>
      </TopWrapper>
    </TotalWrapper>
  );
};

export default MarketMainUI;
