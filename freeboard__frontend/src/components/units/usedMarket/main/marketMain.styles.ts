import styled from "@emotion/styled";
export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const MainWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;
  padding-bottom: 50px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
export const MainTitle = styled.div`
  font-weight: bold;
  font-size: 36px;
  margin-top: 100px;
  margin-bottom: 40px;
`;
export const BestWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1090px;
`;
export const Best = styled.div`
  width: 250px;
  margin: 20px 20px 80px 20px;
  height: 330px;
  background-color: skyblue;
`;
export const MenuWrapper = styled.div`
  width: 1050px;
  border-bottom: 1px solid #bdbdbd;
`;
export const SubWrapper = styled.div`
  display: flex;
  width: 1050px;
  justify-content: flex-start;
  margin-bottom: 50px;
`;
export const SellWrapper = styled.div`
  display: flex;
  width: 1050px;
  justify-content: flex-start;
`;
interface IProps {
  isSelling: boolean;
  isSold: boolean;
}
export const SellOn = styled.div`
  margin: 10px;
  font-size: 16px;
  color: ${(props: IProps) => (props.isSelling ? "#512771" : "#757575")};
  border-bottom: ${(props: IProps) =>
    props.isSelling ? "3px solid #512771;" : "none"};
  :active {
    position: relative;
    top: 2px;
  }
`;
export const SoldOut = styled.div`
  margin: 10px;
  font-size: 16px;
  color: ${(props: IProps) => (props.isSold ? "#512771" : "#757575")};
  border-bottom: ${(props: IProps) =>
    props.isSold ? "3px solid #512771;" : "none"};
  :active {
    position: relative;
    top: 2px;
  }
`;
export const Search = styled.input`
  margin-right: 10px;
  width: 210px;
  height: 45px;
  border: 1px solid #bdbdbd;
  padding-left: 40px;
  outline-color: #512771;
  background-image: url("/FreeBoard/search.svg");
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 10px;
`;
export const SearchImg = styled.img`
  position: fixed;
  z-index: 2;
  right: 925px;
`;
export const Date = styled.div`
  margin-right: 10px;
`;
export const SearchBtn = styled.button`
  margin-right: 10px;
  width: 78px;
  height: 52px;
  background-color: #512771;
  color: white;
  border: none;
  border-radius: 7px;
`;
export const SearchWrapper = styled.div`
  display: flex;
  width: 950px;
  justify-content: flex-end;
  align-items: center;
`;
export const ListWrapper = styled.div`
  width: 950px;
  display: flex;
  margin-bottom: 10px;
`;
export const Img = styled.img`
  width: 160px;
  height: 160px;
  margin-right: 40px;
  margin-left: 10px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Name = styled.div`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 5px;
`;
export const Remarks = styled.div`
  font-size: 16px;
`;
export const Tags = styled.div``;
export const InfoSecondWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Seller = styled.div`
  margin-right: 20px;
`;
export const HeartImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
export const HeartScore = styled.div`
  font-size: 18px;
`;
export const ListSecondWrapper = styled.div``;
export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
`;
export const PriceImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
export const Price = styled.div`
  font-weight: bold;
  font-size: 24px;
`;
export const ListMainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 1050px;
  padding-top: 10px;
  /* border-top: 1px solid #bdbdbd; */
  border-bottom: 1px solid #bdbdbd;
  :hover {
    background-color: #ede7f6;

    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  :active {
    position: relative;
    top: 2px;
  }
`;
export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
`;
export const NameSubWrapper = styled.div``;
export const TodayWrapper = styled.div``;
export const TopWrapper = styled.div`
  display: flex;
  width: 50px;
  justify-content: flex-end;
  align-items: flex-end;
  /* position: fixed; */
`;
