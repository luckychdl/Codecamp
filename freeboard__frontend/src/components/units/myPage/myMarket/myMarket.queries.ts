import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_I_SOLD = gql`
  query fetchUseditemsISold {
    fetchUseditemsISold {
      _id
      name
      price
      updatedAt
      buyer {
        _id
        name
      }
    }
  }
`;
