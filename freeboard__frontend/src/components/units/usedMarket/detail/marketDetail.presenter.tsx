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
import { IQuery } from "../../../../commons/types/generated/types";
import Slider from "react-slick";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { Menu, Dropdown } from "antd";
import { getComma } from "../../../../commons/libraries/utils";
interface IMarketDetailUIProps {
  onClickMove: () => void;
  data?: IQuery;
  onClickToggle: () => void;
  onClickEdit: () => void;
  onClickBuying: () => void;
  onClickDelete: () => void;
  onClickMoveToLogin: () => void;
}

const MarketDetailUI = (props: IMarketDetailUIProps) => {
  const { userInfo } = useContext(GlobalContext);
  const settings = {
    customPaging: function (i: any) {
      return (
        <a>
          <img
            style={{
              minWidth: "50px",
              minHeight: "50px",
              maxWidth: "100px",
              maxHeight: "100px",
            }}
            // @ts-ignore
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
  const menu = (
    <Menu style={{ backgroundColor: "#512771", padding: "10px" }}>
      <Menu.Item>
        {props.data?.fetchUseditem.useditemAddress?.address ? (
          <a style={{ color: "#FFFFFF", fontSize: "16px" }}>
            {props.data?.fetchUseditem.useditemAddress?.address}
          </a>
        ) : (
          <a style={{ color: "#FFFFFF", fontSize: "16px" }}>
            주소를 입력해주세요
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        <a style={{ color: "#FFFFFF", fontSize: "16px" }}>
          {props.data?.fetchUseditem.useditemAddress?.addressDetail}
        </a>
      </Menu.Item>
    </Menu>
  );

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
          <Dropdown
            overlay={menu}
            placement="topRight"
            overlayStyle={{ backgroundColor: "#512771" }}
          >
            <Location src="/FreeBoard/location.svg" />
          </Dropdown>
        </LocationWrapper>
      </SubWrapper>
      <MainNameWrapper>
        <NameWrapper>
          <Remarks>{props.data?.fetchUseditem.remarks}</Remarks>
          <Name>{props.data?.fetchUseditem?.name}</Name>
          <Price>{getComma(props.data?.fetchUseditem.price)}원</Price>
        </NameWrapper>
        <LikeWrapper>
          <Like src="/FreeBoard/heart.svg" onClick={props.onClickToggle} />
          <LikeScore />
          {/* @ts-ignore */}
          {props.data?.fetchUseditem.pickedCount}
        </LikeWrapper>
      </MainNameWrapper>

      <ImgWrapper>
        <div
          style={{
            maxWidth: "600px",
            minWidth: "300px",
            minHeight: "300px",
            maxHeight: "600px",
            margin: "auto",
          }}
        >
          <Slider {...settings}>
            {props.data?.fetchUseditem.images?.map((data: any, index) => (
              <div key={index}>
                <img
                  style={{
                    maxWidth: "200px",
                    minWidth: "200px",
                    minHeight: "200px",
                    maxHeight: "200px",
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
        {props.data?.fetchUseditem.seller._id === userInfo._id ? (
          <Button01
            buttonName={"삭제하기"}
            onClick={props.onClickDelete}
          ></Button01>
        ) : (
          <></>
        )}
      </ButtonWrapper>
    </MainWrapper>
  );
};

export default MarketDetailUI;
