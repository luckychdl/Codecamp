import FormUI from "./Form.presenter";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { LOGIN_USER } from "./Form.queries";
import { schema } from "./Form.validation";

import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [loginUser] = useMutation(LOGIN_USER);
  const onSubmit = async (data) => {
    try {
      const result = await loginUser({
        variables: { ...data },
      });

      console.log(result.data?.loginUser.accessToken);
      Modal.success({
        content: "로그인완료",
      });
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };

  return (
    <FormUI
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isActive={formState.isValid}
      errors={formState.errors}
    />
  );
};
export default Form;
