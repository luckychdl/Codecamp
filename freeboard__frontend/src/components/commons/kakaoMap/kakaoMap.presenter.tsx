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
const KakaoMapPage = (props: any) => {
  return (
    <MainWrapper>
      <LocationWrapper>
        <Title02 divName={"거래위치"}></Title02>
        <LocationMap id="map"></LocationMap>
      </LocationWrapper>
      <AddressWrapper>
        <Title02 divName={"GPS"}></Title02>

        <SubWrapper>
          <Location
            placeholder={props.lat}
            readOnly
            defaultValue={props.data?.fetchUseditem.useditemAddress.lat}
          />
          <LocationImg src="/FreeBoard/Location.svg" />
          <Location
            placeholder={props.lng}
            readOnly
            defaultValue={props.data?.fetchUseditem.useditemAddress.lng}
          />
        </SubWrapper>
        <Title02 divName={"주소"}></Title02>
        <input
          type="text"
          ref={props.addressRef}
          onClick={props.onClickOpenModal}
          style={{ display: "none" }}
        />
        <AddressInput
          onClick={props.onClickBox}
          value={
            props.data
              ? props.data?.fetchUseditem.useditemAddress.address
              : props.address
          }
          // defaultValue={props.data?.fetchUseditem.useditemAddress.address}
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
        <AddressInput
          type="text"
          onChange={props.onChangeAddressDetail}
          // defaultValue={props.defaultAddressDetail}
          defaultValue={props.data?.fetchUseditem.useditemAddress.addressDetail}
        />
      </AddressWrapper>
    </MainWrapper>
  );
};

export default KakaoMapPage;
