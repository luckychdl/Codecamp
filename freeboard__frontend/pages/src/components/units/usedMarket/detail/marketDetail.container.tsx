import { useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MarketDetailUI from "./marketDetail.presenter";
import { FETCH_USED_ITEM, TOGGLE_USED_ITEM_PICK } from "./marketDetail.queries";
import { Modal } from "antd";
const MarketDetail = () => {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const onClickToggle = async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: router.query.useditemId },
      });

      refetch();
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };
  const onClickMove = () => {
    router.push("/usedMarket");
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f7c32ed029b0a9345341d56c3631807f&libraries=services,clusterer,drawing&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(() => {
        let mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOption = {
            center: new kakao.maps.LatLng(37.485298, 126.900966), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };

        // 지도를 생성합니다
        const map = new kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          data?.fetchUseditem.useditemAddress.address,
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {
              const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // // 인포윈도우로 장소에 대한 설명을 표시합니다
              // const infowindow = new kakao.maps.InfoWindow({
              //   content: addressDetail,
              // });
              // infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
              console.log("qwe", data?.fetchUseditem.useditemAddress.address);
              console.log("qwe123", coords);
            }
          }
        );
      });
    };
  }, []);
  return (
    <>
      <MarketDetailUI
        data={data}
        onClickMove={onClickMove}
        onClickToggle={onClickToggle}
      />
    </>
  );
};

export default MarketDetail;
