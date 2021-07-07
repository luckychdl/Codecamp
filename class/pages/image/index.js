import styled from '@emotion/styled'

const MyImg = styled.img`
  width: 150px;
  height: 150px;
  position: relative;
  
`
const MyImg2 = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 30%;
  background-color: rgba(100, 200, 100);
`
const BackgroundTrans = styled.div`
  width: 100px;
  height: 100px;
  top: 0px;
  left: 0px;
`

const MyDiv = styled.div`
  width: 150px;
  height: 150px;
  opacity:30%;
  background-image:url('/ItsRoad/Profile.png');
  background-size: 100%;
  
`




export default function ImagePage () {


  return (
    <>
      <MyImg src='/ItsRoad/profile.png'  />
      <MyImg2 src='/lotto.png'/>
      <MyDiv></MyDiv>
      <BackgroundTrans></BackgroundTrans>
      <div>이미지연습</div>
    </>

  )


}