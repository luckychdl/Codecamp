import { useMutation } from "@apollo/client";
import UpdateUserUI from "./updateUser.presenter";
import { RESET_USER_PASSWORD } from "./updateUser.queries";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
const UpdateUser = () => {
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);
  const { register, handleSubmit } = useForm();

  const onClickReset = async (data) => {
    try {
      await resetUserPassword({
        variables: { password: String(data.password) },
      });
      Modal.success({
        content: "비밀번호가 변경되었습니다.",
      });
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };
  return (
    <UpdateUserUI
      register={register}
      handleSubmit={handleSubmit}
      onClickReset={onClickReset}
    />
  );
};
export default UpdateUser;
