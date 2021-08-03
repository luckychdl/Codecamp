import { ChangeEvent } from "react";
import {
  MainWrapper,
  SubWrapper,
  Logo,
  InputBox1,
  InputBox2,
  LoginButton,
  FooterWrapper,
  SignInButton,
} from "./login.styles";

interface ILoginPageUIProps {
  onClickLogin: () => void;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}
export default function LoginPageUI(props: ILoginPageUIProps) {
  return (
    <MainWrapper>
      <SubWrapper>
        <Logo src="/FreeBoard/logoicon.jpeg"></Logo>
        <InputBox1
          placeholder="이메일"
          type="text"
          onChange={props.onChangeEmail}
        ></InputBox1>
        <InputBox2
          placeholder="비밀번호"
          type="password"
          onChange={props.onChangePassword}
        ></InputBox2>
        <LoginButton onClick={props.onClickLogin}>로그인</LoginButton>
      </SubWrapper>
      <FooterWrapper>
        <SignInButton>비밀번호 재설정</SignInButton>
        <SignInButton>회원가입</SignInButton>
      </FooterWrapper>
    </MainWrapper>
  );
}
