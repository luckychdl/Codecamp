import Upload01UI from "./Upload01.presenter";
import { ChangeEvent, useRef, useState, useEffect } from "react";
import { checkValidationFile } from "../../../commons/libraries/validations";
// import { useForm } from "react-hook-form";

// interface IUpload01Props {
//   imgUrl: string;
//   index: number;
//   onChangeFileUrl: (imgUrl: string, index: number) => void;
// }
function Upload01(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  // const [imgUrls, setImgUrls] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const [file, setFile] = useState([]);
  // const [fileEdit, setFileEdit] = useState([]);
  // const { register, handleSubmit } = useForm();

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (checkValidationFile(file));

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      const imgArr = [...imgUrl];
      imgArr.push(e.target?.result);
      setImgUrl(imgArr);
      const newImg = [...file];
      newImg.push(file);
      setFile(newImg);
      console.log("1", imgUrl, "2", imgArr, "3", file);
      props.onChangeFileUrl(imgUrl, props.index);
      props.onChangeFiles(file, props.index);
    };
  };

  useEffect(() => {
    if (props.data?.fetchUseditem.images.length)
      setImgUrl(
        [...props.data?.fetchUseditem.images].map(
          (data) => `https://storage.googleapis.com/${data}`
        )
      );
  }, [props.data?.fetchUseditem.images]);

  // console.log("414141", props.data);

  const onClickBox = (e) => {
    fileRef.current?.click(e.target.id);
  };
  const onClickDeleteImg = (index) => {
    const imgArr = [...imgUrl];
    imgArr.splice(index, 1);
    setImgUrl(imgArr);
  };
  return (
    <>
      <Upload01UI
        onChangeFile={onChangeFile}
        onClickBox={onClickBox}
        onClickDeleteImg={onClickDeleteImg}
        // imgUrls={props.imgUrls}
        file={file}
        imgUrl={imgUrl}
        fileRef={fileRef}
      />
    </>
  );
}

export default Upload01;
