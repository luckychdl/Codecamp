import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
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

export default function ImagePreviewPage() {
  const [imgUrl, setImgUrl] = useState();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [file, setFile] = useState();
  const [contents, setContents] = useState("");
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file?.size) {
      alert("파일이 없습니다");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("파일이 너무 큽니다. (제한: 5MB");
      return;
    }
    if (!file?.type.includes("png") && !file?.type.includes("jpeg")) {
      alert("잘못된 형식의 파일입니다.");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImgUrl(data.target.result); // 임시주소
      setFile(file);
    };
    // uploadFile
    // 단지 미리보기 작업만 진행
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

  const onClickSubmit = async () => {
    try {
      const resultFiles = await Promise.all([
        uploadFile({ variables: { file } }),
        uploadFile({ variables: { file } }),
        uploadFile({ variables: { file } }),
        uploadFile({ variables: { file } }),
        uploadFile({ variables: { file } }),
      ]);
      console.log(resultFiles);
      // const image1 = resultFiles[0].data.uploadFile.url;
      // const image2 = resultFiles[1].data.uploadFile.url;
      // const image3 = resultFiles[2].data.uploadFile.url;

      const newImages = resultFiles.map((data) => data.data.uploadFile.url);

      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
            images: [newImages],
          },
        },
      });
      console.log(result.data.createBoard._id);
      alert("게시물이 등록되었습니다");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <button onClick={onClickSubmit}>게시물 등록하기</button>
      <br />
      <input type="text" onChange={onChangeWriter} />
      <br />
      <input type="password" onChange={onChangePassword} />
      <br />
      <input type="text" onChange={onChangeTitle} />
      <br />
      <input type="text" onChange={onChangeContents} />
      <br />
      <img src={imgUrl} />
      <input type="file" id="1" onChange={onChangeFile} />
      <br />
      <img src={imgUrl} />
      <input type="file" id="2" onChange={onChangeFile} />

      <img src={imgUrl} />
      <input type="file" id="3" onChange={onChangeFile} />
    </>
  );
}
