// import MarketDetail from "../../../../src/components/units/usedMarket/detail/marketDetail.container";
// import MarketCommentWrite from "../../../../src/components/units/marketComment/write/marketCommentWrite.container";
// import MarketCommentList from "../../../../src/components/units/marketComment/list/marketCommentList.container";
// import { request, gql } from "graphql-request";
// import Head from "next/head";
// const FETCH_USEDITEM = gql`
//   query fetchUseditem($useditemId: ID!) {
//     fetchUseditem(useditemId: $useditemId) {
//       name
//       remarks
//       images
//     }
//   }
// `;
const MarketDetailPage = (props: any) => {
  //   return (
  //     <>
  //       <Head>
  //         <meta property="og:title" content={props.fetchUseditem.name} />
  //         <meta property="og:description" content={props.fetchUseditem.remarks} />
  //         <meta
  //           property="og:image"
  //           content={`https://storage.googleapis.com/${props.fetchUseditem.images[0]}`}
  //         />
  //       </Head>
  //       <MarketDetail />
  //       <MarketCommentWrite />
  //       <MarketCommentList />
  //     </>
  //   );
};

export default MarketDetailPage;

// export const getServerSideProps = async (context: any) => {
//   const result = await request(
//     "https://backend02.codebootcamp.co.kr/graphql07",
//     FETCH_USEDITEM,
//     {
//       useditemId: context.query.useditemId,
//     }
//   );
//   return { props: { fetchUseditem: result.fetchUseditem } };
// }
