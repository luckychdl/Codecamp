import LazyLoad from "react-lazy-load";

export default function LazyLoadPage() {
  return (
    <>
      <LazyLoad height={900}>
        <img
          src="/FreeBoard/Clear.png"
          style={{ width: "500px", height: "500px" }}
        />
      </LazyLoad>
      <LazyLoad height={800}>
        <img
          src="/FreeBoard/DisLike.png"
          style={{ width: "500px", height: "500px" }}
        />
      </LazyLoad>
      <LazyLoad height={700}>
        <img
          src="/FreeBoard/Hate.png"
          style={{ width: "500px", height: "500px" }}
        />
      </LazyLoad>
      <LazyLoad height={600}>
        <img
          src="/FreeBoard/Link.png"
          style={{ width: "500px", height: "500px" }}
        />
      </LazyLoad>
      <LazyLoad height={500}>
        <img
          src="/FreeBoard/Location.png"
          style={{ width: "500px", height: "500px" }}
        />
      </LazyLoad>
      <LazyLoad height={400}>
        <img
          src="/FreeBoard/Mode.png"
          style={{ width: "500px", height: "500px" }}
        />
      </LazyLoad>
      <LazyLoad height={300}>
        <img
          src="/FreeBoard/Profile.png"
          style={{ width: "500px", height: "500px" }}
        />
      </LazyLoad>
      <LazyLoad height={200}>
        <img
          src="/FreeBoard/Review.png"
          style={{ width: "500px", height: "500px" }}
        />
      </LazyLoad>
      <LazyLoad height={100}>
        <img
          src="/FreeBoard/Star.png"
          style={{ width: "500px", height: "500px" }}
        />
      </LazyLoad>
      <LazyLoad height={50}>
        <img
          src="/FreeBoard/thirdPage.png"
          style={{ width: "500px", height: "500px" }}
        />
      </LazyLoad>
      <LazyLoad height={0}>
        <img
          src="/FreeBoard/secondPage.png"
          style={{ width: "500px", height: "500px" }}
        />
      </LazyLoad>
    </>
  );
}
