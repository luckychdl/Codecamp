import MyPointPayPageUI from "./myPointPay.presenter";
const MyPointPayPage = (props: any) => {
  return <MyPointPayPageUI loadingData={props.loadingData} />;
};

export default MyPointPayPage;
