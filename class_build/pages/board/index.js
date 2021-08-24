import Head from "next/head";
const BoardPage = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="정적게시판!!" />
        <meta property="og:description" content="이 주소는 정적 주소입니다." />
        <meta
          property="og:image"
          content="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMDVfNjgg%2FMDAxNjEyNDg4MzcxMDU0.mqO5dhgWT0wiMQ9tWYW-2SGeEPxnZGgV6hzKUkM4dfQg.ItZfWrmK6VUZqrNUbnJVHT1c9lDlowjwFM9HzyM6IcYg.JPEG.whco3927%2FIMG_0205.jpg&type=sc960_832"
        />
      </Head>
      <div>여기는 게시판 입니다.</div>
    </>
  );
};
export default BoardPage;
