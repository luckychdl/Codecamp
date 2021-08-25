// import { getDate } from "../../../../commons/libraries/utils";
import Button01 from "../../../commons/buttons/button01";
import Top from "../../../commons/toTop/toTop";
import {
  MainWrapper,
  MenuWrapper,
  SubWrapper,
  SellOn,
  SoldOut,
  Search,
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
  NameSubWrapper,
} from "./marketMain.styles";
import Today from "../today/today.container";
import BestItem from "../bestItem/bestItem.container";
import InfiniteScroll from "react-infinite-scroller";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { DatePicker } from "antd";

interface IMarketMainUIProps {
  onClickMove: () => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSearch: () => void;
  onLoadMore: (page: number) => void;
  onClickMoveDetail: (
    event: MouseEvent<HTMLDivElement, MouseEvent>
  ) => () => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onClickSelling: () => void;
  onClickSoldout: () => void;
  isSelling: boolean;
  isSold: boolean;
  onSubmit: FormEvent<HTMLFormElement>;
  hasMore: boolean;
  data?: any;
}
const { RangePicker } = DatePicker;
const MarketMainUI = (props: IMarketMainUIProps) => {
  const [dates, setDates] = useState([]);
  const [hackValue, setHackValue] = useState();
  const [value, setValue] = useState();
  const disabledDate = (current) => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], "days") > 7;
    const tooEarly = dates[1] && dates[1].diff(current, "days") > 7;
    return tooEarly || tooLate;
  };
  const onOpenChange = (open) => {
    if (open) {
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };
  console.log(props.data?.fetchUseditems);
  return (
    <TotalWrapper>
      <MainWrapper>
        <BestItem />
        <MenuWrapper>
          <SubWrapper>
            <SellWrapper>
              <SellOn
                onClick={props.onClickSelling}
                isSelling={props.isSelling}
              >
                판매중상품
              </SellOn>
              <SoldOut onClick={props.onClickSoldout} isSold={props.isSold}>
                판매된상품
              </SoldOut>
            </SellWrapper>
            <SearchWrapper>
              <Search onChange={props.onChangeSearch}></Search>
              <RangePicker
                value={hackValue || value}
                disabledDate={disabledDate}
                onCalendarChange={(val) => setDates(val)}
                onChange={(val) => setValue(val)}
                onOpenChange={onOpenChange}
                style={{
                  width: "210px",
                  height: "50px",
                  border: "none",
                  outlineColor: "#FFFFFF",
                }}
              />
              {/* <Date>{getDate(props.data?.fetchUseditems.createdAt)}</Date> */}
              <SearchBtn onClick={props.onClickSearch}>검색</SearchBtn>
            </SearchWrapper>
          </SubWrapper>
        </MenuWrapper>

        <div
          style={{
            overflow: "auto",
            height: "1000px",
          }}
        >
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={props.hasMore}
            useWindow={false}
          >
            {}
            {props.data?.fetchUseditems.map((data: any) => (
              <>
                <ListMainWrapper
                  key={data._id}
                  onClick={props.onClickMoveDetail(data)}
                >
                  <ListWrapper>
                    <Img
                      src={`https://storage.googleapis.com/${data.images[0]}`}
                    />
                    <InfoWrapper>
                      <NameWrapper>
                        <Name>{data.name}</Name>
                        <NameSubWrapper>
                          <Remarks>{data.remarks}</Remarks>
                          <Tags>{data.tags}</Tags>
                        </NameSubWrapper>
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
          </InfiniteScroll>
        </div>
        {/* @ts-ignore */}
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
