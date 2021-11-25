import styled from "@emotion/styled";
export const TodayProductWrapper = styled.div`
  width: 100%;
  max-width: 210px;
  height: 855.33px;
  margin-left: 20px;
  margin-top: 80px;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  top: 0px;
  /* right: 3%; */
  position: sticky;
  background-color: white;
  z-index: 10;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
export const TodayTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #bdbdbd;
`;
export const TodayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;

  padding: 20px;
`;
export const TodayImg = styled.img`
  width: 120px;
  height: 120px;
  margin: 10px;
`;
export const TodayName = styled.div`
  font-weight: 500;
  font-size: 16px;
`;
export const TodayRemarks = styled.div`
  font-size: 14px;
`;
export const TodayPrice = styled.div`
  font-weight: bold;
  font-size: 16px;
`;
export const TodayTags = styled.div`
  color: #bdbdbd;
  font-size: 10px;
`;
export const Wrapper = styled.div`
  /* border: 1px solid #757575; */
  display: flex;
  width: 190px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  :hover {
    background-color: #ede7f6;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  :active {
    top: 4px;
    position: relative;
  }
`;
