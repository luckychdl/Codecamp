import {
  MainWrapper,
  ProfileWrapper,
  Profile,
  InfoWrapper,
  Name,
  Contents,
  SubWrapper,
  NameWrapper,
  Icon,
  IconWrapper,
  Arrow,
} from "./commentAnswerList.styles";
const CommentAnswerListUIItem = (props: any) => {
  return (
    <MainWrapper>
      <ProfileWrapper>
        <Arrow src="/FreeBoard/subdirectoryArrow.svg" />
        <Profile src="/FreeBoard/Profile.png" />
      </ProfileWrapper>
      {/* <InfoWrapper> */}
      <SubWrapper>
        <NameWrapper>
          <Name>{props.data.user.name}</Name>
          <Contents>{props.data.contents}</Contents>
        </NameWrapper>
        <IconWrapper>
          <Icon src="/FreeBoard/question.svg" />
          <Icon src="/FreeBoard/mode.svg" />
          <Icon src="/FreeBoard/clear.svg" />
        </IconWrapper>
      </SubWrapper>
      {/* </InfoWrapper> */}
    </MainWrapper>
  );
};

export default CommentAnswerListUIItem;
