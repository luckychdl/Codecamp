import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../../src/commons/types/generated/types";
const FETCH_BOARDS = gql`
    fetchBoards ($page: Int){
      fetchBoards(page: $page){
        _id
        writer
        title
        
      }
    }
  `;

export default function BoardMainPagination() {
  const { data } = useQuery<IQuery>(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  return (
    <>
      <div>
        {data?.fetchBoards.map((data) => (
          <div key={data._id}></div>
        ))}
      </div>
    </>
  );
}
