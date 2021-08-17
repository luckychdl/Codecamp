import {
  MainWrapper,
  ProfileWrapper,
  Profile,
  InfoWrapper,
  Name,
  Contents,
  CreatedAt,
  SubWrapper,
  NameWrapper,
  Icon,
  IconWrapper,
} from "./marketCommentList.styles";
import CommentAnswer from "../commentAnswer/commentAnswer.container";
import CommentAnswerList from "../commentAnswerList/commentAnswerList.container";

import { getDate } from "../../../../commons/libraries/utils";
import { IUseditemQuestion } from "../../../../../../src/commons/types/generated/types";
import { useState } from "react";
interface IMarketCommentListUIItemProps {
  data: IUseditemQuestion;
}
const MarketCommentListUIItem = (props: IMarketCommentListUIItemProps) => {
  const [isAnswer, setIsAnswer] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const onClickAnswer = () => {
    setIsAnswer(true);
    setIsEdit(false);
    console.log(isAnswer);
  };
  const onClickEdit = () => {
    setIsEdit(true);
    setIsAnswer(false);
  };
  return (
    <MainWrapper>
      <ProfileWrapper>
        <Profile src="/FreeBoard/Profile.png" />
        <InfoWrapper>
          <SubWrapper>
            <NameWrapper>
              <Name>{props.data.user.name}</Name>
              <Contents>{props.data.contents}</Contents>
            </NameWrapper>
            <IconWrapper>
              <Icon src="/FreeBoard/question.svg" onClick={onClickAnswer} />
              <Icon src="/FreeBoard/mode.svg" onClick={onClickEdit} />
              <Icon src="/FreeBoard/clear.svg" />
            </IconWrapper>
          </SubWrapper>
          <CreatedAt>{getDate(props.data.createdAt)}</CreatedAt>
        </InfoWrapper>
      </ProfileWrapper>
      <CommentAnswerList data={props.data} />
      {isEdit ? <CommentAnswer data={props.data} isEdit={isEdit} /> : <></>}
      {isAnswer ? (
        <CommentAnswer data={props.data} setIsAnswer={setIsAnswer} />
      ) : (
        <></>
      )}
    </MainWrapper>
  );
};
export default MarketCommentListUIItem;
