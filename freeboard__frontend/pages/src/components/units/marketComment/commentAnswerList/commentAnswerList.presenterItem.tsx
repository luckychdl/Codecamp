import { useState } from "react";
import CommentAnswerEdit from "../commentAnswer/commentAnswerEdit/commentAnswerEdit.container";
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
  const [isEdit, setIsEdit] = useState(false);
  const onClickIsEdit = () => {
    setIsEdit((prev) => !prev);
  };
  return (
    <>
      <MainWrapper>
        <ProfileWrapper>
          <Arrow src="/FreeBoard/subdirectoryArrow.svg" />
          <Profile src="/FreeBoard/Profile.png" />
        </ProfileWrapper>
        <SubWrapper>
          <NameWrapper>
            <Name>{props.data.user.name}</Name>
            <Contents>{props.data.contents}</Contents>
          </NameWrapper>
          <IconWrapper>
            {props.userData?.fetchUserLoggedIn._id === props.data?.user._id ? (
              <>
                <Icon
                  src="/FreeBoard/mode.svg"
                  id={props.data._id}
                  onClick={onClickIsEdit}
                />
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
      </MainWrapper>
      {isEdit ? (
        <CommentAnswerEdit
          data={props.data}
          dataId={props.dataId}
          setIsEdit={setIsEdit}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default CommentAnswerListUIItem;
