import {
  MainWrapper,
  ProfileWrapper,
  Profile,
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
          {props.userData?.fetchUserLoggedIn._id === props.data?.user._id ? (
            <>
              <Icon src="/FreeBoard/mode.svg" />
              <Icon
                src="/FreeBoard/clear.svg"
                id={props.data._id}
                onClick={props.onClickDeleteAnswer}
              />
            </>
          ) : (
            <></>
          )}
        </IconWrapper>
      </SubWrapper>
      {/* </InfoWrapper> */}
    </MainWrapper>
  );
};

export default CommentAnswerListUIItem;
