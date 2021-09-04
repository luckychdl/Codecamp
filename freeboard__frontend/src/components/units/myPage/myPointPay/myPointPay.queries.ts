import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String) {
    fetchPointTransactionsOfLoading(search: $search) {
      _id
      impUid
      updatedAt
      amount
      balance
      status
      statusDetail
    }
  }
`;
