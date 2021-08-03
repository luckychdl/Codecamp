import {
  MainWrapper,
  Title,
  Signin,
  EmailWrapper,
  SigninEmail,
  MainTitle,
  SubTitle,
  EmailAdress,
  TermsWrapper,
  TotalTerms,
  SubTerms,
  TermsSubWrapper,
  TermsText,
  TermsSubText,
  SigninButton,
  SubText,
  FooterWrapper,
  MoveLogIn,
} from "./signin.styles";
import { ChangeEvent } from "react";
import { Select } from "antd";

const OPTION_VALUES = [
  "naver.com", //
  "daum.net",
  "google.com",
  "nate.com",
];

interface ISigninPageUIProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignin: () => void;
  onClickMoveToLogin: () => void;
  onClickCheck: () => void;
  check: boolean;
}
export default function SigninPageUI(props: ISigninPageUIProps) {
  const { Option } = Select;
  return (
    <MainWrapper>
      <MainTitle>회원가입</MainTitle>
      <Title>이메일</Title>
      <EmailWrapper>
        <SigninEmail
          placeholder="이메일"
          type="text"
          onChange={props.onChangeEmail}
        />
        <EmailAdress> @ </EmailAdress>
        <Select
          showSearch
          // onChange={props.onChangeSelectEmail}
          style={{
            width: 215,
            height: 50,
            borderRadius: 4,
            outlineColor: "#35C5F0",
            border: "1px solid #bdbdbd",
            marginBottom: 15,
            fontSize: 14,
            paddingTop: 7,
            color: "#757575",
          }}
          bordered={false}
          placeholder="도메인을 선택하세요."
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          {OPTION_VALUES.map((data, index) => (
            <Option key={index + 1} value={data}>
              {data}
            </Option>
          ))}
        </Select>
        {/* <SigninEmail type="text" /> */}
      </EmailWrapper>
      <Title>비밀번호</Title>
      <SubTitle>
        영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
      </SubTitle>
      <Signin
        placeholder="비밀번호"
        type="password"
        onChange={props.onChangePassword}
      />
      <Title>비밀번호확인 </Title>
      <Signin placeholder="비밀번호 확인" type="password" />
      <Title>닉네임</Title>
      <SubTitle>
        다른 유저와 겹치지 않는 별명을 입력해주세요.( 2~15자 )
      </SubTitle>
      <Signin
        placeholder="별명 (2 ~ 15자)"
        type="text"
        onChange={props.onChangeName}
      />
      <Title>약관동의</Title>
      <TermsWrapper>
        <TermsSubWrapper>
          <TotalTerms
            type="checkbox"
            onClick={props.onClickCheck}
            checked={props.check}
          />
          <TermsText>전체동의</TermsText>
        </TermsSubWrapper>
        <TermsSubWrapper>
          <SubTerms type="checkbox" checked={props.check} />
          <TermsSubText>만 14세 이상입니다.</TermsSubText>
          <SubText>(필수)</SubText>
        </TermsSubWrapper>
        <TermsSubWrapper>
          <SubTerms type="checkbox" checked={props.check} />
          <TermsSubText>이용약관</TermsSubText>
          <SubText>(필수)</SubText>
        </TermsSubWrapper>
        <TermsSubWrapper>
          <SubTerms type="checkbox" checked={props.check} />
          <TermsSubText>개인정보수집 및 이용동의</TermsSubText>
          <SubText>(필수)</SubText>
        </TermsSubWrapper>
        <TermsSubWrapper>
          <SubTerms type="checkbox" checked={props.check} />
          <TermsSubText>이벤트, 프로모션 알림 메일 및 SMS 수신</TermsSubText>
        </TermsSubWrapper>
      </TermsWrapper>
      <SigninButton onClick={props.onClickSignin}>회원가입하기</SigninButton>
      <FooterWrapper>
        <TermsSubText>이미 아이디가 있으신가요?</TermsSubText>
        <MoveLogIn onClick={props.onClickMoveToLogin}>로그인</MoveLogIn>
      </FooterWrapper>
    </MainWrapper>
  );
}
