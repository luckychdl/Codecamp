import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      seller {
        _id
        name
        email
      }
      remarks
      contents
      price
      tags
      images
    }
  }
`;
