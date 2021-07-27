import { useState, ChangeEvent } from "react";
import firebase from "firebase/app";

export default function FirebasePage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }
  function onChangetitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  function onChangecontents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }
  async function onClickFetch() {
    const result = await firebase.firestore().collection("blog").get();
    result.forEach((doc) => console.log(doc.data()));
  }

  function onClickSubmit() {
    firebase.firestore().collection("blog").add({
      writer: writer,
      title: title,
      contents: contents,
    });
  }

  return (
    <>
      작성자 : <input onChange={onChangeWriter} />
      <br />
      제목 : <input onChange={onChangetitle} />
      <br />
      내용 : <input onChange={onChangecontents} />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>불러오기</button>
    </>
  );
}
