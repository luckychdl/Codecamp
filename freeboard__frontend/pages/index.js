import Head from "next/head";
// import Image from 'next/image'
import UsedMarket from "./usedMarket/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>DONGWON USEDMARKET</title>

        <meta property="og:title" content="DONGWON UsedMarket" />
        <meta property="og:description" content="MY USEDMARKET PROJECT" />
        <meta
          property="og:image"
          content="https://kmug.co.kr/data/editor/1912/1930779469_1575700205.361.jpg"
        />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <UsedMarket />
    </>
  );
}
