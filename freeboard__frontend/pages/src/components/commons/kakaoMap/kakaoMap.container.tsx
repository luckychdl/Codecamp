import { useState, useEffect } from "react";
import KakaoMapPage from "./kakaoMap.presenter";

declare const window: typeof globalThis & {
  kakao: any;
};
const KakaoMap = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState();
  const [lng, setLng] = useState();
  const [lat, setLat] = useState();
  const [addressDetail] = useState();
  // const [createUsedItem] = useMutation(CREATE_USED_ITEM);

  const onClickOpenModal = () => {
    setIsOpen(true);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  const onClickAddressDetail = () => {
    setIsOpen(false);
  };
  const onComplete = (data: any) => {
    setAddress(data.address);
    setIsOpen(false);
  };
  const onChangeAddressDetail = (event: any) => {
    props.setAddressDetail(event.target.value);
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f7c32ed029b0a9345341d56c3631807f&libraries=services,clusterer,drawing&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.485298, 126.900966), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        // 지도를 생성합니다
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(address, function (result: any, status: any) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // // 인포윈도우로 장소에 대한 설명을 표시합니다
            // const infowindow = new window.kakao.maps.InfoWindow({
            //   // content: `${addressDetail}`,
            // });
            // infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            marker.setMap(map);
            map.setCenter(coords);
            setLng(coords.La);
            setLat(coords.Ma);
            props.setAddress(address);
            props.setAddressDetail(addressDetail);
            props.setLng(coords.La);
            props.setLat(coords.Ma);
          }
        });
      });
    };
  }, [address, props.setLng]);

  return (
    <KakaoMapPage
      isOpen={isOpen}
      address={address}
      addressDetail={addressDetail}
      lng={lng}
      lat={lat}
      data={props.data}
      onComplete={onComplete}
      handleCancel={handleCancel}
      onClickAddressDetail={onClickAddressDetail}
      onClickOpenModal={onClickOpenModal}
      onChangeAddressDetail={onChangeAddressDetail}
    />
  );
};

export default KakaoMap;
