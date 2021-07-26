import axios from "axios";
import { useState, useEffect } from "react";
export default function Gallery() {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const getImage = async () => {
      const result = await axios.get(
        "https://collectionapi.metmuseum.org/public/collection/v1/objects"
      );
      console.log(result);
      // setImgUrl(result.);
    };
    getImage();
  }, []);
  return (
    <>
      <img src={imgUrl}></img>
    </>
  );
}
