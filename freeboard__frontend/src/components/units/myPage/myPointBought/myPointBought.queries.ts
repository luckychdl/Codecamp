import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying {
    fetchPointTransactionsOfBuying {
      _id
      updatedAt
      useditem {
        _id
        name
        price
        user {
          seller
        }
      }
      status
      statusDetail
      balance
    }
  }
`;
