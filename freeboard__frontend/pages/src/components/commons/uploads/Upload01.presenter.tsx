import { PhotoSubWrapper, Img, Plus, Upload } from "./Upload01.styles";
import { ChangeEvent, RefObject } from "react";

interface IUpload01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  imgUrl: string;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickBox: () => void;
  onClickDeleteImg: () => void;
}
export default function Upload01UI(props: IUpload01UIProps) {
  return (
    <>
      {!props.imgUrl && (
        <Img src={props.imgUrl} onClick={props.onClickDeleteImg} />
      )}
      <PhotoSubWrapper onClick={props.onClickBox}>
        <Plus>+</Plus>
        <Upload>Upload</Upload>
      </PhotoSubWrapper>
      <input
        ref={props.fileRef}
        type="file"
        onChange={props.onChangeFile}
        style={{ display: "none" }}
      />
    </>
  );
}
