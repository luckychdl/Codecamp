import { gql } from '@apollo/client'


export const FETCH_BOARD = gql`
  query fetchBord($boardId: ID!) {
    fetchBoard (boardId: $boardId) {
      writer
      createdAt
      title
      contents
    }
  }
`