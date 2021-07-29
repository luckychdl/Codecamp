import { useState, ChangeEvent, useRef } from "react";
import { Modal } from "antd";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IQuery,
} from "../../../../../../src/commons/types/generated/types";

export const INPUTS_INIT = {
  writer: "",
  password: "",
  title: "",
  contents: "",
  youtubeUrl: "",
};

interface IBoardWriteProps {
  isEdit?: boolean;
  data?: IQuery;
}
interface INewInputs {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
}

export default function BoardWrite(props: IBoardWriteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT);
  const [active, setActive] = useState(false);
  const [resultId, setResultId] = useState();
  const [zipcode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imgUrl, setImgUrl] = useState();
  const fileRef = useRef<HTMLInputElement>(null);
  function handleCancelDetail() {
    setIsOpenDetail(false);
  }
  function handleOkDetail() {
    setIsOpenDetail(false);
  }
  function onClickAddressDetail(data: any) {
    setZipCode(data.zonecode);
    setAddress(data.address);
    setAddressDetail(data.addressDetail);
    setIsOpenDetail(false);
  }

  const router = useRouter();
  const [createBoard] = useMutation<IMutation, IMutationCreateBoardArgs>(
    CREATE_BOARD
  );
  const [updateBoard] = useMutation<IMutation, IMutationUpdateBoardArgs>(
    UPDATE_BOARD
  );
  function onChangeInputs(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
    Object.values(newInputs).every((data) => data)
      ? setActive(true)
      : setActive(false);
    setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
  }
  function onChangeInputsDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }
  function handleOK() {
    setIsOpen(false);
    router.push(`/detail/${resultId}`);
  }
  function handleCancel() {
    setIsOpen(false);
  }
  async function onClickSubmit() {
    setInputsErrors({
      writer: inputs.writer ? "" : "작성자를 입력해주세요",
      password: inputs.password ? "" : "비밀번호를 입력해주세요",
      title: inputs.title ? "" : "제목을 입력해주세요",
      contents: inputs.contents ? "" : "내용을 입력해주세요",
      youtubeUrl: "",
    });
    if (Object.values(inputs).every((data) => data)) {
      try {
        const result: any = await createBoard({
          variables: {
            createBoardInput: {
              images: [imgUrl],
              ...inputs,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        console.log(imgUrl);
        setIsOpen(true);
        console.log(result.data.createBoard._id);
        setResultId(result.data.createBoard._id);
      } catch (error) {
        alert(error.message);
      }
    }
  }
  const onChangeUpFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file?.size) {
      alert("파일이 없습니다.");
      return;
    }
    if (file?.size > 5 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다. (제한 : 5MB)");
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
      console.log(result);
      setImgUrl(result.data.uploadFile.url);
    } catch (error) {
      alert(error.message);
    }
  };
  const onClickBox = () => {
    fileRef.current?.click();
  };
  async function onClickUpdate() {
    const newInputs: INewInputs = {};
    if (inputs.title) newInputs.title = inputs.title;
    if (inputs.contents) newInputs.contents = inputs.contents;

    setInputsErrors({
      writer: inputs.writer ? "" : "작성자를 입력해주세요",
      password: inputs.password ? "" : "비밀번호를 입력해주세요",
      title: newInputs.title ? "" : "제목을 입력해주세요",
      contents: newInputs.contents ? "" : "내용을 입력해주세요",
      youtubeUrl: "",
    });
    if (Object.values(inputs).every((data) => data)) {
      try {
        const result: any = await updateBoard({
          variables: {
            boardId: String(router.query.boardId),
            password: inputs.password,
            updateBoardInput: { ...newInputs },
          },
        });
        setIsOpen(true);
        setResultId(result.data.updateBoard._id);
      } catch (error) {
        alert(error.message);
      }
    }
  }

  function onClickAddress(data: any) {
    setZipCode(data.zonecode);
    setAddress(data.address);
    setAddressDetail(data.addressDetail);
    setIsOpen(false);
  }
  function onCompleteDetail() {
    setIsOpenDetail(true);
  }
  return (
    <>
      {!props.isEdit && (
        <Modal
          title="게시물 등록"
          visible={isOpen}
          onOk={handleOK}
          onCancel={handleCancel}
        >
          <div>게시물이 성공적으로 등록되었습니다.</div>
        </Modal>
      )}
      {props.isEdit && (
        <Modal
          title="게시물 수정"
          visible={isOpen}
          onOk={handleOK}
          onCancel={handleCancel}
        >
          <div>게시물이 성공적으로 수정되었습니다.</div>
        </Modal>
      )}

      <BoardWriteUI
        onClickUpdate={onClickUpdate}
        onChangeUpFile={onChangeUpFile}
        onClickBox={onClickBox}
        imgUrl={imgUrl}
        fileRef={fileRef}
        zipcode={zipcode}
        address={address}
        handleOkDetail={handleOkDetail}
        handleCancelDetail={handleCancelDetail}
        onClickAddress={onClickAddress}
        onClickAddressDetail={onClickAddressDetail}
        onCompleteDetail={onCompleteDetail}
        onClickSubmit={onClickSubmit}
        onChangeInputs={onChangeInputs}
        inputsErrors={inputsErrors}
        active={active}
        isOpen={isOpen}
        isOpenDetail={isOpenDetail}
        isEdit={props.isEdit}
        data={props.data}
        onChangeInputsDetail={onChangeInputsDetail}
      />
    </>
  );
}
