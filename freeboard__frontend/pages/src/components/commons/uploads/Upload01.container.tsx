import Upload01UI from "./Upload01.presenter";
import { ChangeEvent, useRef, useState } from "react";
import { checkValidationFile } from "../../../commons/libraries/validations";
// import { useForm } from "react-hook-form";

interface IUpload01Props {
  index: number;
  data?: any;
  onChangeFiles: (file: File, index: number) => void;
}

function Upload01(props: IUpload01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState("");

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file: any = event.target.files?.[0];
    if (!checkValidationFile(file)) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImgUrl(data.target?.result as string);
      props.onChangeFiles(file, props.index);
    };
  }

  // useEffect(() => {
  //   const newImgUrl = props.data?.fetchUseditem.images
  //     ?.map((data: any) => `https://storage.googleapis.com/${data}`)
  //     .concat(imgUrl)
  //     .slice(0, 4);
  //   console.log("imgUrl", newImgUrl);

  //   setImgUrl(newImgUrl);
  // }, [props.data]);
  const onClickBox = () => {
    fileRef.current?.click();
  };
  return (
    <>
      <Upload01UI
        onChangeFile={onChangeFile}
        onClickBox={onClickBox}
        imgUrl={imgUrl}
        fileRef={fileRef}
      />
    </>
  );
}

export default Upload01;
