import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImgPreview() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imgUrl, setImgUrl] = useState([]);
  const [inputs, setInputs] = useState("");
  const [file, setFile] = useState();

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file?.size) {
      alert("파일이 없습니다.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("파일 사이즈가 너무 큽니다. (제한: 5MB)");
      return;
    }
    if (!file?.type.includes("png") && !file?.type.includes("jpeg")) {
      alert("png 또는 jpeg 파일만 업로드 가능합니다.");
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      const imgArr = [...imgUrl];
      imgArr.push(data.target.result);

      setImgUrl(imgArr);

      setFile(file);
    };
  };

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
  };

  const onClickSubmit = async () => {
    try {
      const resultFiles = await Promise.all([
        uploadFile({ variables: { file: file } }),
        uploadFile({ variables: { file } }),
        uploadFile({ variables: { file } }),
      ]);

      const newImages = resultFiles.map((data) => data.data.uploadFile.url);

      const result = await createBoard({
        variables: {
          createBoardInput: {
            ...inputs,
            images: [...newImages],
          },
        },
      });
      console.log(result.data.createBoard._id);
      alert("게시물이 등록되었습니다.");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
      <br />
      <input name="writer" type="text" onChange={onChangeInputs} />
      <br />
      <input name="password" type="password" onChange={onChangeInputs} />
      <br />
      <input name="title" type="text" onChange={onChangeInputs} />
      <br />
      <input name="contents" type="text" onChange={onChangeInputs} />
      <br />
      {imgUrl.map((data, index) => (
        <div key={index}>
          <img src={data} />
        </div>
      ))}
      <input type="file" id="0" onChange={onChangeFile} />

      <br />
      {/* <img src={imgUrl[0]} />
      <input type="file" id="0" onChange={onChangeFile} />
      <br />
      <img src={imgUrl[1]} />
      <input type="file" id="1" onChange={onChangeFile} />
      <br />
      <img src={imgUrl[2]} />
      <input type="file" id="2" onChange={onChangeFile} /> */}
      <br />
    </>
  );
}
