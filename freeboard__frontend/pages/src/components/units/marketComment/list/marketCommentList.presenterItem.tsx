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
import MarketCommentWrite from "../write/marketCommentWrite.container";
import CommentAnswerEdit from "../commentAnswer/commentAnswerEdit/commentAnswerEdit.container";
import MarketCommentWriteEdit from "../write/marketCommentWriteEdit/marketCommentWriteEdit.container";
interface IMarketCommentListUIItemProps {
  data: IUseditemQuestion;
}
const MarketCommentListUIItem = (props: IMarketCommentListUIItemProps) => {
  const [isAnswer, setIsAnswer] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const onClickAnswer = () => {
    console.log("댓글 수정하기");
    setIsAnswer((prev) => !prev);
  };
  const onClickEdit = () => {
    setIsEdit((prev) => !prev);
  };
  const onClickComment = () => {
    setIsComment((prev) => !prev);
    console.log(isComment);
  };
  return (
    <>
      <MainWrapper>
        {!isAnswer ? (
          <>
            <ProfileWrapper>
              <Profile src="/FreeBoard/Profile.png" />
              <InfoWrapper>
                <SubWrapper>
                  <NameWrapper>
                    <Name>{props.data.user.name}</Name>
                    <Contents>{props.data.contents}</Contents>
                  </NameWrapper>
                  <IconWrapper>
                    <Icon
                      src="/FreeBoard/question.svg"
                      onClick={onClickComment}
                    />
                    {props.userData?.fetchUserLoggedIn._id !==
                    props.data?.user._id ? (
                      <></>
                    ) : (
                      <>
                        <Icon
                          src="/FreeBoard/mode.svg"
                          onClick={onClickAnswer}
                        />
                        <Icon
                          src="/FreeBoard/clear.svg"
                          id={props.data._id}
                          onClick={props.onClickDelete}
                        />
                      </>
                    )}
                  </IconWrapper>
                </SubWrapper>
                <CreatedAt>{getDate(props.data.updatedAt)}</CreatedAt>
              </InfoWrapper>
            </ProfileWrapper>

            <CommentAnswerList
              data={props.data}
              setIsComment={setIsComment}
              isComment={isComment}
            />
            {isComment ? (
              <CommentAnswer data={props.data} setIsComment={setIsComment} />
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            <MarketCommentWriteEdit
              data={props.data}
              setIsAnswer={setIsAnswer}
            />
          </>
        )}
      </MainWrapper>
    </>
  );
};
export default MarketCommentListUIItem;
