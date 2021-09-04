import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($search: String) {
    fetchPointTransactions(search: $search) {
      _id
      updatedAt
      status
      statusDetail
      balance
    }
  }
`;
