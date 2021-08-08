import { gql } from "@apollo/client";
export const FETCH_USEDITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      contents
      _id
      user {
        _id
        name
        email
      }
      createdAt
    }
  }
`;
