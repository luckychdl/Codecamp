import { gql } from "@apollo/client";
export const USEDITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      contents
      _id
      user
      createdAt
      useditem
    }
  }
`;
