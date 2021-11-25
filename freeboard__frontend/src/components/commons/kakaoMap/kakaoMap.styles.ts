import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 340px;
`;
export const LocationMap = styled.div`
  width: 384px;
  height: 252px;
  margin-bottom: 40px;
  margin-right: 30px;
  @media (max-width: 767px) {
    width: 300px;
    margin-right: 0;
  }
`;
export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 340px;
  @media (max-width: 767px) {
    width: 300px;
  }
`;
export const SubWrapper = styled.div`
  display: flex;
  margin-bottom: 36px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const Location = styled.input`
  width: 108px;
  height: 52px;
  font-size: 18px;
  padding: auto 0;
  /* margin-right: 10px; */
  text-align: center;
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  outline-color: #512771;
  ::placeholder {
    color: #bdbdbd;
  }
  @media (max-width: 767px) {
    width: 123px;
  }
`;
export const LocationImg = styled.img`
  margin: 0 10px;
`;
export const AddressInput = styled.input`
  width: 440px;
  height: 52px;
  margin-bottom: 15px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  outline-color: #512771;
  border-radius: 7px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
// export const Location = styled.div``;
