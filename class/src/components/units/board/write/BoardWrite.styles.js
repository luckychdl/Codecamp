import styled from '@emotion/styled'

export const MyInput = styled.input `
  margin: 10px;
`

export const MyButton = styled.button `
  margin: 10px 10px 10px 0;
  color: ${props => props.active ? 'red' : 'blue'}
`