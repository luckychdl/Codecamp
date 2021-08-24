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
import { IUseditemQuestion } from "../../../../commons/types/generated/types";
import { useState } from "react";
import MarketCommentWriteEdit from "../write/marketCommentWriteEdit/marketCommentWriteEdit.container";
interface IMarketCommentListUIItemProps {
  data: IUseditemQuestion;
  onClickDelete: () => void;
}
const MarketCommentListUIItem = (props: IMarketCommentListUIItemProps) => {
  const [isAnswer, setIsAnswer] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const onClickAnswer = () => {
    setIsAnswer((prev) => !prev);
  };

  const onClickComment = () => {
    setIsComment((prev) => !prev);
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
                    {/* @ts-ignore */}
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
