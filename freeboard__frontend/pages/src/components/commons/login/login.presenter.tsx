import { ChangeEvent, FormEvent } from "react";
import Input01 from "../inputs/input01.login";
import {
  MainWrapper,
  SubWrapper,
  Logo,
  LoginButton,
  FooterWrapper,
  SignInButton,
} from "./login.styles";

interface ILoginPageUIProps {
  onClickLogin: () => void;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickMoveToSignin: () => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
export default function LoginPageUI(props: ILoginPageUIProps) {
  return (
    <>
      <form onSubmit={props.handleSubmit(props.onClickLogin)}>
        <MainWrapper>
          <SubWrapper>
            <Logo src="/FreeBoard/logoicon.jpeg"></Logo>

            <Input01
              inputName={"이메일"}
              type="text"
              register={{ ...props.register("email") }}
              errorMessage={props.errors.email?.message}
            />
            <Input01
              inputName={"비밀번호"}
              type="password"
              register={{ ...props.register("password") }}
              errorMessage={props.errors.password?.message}
            />
            <LoginButton>로그인</LoginButton>
          </SubWrapper>
          <FooterWrapper>
            <SignInButton>비밀번호 재설정</SignInButton>
            <SignInButton onClick={props.onClickMoveToSignin}>
              회원가입
            </SignInButton>
          </FooterWrapper>
        </MainWrapper>
      </form>
    </>
  );
}