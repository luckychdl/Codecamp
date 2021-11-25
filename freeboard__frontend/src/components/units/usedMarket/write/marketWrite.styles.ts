import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 1000px;
  /* height: 2000px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  padding-bottom: 50px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  @media (max-width: 767px) {
    width: 100%;
    box-shadow: none;
    margin-top: 0;
    padding: 0;
  }
`;
export const Title = styled.h1`
  font-weight: bold;
  font-size: 36px;
  color: #616161;
  margin: 80px 0 50px 0;
  @media (max-width: 767px) {
    margin: 40px 0 0 0;
  }
`;
export const MenuWrapper = styled.div`
  width: 850px;
  margin: 20px 0;
  @media (max-width: 767px) {
    /* margin: 0; */
    max-width: 300px;
  }
`;
export const ContentsName = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #757575;
  margin-bottom: 20px;
`;
export const ContentsInput = styled.input`
  width: 996px;
  height: 52px;
  border-radius: 5px;
  padding-left: 15px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  outline-color: #757575;
  ::placeholder {
    color: #bdbdbd;
  }
  @media (max-width: 767px) {
    width: 90%;
  }
`;
export const ContentsDetail = styled.div`
  margin-bottom: 20px;
  font-weight: 500;
  color: #757575;
  font-size: 16px;
`;
export const ContentsDetailInput = styled.textarea`
  width: 996px;
  height: 320px;
  resize: none;
  border-radius: 5px;
  padding: 15px 0 0 15px;
  font-size: 17px;
  border: 1px solid #bdbdbd;
  outline-color: #757575;
  ::placeholder {
    color: #bdbdbd;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const RowWrapper = styled.div`
  display: flex;
  width: 850px;
  justify-content: space-between;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const LocationWrapper = styled.div`
  margin-top: 20px;
  /* width: 850px; */
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const Location = styled.input`
  width: 108px;
  height: 52px;
  font-size: 18px;
  padding: auto 0;
  margin-right: 10px;
  text-align: center;
  border: 1px solid #bdbdbd;
  outline-color: #757575;
  ::placeholder {
    color: #212121;
  }
`;
export const LocationImg = styled.img`
  margin-right: 10px;
`;
export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const AddressInput = styled.input`
  width: 588px;
  height: 52px;
  margin-bottom: 15px;
  border: 1px solid #bdbdbd;
  outline-color: #757575;
  border-radius: 5px;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
export const LocationMap = styled.div`
  background-color: skyblue;
  width: 384px;
  height: 252px;
  margin-bottom: 40px;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
export const SubWrapper = styled.div`
  display: flex;
  margin-bottom: 36px;
`;
export const Upload = styled.div`
  background-color: lightcyan;
  width: 180px;
  height: 180px;
  margin-right: 24px;
  margin-bottom: 40px;
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
  }
`;
export const UploadWrapper = styled.div`
  display: flex;

  margin-bottom: 30px;
  @media (max-width: 767px) {
    width: 300px;
    justify-content: space-between;
  }
`;
export const Button = styled.button`
  width: 179px;
  height: 65px;
  border: none;
  color: white;
  background-color: #35c5f0;
  font-size: 18px;
  border-radius: 5px;
  margin-bottom: 50px;
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
  }
`;
export const Error = styled.div`
  color: red;
`;
