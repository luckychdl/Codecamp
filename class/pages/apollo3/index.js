import { useState } from "react"
import {useMutation, gql} from '@apollo/client'

export default function ApolloPage() {


  const [seller, setSeller] = useState()
  const [productName, setProductName] = useState()
  const [productDetail, setProductDetail] = useState()
  const [productPrice, setProductPrice] = useState()


  const [asdf] = useMutation(

    gql`
      mutation gggg($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
          message
        }
      }  
    `
  )

  function onChageSeller(event) {
    setSeller(event.target.value)
  }

  function onChageProductName(event) {
    setProductName(event.target.value)
  }

  function onChageProductDetail(event) {
    setProductDetail(event.target.value)
  }
  function onChageProductPrice(event) {
    setProductPrice(event.target.value)
  }

  function onClickSubmit () {
    asdf({
      variables: {
      seller: seller, 
      createProductInput: {
        name: productName,
        detail: productDetail,
        price: Number(productPrice)   // 객체형태는 키네임과 동일하게
      }
    }
  })
  }

  return (
    <>
      <div></div>
      판매자 : <input type='text' onChange={onChageSeller} />
      <br />
      <br />
      상품명 : <input type='text' onChange={onChageProductName} />
      <br />
      <br />
      상품상세 : <input type='text' onChange={onChageProductDetail} />
      <br />
      <br />
      가격 : <input type='text' onChange={onChageProductPrice} />
      <br />
      <br />
      <button onClick={onClickSubmit}>데이터 입력하기</button>
    </>


  )
}