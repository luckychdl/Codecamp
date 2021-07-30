import Upload01UI from "./Upload01.presenter";
import { ChangeEvent, useRef, useState } from "react";
import { checkValidationFile } from "../../../commons/libraries/validations";

interface IUpload01Props {
  imgUrl: string;
  index: number;
  onChangeFileUrl: (imgUrl: string, index: number) => void;
}
export default function Upload01(props: IUpload01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  // const [imgUrls, setImgUrls] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  // const [file, setFile] = useState("");

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (checkValidationFile(file));

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      const imgArr = [...imgUrl];
      imgArr.push(data.target?.result);

      // console.log(imgArr);
      setImgUrl(imgArr);
      // setFile(file.target?.result);

      props.onChangeFileUrl(file, props.index);
    };
  };
  const onClickBox = () => {
    fileRef.current?.click();
  };

  return (
    <>
      <Upload01UI
        onChangeFile={onChangeFile}
        onClickBox={onClickBox}
        // imgUrls={props.imgUrls}
        imgUrl={imgUrl}
        fileRef={fileRef}
      />
    </>
  );
}
