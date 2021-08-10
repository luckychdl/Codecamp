import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
// import ReactQuill from "react-quill";
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

const WebEditorPage = () => {
  const router = useRouter();
  const { register, handleSubmit, setValue } = useForm();
  const [createBoard] = useMutation(CREATE_BOARD);
  const onClickButton = async (data: any) => {
    try {
      const result = await createBoard({
        variables: { createBoardInput: { ...data } },
      });
      Modal.success({
        content: "게시물 등록 !!",
      });
      router.push(`/27-web-editor-detail/${result.data.createBoard._id}`);
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };

  const onChangeContents = (val) => {
    setValue("contents", val);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onClickButton)}>
        작성자: <input type="text" {...register("writer")} />
        <br />
        비밀번호: <input type="password" {...register("password")} />
        <br />
        제목: <input type="text" {...register("title")} />
        <br />
        {/* 내용: <textarea {...register("contents")} /> */}
        내용:
        <ReactQuill
          style={{ width: "300", height: "700" }}
          onChange={onChangeContents}
        />
        <br />
        <button>게시물 등록하기</button>
      </form>
    </>
  );
};
export default WebEditorPage;
