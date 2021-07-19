import { gql } from "@apollo/client";

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

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($boardCommentId: ID!) {
    deleteBoardComment(boardCommentId: $boardCommentId)
  }
`;
