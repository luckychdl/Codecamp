import {
  MainWrapper,
  Title,
  MenuWrapper,
  ContentsName,
  ContentsInput,
  ContentsDetail,
  ContentsDetailInput,
  LocationWrapper,
  LocationMap,
  RowWrapper,
  AddressInput,
  AddressWrapper,
  Location,
  SubWrapper,
  UploadWrapper,
  Button,
} from "./marketWrite.styles";
import { ChangeEvent } from "react";
import Upload01 from "../../../commons/uploads/Upload01.container";

interface IMarketWriteUIProps {
  imgUrl: string;
  onClickItem: () => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRemarks: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePrice: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTags: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrl: () => void;
}
const MarketWriteUI = (props: IMarketWriteUIProps) => {
  return (
    <MainWrapper>
      <Title>상품 등록하기</Title>
      <MenuWrapper>
        <ContentsName onChange={props.onChangeName}>상품명</ContentsName>
        <ContentsInput
          type="text"
          placeholder="상품명을 작성해주세요"
        ></ContentsInput>
      </MenuWrapper>
      <MenuWrapper>
        <ContentsName onChange={props.onChangeRemarks}>한줄요약</ContentsName>
        <ContentsInput
          type="text"
          placeholder="상품요약을 작성해주세요"
        ></ContentsInput>
      </MenuWrapper>
      <MenuWrapper>
        <ContentsDetail onChange={props.onChangeContents}>
          상품 설명
        </ContentsDetail>
        <ContentsDetailInput placeholder="상품을 설명해주세요"></ContentsDetailInput>
      </MenuWrapper>
      <MenuWrapper>
        <ContentsName onChange={props.onChangePrice}>판매 가격</ContentsName>
        <ContentsInput
          type="text"
          placeholder="판매가격을 입력해주세요"
        ></ContentsInput>
      </MenuWrapper>
      <MenuWrapper>
        <ContentsName onChange={props.onChangeTags}>태그 입력</ContentsName>
        <ContentsInput placeholder="#태그 #태그 #태그"></ContentsInput>
      </MenuWrapper>
      <RowWrapper>
        <LocationWrapper>
          <ContentsName>거래위치</ContentsName>
          <LocationMap></LocationMap>
          <ContentsName>사진 첨부</ContentsName>
          <UploadWrapper>
            {new Array(4).fill(1).map((data, index) => (
              <Upload01
                key={`${data}_${index}`}
                imgUrl={data}
                onChangeFileUrl={props.onChangeFileUrl}
              />
            ))}
          </UploadWrapper>
          <ContentsName>메인 사진 설정</ContentsName>
        </LocationWrapper>
        <AddressWrapper>
          <ContentsName>GPS</ContentsName>
          <SubWrapper>
            <Location></Location>
            <Location></Location>
          </SubWrapper>
          <ContentsName>주소</ContentsName>
          <AddressInput></AddressInput>
          <AddressInput></AddressInput>
        </AddressWrapper>
      </RowWrapper>
      <Button onClick={props.onClickItem}>등록하기</Button>
    </MainWrapper>
  );
};

export default MarketWriteUI;
