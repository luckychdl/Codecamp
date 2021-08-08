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
} from "./marketMain.styles";

interface IMarketMainUIProps {
  onClickMove: () => void;
}
const MarketMainUI = (props: IMarketMainUIProps) => {
  return (
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
            <Date>20202020</Date>
            <SearchBtn>검색</SearchBtn>
          </SearchWrapper>
        </SubWrapper>
      </MenuWrapper>
      <ListMainWrapper>
        <ListWrapper>
          <Img></Img>
          <InfoWrapper>
            <NameWrapper>
              <Name>삼성전자</Name>
              <Remarks>LTE</Remarks>
              <Tags>#삼성전자</Tags>
            </NameWrapper>
            <InfoSecondWrapper>
              <Seller>판매자</Seller>
              <HeartImage src="/FreeBoard/heart.png" />
              <HeartScore>20</HeartScore>
            </InfoSecondWrapper>
          </InfoWrapper>
        </ListWrapper>
        <ListSecondWrapper>
          <PriceWrapper>
            <PriceImg src="/FreeBoard/money.png" />
            <Price>131,313</Price>
          </PriceWrapper>
        </ListSecondWrapper>
      </ListMainWrapper>
      <form onSubmit={props.handleSubmit(props.onClickMove)}>
        <Button01 buttonName={"상품 등록하기"}></Button01>
      </form>
    </MainWrapper>
  );
};

export default MarketMainUI;
