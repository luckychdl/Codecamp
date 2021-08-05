import * as yup from "yup";
export const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다.")
    .required("이메일은 필수 입력입니다."),
  password: yup
    .string()
    .min(8, "비밀번호는 8자 이상이어야 합니다.")
    .max(15, "비밀번호는 15자 이하여야 합니다.")
    .required("비밀번호는 필수 입력입니다."),
});
