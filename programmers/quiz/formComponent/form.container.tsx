import { useMutation } from "@apollo/client";
import ReactHookFormUI from "./form.presenter";
import { LOGIN_USER } from "./form.queries";
import { useForm } from "react-hook-form";
import { schema } from "./form.validation";
import { yupResolver } from "@hookform/resolvers/yup";

const ReactHookForm = () => {
  const [loginUser] = useMutation(LOGIN_USER);
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickLogin = async (data) => {
    try {
      await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      alert("로그인완료!");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <ReactHookFormUI
      onClickLogin={onClickLogin}
      register={register}
      handleSubmit={handleSubmit}
      isActive={formState.isValid}
      errors={formState.errors}
    />
  );
};

export default ReactHookForm;
