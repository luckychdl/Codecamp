import {
  MainWrapper,
  Title,
  MenuWrapper,
  ContentsDetailInput,
  LocationWrapper,
  LocationMap,
  RowWrapper,
  AddressInput,
  AddressWrapper,
  Location,
  SubWrapper,
  UploadWrapper,
  Error,
} from "./marketWrite.styles";
import Upload01 from "../../../commons/uploads/Upload01.container";
import Title02 from "../../../commons/titles/title02.marketWrite";
import Input03 from "../../../commons/inputs/input03.marketWrite";
import Button01 from "../../../commons/buttons/button01";
const MarketWriteUI = (props) => {
  return (
    <MainWrapper>
      <Title>상품 등록하기</Title>
      <MenuWrapper>
        <Title02 divName={"상품명"}></Title02>
        <Input03
          type="text"
          inputName={"상품명을 작성해주세요"}
          register={{ ...props.register("name") }}
          errorMessage={props.errors.name?.message}
        />
      </MenuWrapper>
      <MenuWrapper>
        <Title02 divName={"한줄요약"}></Title02>
        <Input03
          type="text"
          inputName={"상품요약을 작성해주세요"}
          register={{ ...props.register("remarks") }}
          errorMessage={props.errors.remarks?.message}
        />
      </MenuWrapper>
      <MenuWrapper>
        <Title02 divName={"상품 설명"}></Title02>
        <ContentsDetailInput
          placeholder="상품을 설명해주세요"
          {...props.register("contents")}
        />
        <Error>{props.errors.contents?.message}</Error>
      </MenuWrapper>
      <MenuWrapper>
        <Title02 divName={"판매 가격"}></Title02>
        <Input03
          type="text"
          inputName={"판매가격을 입력해주세요"}
          register={{ ...props.register("price") }}
          errorMessage={props.errors.price?.message}
        />
      </MenuWrapper>
      <MenuWrapper>
        <Title02 divName={"태그 입력"}></Title02>
        <Input03
          type="text"
          inputName={"#태그 #태그 #태그"}
          register={{ ...props.register("tags") }}
          errorMessage={props.errors.tags?.message}
        />
      </MenuWrapper>
      <RowWrapper>
        <LocationWrapper>
          <Title02 divName={"거래위치"}></Title02>
          <LocationMap></LocationMap>
          <Title02 divName={"사진 첨부"}></Title02>
          <UploadWrapper>
            {new Array(4).fill(1).map((data, index) => (
              <Upload01
                key={`${data}_${index}`}
                imgUrl={data}
                onChangeFileUrl={props.onChangeFileUrl}
              />
            ))}
          </UploadWrapper>
          <Title02 divName={"메인 사진 설정"}></Title02>
        </LocationWrapper>
        <AddressWrapper>
          <Title02 divName={"GPS"}></Title02>
          <SubWrapper>
            <Location></Location>
            <Location></Location>
          </SubWrapper>
          <Title02 divName={"주소"}></Title02>
          <AddressInput></AddressInput>
          <AddressInput></AddressInput>
        </AddressWrapper>
      </RowWrapper>
      <form onSubmit={props.handleSubmit(props.onClickItem)}>
        <Button01 buttonName={"등록하기"} isActive={props.isActive}></Button01>
      </form>
    </MainWrapper>
  );
};

export default MarketWriteUI;
