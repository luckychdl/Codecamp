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
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
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
          <Location placeholder={props.lng} readOnly />
          <LocationImg src="/FreeBoard/Location.svg" />
          <Location placeholder={props.lat} readOnly />
        </SubWrapper>
        <Title02 divName={"주소"}></Title02>
        <AddressInput
          type="text"
          onClick={props.onClickOpenModal}
          value={props.address}
        />
        {props.isOpen && (
          <Modal
            title="주소 검색하기"
            visible={props.isOpen}
            onOk={props.handleCancel}
            onCancel={props.handleCancel}
          >
            <DaumPostcode onComplete={props.onComplete} />
          </Modal>
        )}
        <AddressInput type="text" onChange={props.onChangeAddressDetail} />
      </AddressWrapper>
    </MainWrapper>
  );
};

export default KakaoMapPage;
