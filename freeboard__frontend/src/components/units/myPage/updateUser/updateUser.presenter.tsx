import {
  MainWrapper,
  Title,
  PresentPassword,
  PresentPasswordInput,
  NewPassword,
  NewPasswordInput,
  ConfirmNewPassword,
  ConfirmNewPasswordInput,
  UpdateButton,
  SubWrapper,
  Wrapper,
} from "./updateUser.styles";
const UpdateUserUI = (props) => {
  return (
    <form onSubmit={props.handleSubmit(props.onClickReset)}>
      <MainWrapper>
        <Title>비밀번호 변경</Title>
        <SubWrapper>
          <PresentPassword>현재 비밀번호</PresentPassword>

          <PresentPasswordInput />
        </SubWrapper>
        <SubWrapper>
          <NewPassword>새 비밀번호</NewPassword>

          <NewPasswordInput {...props.register("password")} />
        </SubWrapper>
        <SubWrapper>
          <ConfirmNewPassword>새 비밀번호 확인</ConfirmNewPassword>
          <ConfirmNewPasswordInput />
        </SubWrapper>
        <Wrapper>
          <UpdateButton>비밀번호 변경</UpdateButton>
        </Wrapper>
      </MainWrapper>
    </form>
  );
};
export default UpdateUserUI;
