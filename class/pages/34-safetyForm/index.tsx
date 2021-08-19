import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const SafetyPage = () => {
  const [createBoard] = useMutation(CREATE_BOARD);
  const { handleSubmit, formState } = useForm();
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const onChangeInput = (key) => (event) => {
    setInputs((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: { ...inputs },
        },
      });
      console.log(result);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <div>
          작성자: <input type="text" onChange={onChangeInput("writer")} />
        </div>
        <div>
          비밀번호: <input type="text" onChange={onChangeInput("password")} />
        </div>
        <div>
          제목: <input type="text" onChange={onChangeInput("title")} />
        </div>
        <div>
          내용: <input type="text" onChange={onChangeInput("contents")} />
        </div>
        <button disabled={formState.isSubmitting}>등록하기</button>
      </form>
    </>
  );
};

export default SafetyPage;
