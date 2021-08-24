import axios from "axios";
import { useState, useEffect } from "react";

export default function AxiosPage() {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const getImage = async () => {
      const getImg = await axios.get("https://dog.ceo/api/breeds/image/random");
      setImgUrl(getImg.data?.message);
    };
    getImage();
  }, []);

  return (
    <>
      <img src={imgUrl} />
    </>
  );
}
