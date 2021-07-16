import CommentListUI from "./CommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./CommentList.queries";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

export default function CommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });
  console.log(router.query.boardId);

  return <CommentListUI data={data} />;
}
