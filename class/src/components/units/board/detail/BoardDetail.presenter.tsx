interface IProps {
  qqq: any;
  onClickEdit: () => void;
}
export default function BoardDetailUI(props: IProps) {
  return (
    <>
      <div>작성자: {props.qqq?.fetchBoard.writer}</div>
      {/* 삼항 연산자 // 조건 ? 참 : 거짓 */}

      {/* <div>글제목: {data?.fetchBoard.title}</div> */}
      <div>글제목: {props.qqq?.fetchBoard.title}</div>
      {/* 옵셔널 체이닝 */}

      <div>글내용: {props.qqq?.fetchBoard.contents}</div>

      <button onClick={props.onClickEdit}>수정하기</button>
    </>
  );
}
