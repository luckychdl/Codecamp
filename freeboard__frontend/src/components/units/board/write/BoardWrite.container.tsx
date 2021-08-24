import { useState, ChangeEvent } from "react";
import { Modal } from "antd";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";

export const INPUTS_INIT = {
  writer: "",
  password: "",
  title: "",
  contents: "",
  youtubeUrl: "",
};

interface INewInputs {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
}

export default function BoardWrite(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT);
  const [active, setActive] = useState(false);
  const [resultId, setResultId] = useState();
  const [zipcode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  // const [imgUrls, setImgUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState([]);
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
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [updateBoard] = useMutation(UPDATE_BOARD);
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
  async function onChangeInputsDetail(event: ChangeEvent<HTMLInputElement>) {
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
        const resultFiles = await Promise.all(
          files.map((data) => uploadFile({ variables: { file: data } }))
        );
        const newImages = resultFiles.map((el) => el.data.uploadFile.url);

        const result: any = await createBoard({
          variables: {
            createBoardInput: {
              ...inputs,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
              images: newImages,
            },
          },
        });
        setIsOpen(true);
        setResultId(result.data.createBoard._id);
      } catch (error) {
        alert(error.message);
      }
    }
  }

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

  const onChangeFileUrl = (file: string, index: number) => {
    const newFileUrl = [...files];
    // @ts-ignore
    newFileUrl[index] = file;
    setFiles(newFileUrl);
  };
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
        zipcode={zipcode}
        address={address}
        // imgUrls={imgUrls}
        handleOkDetail={handleOkDetail}
        // @ts-ignore
        onChangeFileUrl={onChangeFileUrl}
        handleCancelDetail={handleCancelDetail}
        onClickAddress={onClickAddress}
        // @ts-ignore
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
