import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;
const EditorDetail = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: `${router.query.id}` },
  });

  if (typeof window === "undefined") return <></>;
  return (
    <>
      작성자: <span>{data?.fetchBoard.writer}</span>
      제목: <span>{data?.fetchBoard.title}</span>
      내용:{" "}
      <span
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data?.fetchBoard.contents),
        }}
      ></span>
    </>
  );
};

export default EditorDetail;
