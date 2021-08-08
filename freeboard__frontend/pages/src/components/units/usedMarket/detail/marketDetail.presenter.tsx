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
  Image,
  Contents,
  Tags,
  ContentsWrapper,
  MapBox,
  ButtonWrapper,
} from "./marketDetail.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button01 from "../../../commons/buttons/button01";
import { IQuery } from "../../../../../../src/commons/types/generated/types";

interface IMarketDetailUIProps {
  onClickMove: () => void;
  data?: IQuery;
}
const MarketDetailUI = (props: IMarketDetailUIProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
          <Link src="/FreeBoard/Link.png" />
          <Location src="/FreeBoard/Location.png" />
        </LocationWrapper>
      </SubWrapper>
      <MainNameWrapper>
        <NameWrapper>
          <Remarks>{props.data?.fetchUseditem.remarks}</Remarks>
          <Name>{props.data?.fetchUseditem?.name}</Name>
          <Price>{props.data?.fetchUseditem.price}원</Price>
        </NameWrapper>
        <LikeWrapper>
          <Like src="/FreeBoard/heart.png" />
          <LikeScore />
          12
        </LikeWrapper>
      </MainNameWrapper>
      <Slider {...settings} style={{ width: 400 }}>
        <ImgWrapper>
          {props.data?.fetchUseditem.images?.map((data: string) => (
            <Image key={data} src={`https://storage.googleapis.com/${data}`} />
          ))}
          {/* <Img src="/FreeBoard/todayLogo.webp" />
        </ImgWrapper>
        <ImgWrapper>
          <Img src="/FreeBoard/banner2.png" />
        </ImgWrapper>
        <ImgWrapper>
          <Img src="/FreeBoard/banner3.webp" />
        </ImgWrapper>
        <ImgWrapper>
          <Img src="/FreeBoard/banner4.jpeg" /> */}
        </ImgWrapper>
      </Slider>
      <ContentsWrapper>
        <Contents>{props.data?.fetchUseditem.contents}</Contents>
        <Tags>{props.data?.fetchUseditem.tags}</Tags>
      </ContentsWrapper>
      <MapBox></MapBox>
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
