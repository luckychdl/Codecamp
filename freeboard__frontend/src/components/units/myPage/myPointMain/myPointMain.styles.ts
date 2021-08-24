import styled from "@emotion/styled";
interface Iprops {
  myMenu: String;
}
export const MainWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const SubWrapper = styled.div`
  display: flex;
  width: 1200px;
  justify-content: flex-start;
`;
export const MyWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
  margin-bottom: 10px;
`;
export const TotalPoint = styled.div`
  font-size: 24px;
  margin-right: 10px;
  cursor: pointer;
  color: ${(props: Iprops) =>
    props.myMenu === "myPointTotal" ? "#512771" : "#BDBDBD"};
  border-bottom: ${(props: Iprops) =>
    props.myMenu === "myPointTotal" ? "5px solid #4A148C" : "none"};
  :hover {
    color: #512771;
  }
`;
export const PayPoint = styled.div`
  font-size: 24px;
  margin-right: 10px;
  cursor: pointer;
  color: ${(props: Iprops) =>
    props.myMenu === "myPointPay" ? "#512771" : "#BDBDBD"};
  border-bottom: ${(props: Iprops) =>
    props.myMenu === "myPointPay" ? "5px solid #4A148C" : "none"};
  :hover {
    color: #512771;
  }
`;
export const BuyingPoint = styled.div`
  font-size: 24px;
  margin-right: 10px;
  cursor: pointer;
  color: ${(props: Iprops) =>
    props.myMenu === "myPointBuying" ? "#512771" : "#BDBDBD"};
  border-bottom: ${(props: Iprops) =>
    props.myMenu === "myPointBuying" ? "5px solid #4A148C" : "none"};
  :hover {
    color: #512771;
  }
`;

export const SellingPoint = styled.div`
  font-size: 24px;
  margin-right: 10px;
  cursor: pointer;
  color: ${(props: Iprops) =>
    props.myMenu === "myPointSelling" ? "#512771" : "#BDBDBD"};
  border-bottom: ${(props: Iprops) =>
    props.myMenu === "myPointSelling" ? "5px solid #4A148C" : "none"};
  :hover {
    color: #512771;
  }
`;
export const ContentsWrapper = styled.div``;
