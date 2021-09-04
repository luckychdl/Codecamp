import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($search: String) {
    fetchPointTransactionsOfSelling(search: $search) {
      _id
      updatedAt
      useditem {
        _id
        name
      }
      amount
      balance
    }
  }
`;
