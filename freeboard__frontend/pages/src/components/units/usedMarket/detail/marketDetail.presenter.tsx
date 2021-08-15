import {
  MainWrapper,
  ProfileWrapper,
  ProfileImg,
  SellerWrapper,
  SellerName,
  SellDate,
  LocationWrapper,
  Link,
  Location,
  SubWrapper,
  MainNameWrapper,
  NameWrapper,
  Remarks,
  Name,
  LikeWrapper,
  Like,
  LikeScore,
  Price,
  ImgWrapper,
  Picture,
  Contents,
  Tags,
  ContentsWrapper,
  MapBox,
  ButtonWrapper,
  SliderUl,
} from "./marketDetail.styles";
import Button01 from "../../../commons/buttons/button01";
import { IQuery } from "../../../../../../src/commons/types/generated/types";
import DOMPurify from "dompurify";
import Slider from "react-slick";
interface IMarketDetailUIProps {
  onClickMove: () => void;
  data?: IQuery;
}
const MarketDetailUI = (props: IMarketDetailUIProps) => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            style={{ width: "100px", height: "100px" }}
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[i]}`}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => <SliderUl> {dots} </SliderUl>,
  };

  if (typeof window === "undefined") return <></>;
  return (
    <MainWrapper>
      <SubWrapper>
        <ProfileWrapper>
          <ProfileImg src="/FreeBoard/Profile.png" />
          <SellerWrapper>
            <SellerName>{props.data?.fetchUseditem.seller.name}</SellerName>
            <SellDate>{props.data?.fetchUseditem.createdAt}</SellDate>
          </SellerWrapper>
        </ProfileWrapper>
        <LocationWrapper>
          <Link src="/FreeBoard/link.svg" />
          <Location src="/FreeBoard/location.svg" />
        </LocationWrapper>
      </SubWrapper>
      <MainNameWrapper>
        <NameWrapper>
          <Remarks>{props.data?.fetchUseditem.remarks}</Remarks>
          <Name>{props.data?.fetchUseditem?.name}</Name>
          <Price>{props.data?.fetchUseditem.price}원</Price>
        </NameWrapper>
        <LikeWrapper>
          <Like src="/FreeBoard/heart.svg" onClick={props.onClickToggle} />
          <LikeScore />
          {props.data?.fetchUseditem.pickedCount}
        </LikeWrapper>
      </MainNameWrapper>

      <ImgWrapper>
        <div style={{ width: "600px", height: "600px", margin: "auto" }}>
          <Slider {...settings}>
            {props.data?.fetchUseditem.images?.map((data: any, index) => (
              <div key={index}>
                <img
                  style={{
                    width: "400px",
                    height: "400px",
                    margin: "auto",
                    marginBottom: "100px",
                  }}
                  src={`https://storage.googleapis.com/${data}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </ImgWrapper>

      <ContentsWrapper>
        <Contents
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
          }}
        ></Contents>
        <Tags>{props.data?.fetchUseditem.tags}</Tags>
      </ContentsWrapper>
      <MapBox id="map"></MapBox>
      <ButtonWrapper>
        <Button01
          buttonName={"목록으로"}
          onClick={props.onClickMove}
        ></Button01>
        <Button01 buttonName={"구매하기"}></Button01>
      </ButtonWrapper>
    </MainWrapper>
  );
};

export default MarketDetailUI;
