import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식이 올바르지 않습니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .min(8, "비밀번호는 8자 이상으로 입력해주세요.")
    .max(16, "비밀번호는 16자 이하로 입력해주세요.")
    .required("비밀번호를 입력해주세요."),
});
export const schemaSign = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식이 올바르지 않습니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .min(8, "비밀번호는 8자 이상으로 입력해주세요.")
    .max(16, "비밀번호는 16자 이하로 입력해주세요.")
    .required("비밀번호를 입력해주세요."),
  confirmPassword: yup
    .string()
    .min(8, "비밀번호는 8자 이상으로 입력해주세요.")
    .max(16, "비밀번호는 16자 이하로 입력해주세요.")
    .required("비밀번호를 입력해주세요."),
  name: yup
    .string()
    .min(2, "닉네임은 2자 이상으로 입력해주세요.")
    .max(15, "닉네임은 15자 이하로 입력해주세요.")
    .required("닉네임을 입력해주세요."),
});
export const schemaWrite = yup.object().shape({
  name: yup.string().required("상품명을 입력해주세요."),
  remarks: yup.string().required("상품 요약을 입력해주세요."),
  contents: yup.string().required("내용을 입력해주세요."),
  price: yup.string().min(0).required("판매 가격을 입력해주세요."),
  tags: yup.string().required("태그를 입력해주세요."),
});
