import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions {
    fetchPointTransactions {
      _id
      updatedAt
      status
      statusDetail
      balance
    }
  }
`;
