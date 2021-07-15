import styled from '@emotion/styled'
import { IStylesProps } from './BoardWrite.types'

export const MyInput = styled.input `
  margin: 10px;
`
export const MyButton = styled.button `
  margin: 10px 10px 10px 0;
  color: ${(props: IStylesProps) => props.active ? 'red' : 'blue'}
`