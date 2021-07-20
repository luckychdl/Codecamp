import { useState, ChangeEvent } from "react";
import { Modal } from "antd";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
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
  boardAddress?: string;
}
export const INPUTS_DETAIL = { addressDetail: "" };

export default function BoardWrite(props: IBoardWriteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT);
  const [active, setActive] = useState(false);
  const [resultId, setResultId] = useState();
  const [zoneCode, setZoneCode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [inputsDetail, setInputsDetail] = useState(INPUTS_DETAIL);
  function handleCancelDetail() {
    setIsOpenDetail(false);
  }
  function handleOkDetail() {
    setIsOpenDetail(false);
  }
  function onClickAddressDetail(data: any) {
    setZoneCode(data.zonecode);
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
    const newInputsDetail = {
      ...inputsDetail,
      [event?.target.name]: event?.target.value,
    };
    setInputsDetail(newInputsDetail);
    Object.values(newInputsDetail).every((data) => data)
      ? setActive(true)
      : setActive(false);
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
              ...inputs,
              boardAddress: {
                zipcode: zoneCode,
                address: address,
                addressDetail: inputsDetail.addressDetail,
              },
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

  function onClickAddress(data) {
    setZoneCode(data.zonecode);
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
        zoneCode={zoneCode}
        address={address}
        handleOkDetail={handleOkDetail}
        handleCancelDetail={handleCancelDetail}
        addressDetail={addressDetail}
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
