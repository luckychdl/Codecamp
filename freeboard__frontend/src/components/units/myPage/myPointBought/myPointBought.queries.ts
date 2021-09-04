import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String) {
    fetchPointTransactionsOfBuying(search: $search) {
      _id
      updatedAt
      amount
      balance
      useditem {
        name
      }
    }
  }
`;
