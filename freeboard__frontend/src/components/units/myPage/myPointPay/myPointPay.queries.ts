import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading {
    fetchPointTransactionsOfLoading {
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
