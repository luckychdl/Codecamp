import {
  MainWrapper,
  TitleWrapper,
  Image,
  Text,
  ButtonWrapper,
} from "./commentAnswer.styles";
import Button02 from "../../../commons/buttons/button02_Submit";
import Title02 from "../../../commons/titles/title02.marketWrite";
import TextArea01 from "../../../commons/textAreas/textAreaComment01";
const MarketCommentWriteUI = (props: any) => {
  return (
    <MainWrapper>
      <form onSubmit={props.handleSubmit(props.onClickSubmitComment)}>
        <TitleWrapper>
          <Image src="/FreeBoard/review.svg"></Image>
          <Title02 divName={"문의하기"}></Title02>
        </TitleWrapper>
        <TextArea01
          register={{ ...props.register("contents") }}
          textareaName={
            "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          }
        />
        <ButtonWrapper>
          <Text>0/200</Text>
          <Button02 buttonName={"등록하기"}></Button02>
        </ButtonWrapper>
      </form>
    </MainWrapper>
  );
};

export default MarketCommentWriteUI;
