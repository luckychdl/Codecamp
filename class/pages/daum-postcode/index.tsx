import DaumPostcode from 'react-daum-postcode';
import { useState } from 'react';
import { Modal } from 'antd';

export default function daumPostcodePage() {
  const [address, setAddress] = useState()
  // const [addressDetail, setAddressDetail] = useState()
  const [zoneCode, setZoneCode] = useState()
  const [isOpen, setIsOpen] = useState(false)


  function onComplete (data:any) {
    setAddress(data.address)
    setZoneCode(data.zonecode)
    setIsOpen(false)
  }

  function onClickOpenModal () {
    setIsOpen(true)

  }
  return(
    <>
    {isOpen && (
  <Modal 
    title='주소 검색하기'
    visible={true}
  >
    <DaumPostcode
      onComplete={onComplete}
      animation
    />
    </Modal>
    )}
    <button onClick={onClickOpenModal}>주소검색하기</button>
    <br />
    <input value={zoneCode} readOnly />
    <br />
    <input value={address} readOnly />
    <br />
    <input placeholder='상세주소'/>
  


  

  </>




  )
}