import {
  MainWrapper,
  TitleWrapper,
  Image,
  Text,
  ButtonWrapper,
  TextWrapper,
  ClearBtn,
  ClearWrapper,
  SubWrapper,
} from "./marketCommentWriteEdit.styles";
import Button02 from "../../../../commons/buttons/button02_Submit";
import Title02 from "../../../../commons/titles/title02.marketWrite";
import TextArea01 from "../../../../commons/textAreas/textAreaComment01";
const MarketCommentWriteEditUI = (props: any) => {
  return (
    <MainWrapper>
      <form onSubmit={props.handleSubmit(props.onClickUpdateComment)}>
        <TextWrapper>
          <SubWrapper>
            <TitleWrapper>
              <Image src="/FreeBoard/review.svg"></Image>
              <Title02 divName={"문의하기"}></Title02>
            </TitleWrapper>
            <ClearWrapper>
              <ClearBtn
                src="/FreeBoard/clearBtn.svg"
                onClick={props.onClickClear}
              ></ClearBtn>
            </ClearWrapper>
          </SubWrapper>
          <TextArea01
            register={{ ...props.register("contents") }}
            textareaName={
              "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            }
          />
        </TextWrapper>
        <ButtonWrapper>
          <Text>0/200</Text>
          <Button02 buttonName={"수정하기"}></Button02>
        </ButtonWrapper>
      </form>
    </MainWrapper>
  );
};

export default MarketCommentWriteEditUI;
