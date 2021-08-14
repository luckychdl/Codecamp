import {
  MainWrapper,
  LocationWrapper,
  LocationMap,
  AddressWrapper,
  SubWrapper,
  Location,
  LocationImg,
  AddressInput,
} from "./kakaoMap.styles";
import Title02 from "../titles/title02.marketWrite";
const KakaoMapPage = (props) => {
  return (
    <MainWrapper>
      <LocationWrapper>
        <Title02 divName={"거래위치"}></Title02>
        <LocationMap id="map"></LocationMap>
      </LocationWrapper>
      <AddressWrapper>
        <Title02 divName={"GPS"}></Title02>
        <SubWrapper>
          <Location placeholder="위도(LAT)" onChange={props.onChangeLAT} />
          <LocationImg src="/FreeBoard/Location.svg" />
          <Location placeholder="경도(LNG)" onChange={props.onChangeLNG} />
        </SubWrapper>
        <Title02 divName={"주소"}></Title02>
        <AddressInput></AddressInput>
        <AddressInput></AddressInput>
      </AddressWrapper>
    </MainWrapper>
  );
};

export default KakaoMapPage;
