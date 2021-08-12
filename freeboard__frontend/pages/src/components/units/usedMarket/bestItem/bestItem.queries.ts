import { gql } from "@apollo/client";
export const FETCH_USEDITEM_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      price
      tags
      images
      pickedCount
    }
  }
`;
