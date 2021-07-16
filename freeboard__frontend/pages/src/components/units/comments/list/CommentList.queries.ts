import { gql } from "@apollo/client";

// export const FETCH_COMMENTS_BOARD = gql`
//   query fetchBoardComments($page: int, $boardId: ID!) {
//     fetchBoardComments(page: $page, boardId: $boardId) {
//       writer
//       contents
//       rating
//       createdAt
//       updatedAt
//     }
//   }
// `;

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;
