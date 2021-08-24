import { useEffect, useState } from "react";

const BasketLoggedIn = () => {
  const [baskets, setBaskets] = useState();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(items);
  }, []);
  return (
    <>
      <div>장바구니</div>
      {baskets?.map((data) => (
        <div key={data._id}>
          <span>{data.writer}</span>
          <span>{data.title}</span>
        </div>
      ))}
    </>
  );
};

export default BasketLoggedIn;
