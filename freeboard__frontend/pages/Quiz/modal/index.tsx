import { Modal } from "antd";
import { useState } from "react";

export default function QuizModal() {
  const [isOpen, setIsOpen] = useState(false);

  function onClickOpen() {
    setIsOpen(true);
  }
  function handleOk() {
    setIsOpen(false);
  }
  function handleCancel() {
    setIsOpen(false);
  }
  return (
    <>
      <button onClick={onClickOpen}>버튼</button>
      <Modal
        title="게시글 등록"
        visible={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>게시글이 등록되었습니다.</div>
      </Modal>
    </>
  );
}
