import { PhotoSubWrapper, Img, Plus, Upload } from "./Upload01.styles";
import { ChangeEvent, RefObject } from "react";

interface IUpload01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  imgUrl: string;
  newImages: any;
  onClickBox: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Upload01UI(props: IUpload01UIProps) {
  return (
    <>
      {props.imgUrl || props.newImages ? (
        <Img
          src={
            props.imgUrl || `https://storage.googleapis.com/${props.newImages}`
          }
          onClick={props.onClickBox}
        />
      ) : (
        <PhotoSubWrapper onClick={props.onClickBox}>
          <Plus>+</Plus>
          <Upload>Upload</Upload>
        </PhotoSubWrapper>
      )}
      <input
        ref={props.fileRef}
        type="file"
        onChange={props.onChangeFile}
        style={{ display: "none" }}
      />
    </>
  );
}
