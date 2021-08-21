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
  Contents,
  Tags,
  ContentsWrapper,
  MapBox,
  ButtonWrapper,
  SliderUl,
} from "./marketDetail.styles";
import Button01 from "../../../commons/buttons/button01";
import { IQuery } from "../../../../../../src/commons/types/generated/types";
// import DOMPurify from "dompurify";
import Slider from "react-slick";
import { useContext } from "react";
import { GlobalContext } from "../../../../../_app";
interface IMarketDetailUIProps {
  onClickMove: () => void;
  data?: IQuery;
  onClickToggle: () => void;
  onClickEdit: () => void;
}
const MarketDetailUI = (props: IMarketDetailUIProps) => {
  const { userInfo } = useContext(GlobalContext);
  console.log("fgdg", userInfo);
  const settings = {
    customPaging: function (i: any) {
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
    appendDots: (dots: any) => <SliderUl> {dots} </SliderUl>,
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
                    width: "600px",
                    height: "600px",
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
        {typeof window !== "undefined" && props.data ? (
          <Contents
            dangerouslySetInnerHTML={{
              __html: props.data?.fetchUseditem.contents,
            }}
          ></Contents>
        ) : (
          <div />
        )}
        <Tags>{props.data?.fetchUseditem.tags}</Tags>
      </ContentsWrapper>
      <MapBox id="map"></MapBox>
      <ButtonWrapper>
        <Button01
          buttonName={"목록으로"}
          onClick={props.onClickMove}
          buttonType="button"
        ></Button01>
        {props.data?.fetchUseditem.seller._id !== userInfo._id ? (
          <Button01
            buttonName={"구매하기"}
            onClick={props.onClickBuying}
          ></Button01>
        ) : (
          <Button01
            buttonName={"수정하기"}
            onClick={props.onClickEdit}
          ></Button01>
        )}
      </ButtonWrapper>
    </MainWrapper>
  );
};

export default MarketDetailUI;
