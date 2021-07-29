import Upload01UI from "./Upload01.presenter";
import { ChangeEvent, useRef, useState } from "react";

interface IUpload01Props {
  imgUrl: string;
  index: number;
  onChangeFileUrl: (imgUrl: string, index: number) => void;
}
export default function Upload01(props: IUpload01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  // const [imgUrls, setImgUrls] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [file, setFile] = useState("");

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
      imgArr.push(data.target?.result);

      // console.log(imgArr);
      setImgUrl(imgArr);
      setFile(file.target?.result);

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
