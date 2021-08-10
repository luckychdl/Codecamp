import {
  TodayProductWrapper,
  TodayTitle,
  TodayWrapper,
  TodayImg,
  TodayName,
  TodayRemarks,
  TodayPrice,
  TodayTags,
} from "./today.styles";
const TodayUI = (props) => {
  return (
    <TodayProductWrapper>
      <TodayTitle>오늘 본 상품</TodayTitle>
      {props.basketData?.map((data) => (
        <>
          <TodayImg
            src={`https://storage.googleapis.com/${data.images}`}
            key={data._id}
          />

          <TodayWrapper>
            <TodayName>{data.name}</TodayName>
            <TodayRemarks>{data.remarks}</TodayRemarks>
            <TodayPrice>{data.price}원</TodayPrice>
            <TodayTags>{data.tags}</TodayTags>
          </TodayWrapper>
        </>
      ))}
    </TodayProductWrapper>
  );
};

export default TodayUI;
