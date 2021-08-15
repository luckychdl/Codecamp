import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
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
`;
export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 340px;
`;
export const SubWrapper = styled.div`
  display: flex;
  margin-bottom: 36px;
`;
export const Location = styled.input`
  width: 108px;
  height: 52px;
  font-size: 18px;
  padding: auto 0;
  margin-right: 10px;
  text-align: center;
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  outline-color: #5f0080;
  ::placeholder {
    color: #bdbdbd;
  }
`;
export const LocationImg = styled.img`
  margin-right: 10px;
`;
export const AddressInput = styled.input`
  width: 588px;
  height: 52px;
  margin-bottom: 15px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  outline-color: #5f0080;
  border-radius: 7px;
`;
// export const Location = styled.div``;
