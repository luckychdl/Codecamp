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
  Img,
  Contents,
  Tags,
  ContentsWrapper,
  MapBox,
  ButtonWrapper,
  Button,
} from "./marketDetail.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MarketDetailUI = () => {
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
            <SellerName>판매자</SellerName>
            <SellDate>2020.08</SellDate>
          </SellerWrapper>
        </ProfileWrapper>
        <LocationWrapper>
          <Link src="/FreeBoard/Link.png" />
          <Location src="/FreeBoard/Location.png" />
        </LocationWrapper>
      </SubWrapper>
      <MainNameWrapper>
        <NameWrapper>
          <Remarks>2019 LTE 32GB</Remarks>
          <Name>삼성전자 갤럭시탭A 10.1</Name>
          <Price>123,123원</Price>
        </NameWrapper>
        <LikeWrapper>
          <Like src="/FreeBoard/heart.png" />
          <LikeScore />
          12
        </LikeWrapper>
      </MainNameWrapper>
      <Slider {...settings} style={{ width: 400 }}>
        <ImgWrapper>
          <Img src="/FreeBoard/todayLogo.webp" />
        </ImgWrapper>
        <ImgWrapper>
          <Img src="/FreeBoard/banner2.png" />
        </ImgWrapper>
        <ImgWrapper>
          <Img src="/FreeBoard/banner3.webp" />
        </ImgWrapper>
        <ImgWrapper>
          <Img src="/FreeBoard/banner4.jpeg" />
        </ImgWrapper>
      </Slider>
      <ContentsWrapper>
        <Contents>
          액정에 잔기스랑 주변부 스크레치있습니다만 예민하신분아니면 전혀
          신경쓰이지않을정도입니다 박스 보관중입니다 메모용과
          넷플릭스용으로만쓰던거라 뭘 해보질 않아 기능이나 문제점을 못느꼈네요
          잘 안써서 싸게넘깁니다 택배거래안합니다
        </Contents>
        <Tags>#가나다</Tags>
      </ContentsWrapper>
      <MapBox></MapBox>
      <ButtonWrapper>
        <Button>목록으로</Button>
        <Button>구매하기</Button>
      </ButtonWrapper>
    </MainWrapper>
  );
};

export default MarketDetailUI;
