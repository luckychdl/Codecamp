import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import { useState } from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: white;
`;
const PostInput = styled.input`
  width: 300px;
  border: none;
  border-bottom: 1px solid gray;
  padding: 10px;
`;

export default function ModalPost() {
  const [isOpen, setIsOpen] = useState(false);
  const [zoneCode, setZoneCode] = useState();
  const [address, setAddress] = useState();

  function onComplete() {
    setIsOpen(true);
  }
  function onClickOpen(data: any) {
    setZoneCode(data.zonecode);
    setAddress(data.address);
    setIsOpen(false);
  }

  function handleOk() {
    setIsOpen(false);
  }
  function handleCancel() {
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={onComplete}>주소 검색하기</Button>
      <br />
      {isOpen && (
        <Modal
          title="주소 검색하기"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={onClickOpen} />
        </Modal>
      )}
      <br />
      <PostInput value={zoneCode}></PostInput>
      <br />
      <PostInput value={address}></PostInput>
      <br />
      <PostInput placeholder="상세주소를 입력해 주세요"></PostInput>
    </>
  );
}
