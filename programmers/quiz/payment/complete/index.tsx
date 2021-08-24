import { gql, useQuery } from "@apollo/client";

const FETCH_POINT_TRANSACTION = gql`
  query fetchPointTransactionsOfLoading {
    fetchPointTransactionsOfLoading {
      _id
      amount
    }
  }
`;

const PaymentComplete = () => {
  const { data } = useQuery(FETCH_POINT_TRANSACTION);
  return (
    <>
      <div>{data?.fetchPointTransactionsOfLoading.amount}포인트 </div>
    </>
  );
};
export default PaymentComplete;
