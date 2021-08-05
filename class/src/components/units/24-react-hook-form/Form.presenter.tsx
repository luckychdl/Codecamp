import Button01 from "../../commons/buttons/button01";
import Input01 from "../../commons/inputs/input01";
// import { MyButton } from "./Form.styles";

const FormUI = (props) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <div>폼화면입니다</div>
      {/* 이메일:
      <input type="text" {...props.register("email")} />
      <div style={{ color: "red" }}>{props.errors.email?.message}</div> */}
      {/* 비밀번호:
      <input type="password" {...props.register("password")} />
      <div style={{ color: "red" }}>{props.errors.password?.message}</div> */}
      <Input01
        inputName="이메일"
        type="text"
        register={{ ...props.register("email") }}
        errorMessage={props.errors.email?.message}
      />
      <Input01
        inputName="비밀번호"
        type="password"
        register={{ ...props.register("password") }}
        errorMessage={props.errors.password?.message}
      />
      <Button01
        buttonName="로그인하기"
        type="submit"
        isActive={props.isActive}
      ></Button01>
      {/* <MyButton type="submit" isActive={props.isActive}>
        로그인하기
      </MyButton> */}
    </form>
  );
};

export default FormUI;
