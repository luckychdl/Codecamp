import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
export default function Address() {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState();
  function onComplete(data: any) {
    setAddress(data.address);
    setIsOpen(true);
  }

  return (
    <>
      <DaumPostcode autoClose={isOpen} onComplete={onComplete} />
      <input value={address} />
    </>
  );
}
