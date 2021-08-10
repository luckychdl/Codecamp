import { getDate } from "../../../../commons/libraries/utils";
import Button01 from "../../../commons/buttons/button01";
import {
  MainWrapper,
  MainTitle,
  BestWrapper,
  Best,
  MenuWrapper,
  SubWrapper,
  SellOn,
  Search,
  Date,
  SearchBtn,
  SearchWrapper,
  SelleWrapper,
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
} from "./marketMain.styles";
import Today from "../today/today.container";

interface IMarketMainUIProps {
  onClickMove: () => void;
}
const MarketMainUI = (props: IMarketMainUIProps) => {
  return (
    <TotalWrapper>
      <MainWrapper>
        <MainTitle>베스트상품</MainTitle>
        <BestWrapper>
          <Best></Best>
          <Best></Best>
          <Best></Best>
          <Best></Best>
        </BestWrapper>
        <MenuWrapper>
          <SubWrapper>
            <SelleWrapper>
              <SellOn>판매중상품</SellOn>
              <SellOn>판매된상품</SellOn>
            </SelleWrapper>
            <SearchWrapper>
              <Search></Search>
              <Date>{getDate(props.data?.fetchUseditems.createdAt)}</Date>
              <SearchBtn>검색</SearchBtn>
            </SearchWrapper>
          </SubWrapper>
        </MenuWrapper>
        {props.data?.fetchUseditems.map((data) => (
          <>
            <ListMainWrapper
              key={data._id}
              onClick={props.onClickMoveDetail(data)}
            >
              <ListWrapper>
                <Img src={`https://storage.googleapis.com/${data.images}`} />
                <InfoWrapper>
                  <NameWrapper>
                    <Name>{data.name}</Name>
                    <Remarks>{data.remarks}</Remarks>
                    <Tags>{data.tags}</Tags>
                  </NameWrapper>
                  <InfoSecondWrapper>
                    <Seller>{data.seller.name}</Seller>
                    <HeartImage src="/FreeBoard/heart.png" />
                    <HeartScore>20</HeartScore>
                  </InfoSecondWrapper>
                </InfoWrapper>
              </ListWrapper>
              <ListSecondWrapper>
                <PriceWrapper>
                  <PriceImg src="/FreeBoard/money.png" />
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
      <Today></Today>
    </TotalWrapper>
  );
};

export default MarketMainUI;
