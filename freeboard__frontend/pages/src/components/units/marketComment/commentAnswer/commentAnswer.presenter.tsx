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
} from "./commentAnswer.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IUseditemQuestion } from "../../../../../../src/commons/types/generated/types";
interface IMarketCommentListUIItemProps {
  data: IUseditemQuestion;
}
const CommentAnswerUI = (props: IMarketCommentListUIItemProps) => {
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
              <Icon src="/FreeBoard/edit.png" />
              <Icon src="/FreeBoard/delete.png" />
            </IconWrapper>
          </SubWrapper>
          <CreatedAt>{getDate(props.data.createdAt)}</CreatedAt>
        </InfoWrapper>
      </ProfileWrapper>
    </MainWrapper>
  );
};
export default CommentAnswerUI;