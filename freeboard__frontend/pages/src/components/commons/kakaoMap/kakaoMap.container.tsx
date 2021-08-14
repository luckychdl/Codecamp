import { useState, useEffect } from "react";
import KakaoMapPage from "./kakaoMap.presenter";

declare const window: typeof globalThis & {
  kakao: any;
};
const KakaoMap = (props) => {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const onChangeLAT = (event) => {
    setLat(event.target.value);
    // props.onChangeLocationLat(lat);
  };
  const onChangeLNG = (event) => {
    setLng(event.target.value);
    // props.onChangeLocationLng(lng);
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f7c32ed029b0a9345341d56c3631807f&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(() => {
        // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(lat, lng), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        const markerPosition = new window.kakao.maps.LatLng(lat, lng);

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            // var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            // message += "경도는 " + latlng.getLng() + " 입니다";

            // var resultDiv = document.getElementById("clickLatlng");
            // resultDiv.innerHTML = message;
          }
        );
      });
    };
  }, [lng]);
  return <KakaoMapPage onChangeLAT={onChangeLAT} onChangeLNG={onChangeLNG} />;
};

export default KakaoMap;
