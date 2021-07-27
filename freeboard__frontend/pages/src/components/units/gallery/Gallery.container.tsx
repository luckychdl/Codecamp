import axios from "axios";
import { useState, useEffect } from "react";

export default function Gallery() {
  const [imgUrl, setImgUrl] = useState();
  const [getName, setGetName] = useState();
  const [getPrice, setGetPrice] = useState();
  useEffect(() => {
    const getImage = async () => {
      const result = await axios.get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );
      for (let i = 0; i < result.length; i++) {
        console.log(result.data[i].name);
        // setImgUrl(result.data[i].api_featured_image);
        // setGetName(result.data[i].name);
        // setGetPrice(result.data[i].price);
      }
    };
    getImage();
  }, []);
  return (
    // {result.data[i].map((data) => (
    <>
      <div>{getName}</div>
      <div>{getPrice}</div>
      <img src={imgUrl} />
    </>
    // ))}
  );
}
