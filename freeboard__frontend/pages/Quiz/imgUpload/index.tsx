import { ChangeEvent, useState, useRef } from "react";
import { gql, useMutation } from "@apollo/client";
import { PlusCircleOutlined } from "@ant-design/icons";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImgUpload() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [imgUpload, setImgUpload] = useState();
  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file?.size) {
      alert("파일이 없습니다.");
      return;
    }
    if (file?.size > 5 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다. (제한: 5MB)");
      return;
    }
    if (!file?.type.includes("png") && !file?.type.includes("jpeg")) {
      alert("png 또는 jpeg 파일만 업로드 가능합니다.");
      return;
    }

    try {
      const result = await uploadFile({
        variables: { file: file },
      });
      console.log(result.data.uploadFile.url);
      setImgUpload(result.data.uploadFile.url);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickBox = () => {
    fileRef.current?.click();
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickInput = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
            images: [imgUpload],
          },
        },
      });
      console.log(result.data.createBoard._id);
      alert("게시물이 등록되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <button onClick={onClickInput}>버튼</button>
      <br />
      <input type="text" onChange={onChangeWriter} />
      <br />
      <input type="password" onChange={onChangePassword} />
      <br />
      <input type="text" onChange={onChangeTitle} />
      <br />
      <input type="text" onChange={onChangeContents} />
      <br />
      {/* <img src={`https://storage.googleapis.com/${imgUpload}`} /> */}
      <br />
      <input
        ref={fileRef}
        type="file"
        onChange={onChangeFile}
        style={{ display: "none" }}
      />
      <PlusCircleOutlined
        onClick={onClickBox}
        style={{
          fontSize: "70px",
          width: "200px",
          height: "200px",
          color: "#08c",
        }}
      />
    </>
  );
}
