import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import CommentWrite from "../../../src/components/units/boardComments/write/CommentWrite.container";
import CommentList from "../../../src/components/units/boardComments/list/CommentList.container";
export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <CommentWrite />
      <CommentList />
    </>
  );
}
