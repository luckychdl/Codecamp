import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import router from "next/router";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const EditorPage = () => {
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async (data) => {
    try {
      const result = await createBoard({
        variables: { createBoardInput: { ...data } },
      });
      Modal.success({
        content: "게시물 등록 !!",
      });
      router.push(`/quiz/editorDetail/${result.data.createBoard._id}`);
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };
  const onChangeValue = (val) => {
    setValue("contents", val);
  };
  const { register, handleSubmit, setValue } = useForm();
  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자: <input type="text" {...register("writer")} />
        <br />
        비밀번호: <input type="password" {...register("password")} />
        <br />
        제목: <input type="text" {...register("title")} />
        <br />
        내용: <ReactQuill onChange={onChangeValue} />
        <br />
        <button>등록하기</button>
      </form>
    </>
  );
};
export default EditorPage;
