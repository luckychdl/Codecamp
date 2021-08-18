import {
  MainWrapper,
  TitleWrapper,
  Image,
  Text,
  ButtonWrapper,
  TextWrapper,
} from "./commentAnswerEdit.styles";
import Button02 from "../../../../commons/buttons/button02_Submit";
import TextArea01 from "../../../../commons/textAreas/textAreaComment01";

const CommentAnswerEditUI = (props: any) => {
  return (
    <MainWrapper>
      <form onSubmit={props.handleSubmit(props.onClickUpdateCommentAnswer)}>
        <TextWrapper>
          <TitleWrapper>
            <Image src="/FreeBoard/subdirectoryArrow.svg"></Image>
          </TitleWrapper>
          <TextArea01
            register={{ ...props.register("contents") }}
            textareaName={"답글을 등록해주세요."}
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

export default CommentAnswerEditUI;
