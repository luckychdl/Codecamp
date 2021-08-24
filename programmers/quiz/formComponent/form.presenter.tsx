import Button01 from "../buttons/button01";
import Input01 from "../inputs/input01";

const ReactHookFormUI = (props) => {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <div>로그인페이지</div>
      <Input01
        type="text"
        inputName="이메일"
        register={{ ...props.register("email") }}
        errorMessage={props.errors.email?.message}
      />
      <Input01
        type="password"
        inputName="비밀번호"
        register={{ ...props.register("password") }}
        errorMessage={props.errors.password?.message}
      />

      {/* 이메일: <input type="text" {...props.register("email")} /> */}
      {/* <Error>{props.errors.email?.message}</Error> */}
      {/* 비밀번호: <input type="password" {...props.register("password")} /> */}
      {/* <Error>{props.errors.password?.message}</Error> */}
      <Button01
        type="submit"
        buttonName="로그인하기"
        isActive={props.isActive}
      ></Button01>
      {/* <MyButton isActive={props.isActive}>로그인하기</MyButton> */}
    </form>
  );
};

export default ReactHookFormUI;
