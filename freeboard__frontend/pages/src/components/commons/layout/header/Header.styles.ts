import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const HeaderMain = styled.div`
  height: 100px;
  width: 200px;
`;
export const HeaderLogo = styled.img`
  width: 100%;
  height: 75%;
  margin: 20px;
  margin-left: 50px;
  cursor: pointer;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 30px;
`;
export const LoginButton = styled.button`
  width: 80px;
  height: 50px;
  background-color: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #757575;
  :active {
    position: relative;
    top: 2px;
    border-radius: 10px;
  }
  :hover {
    color: #35c5f0;
  }
`;
export const Border = styled.div`
  height: 15px;
  margin-right: 10px;
  border-right: 1px solid gray;
`;
export const ShoppingCart = styled.div`
  background-image: url("/FreeBoard/shoppingCart.png");
  background-size: 32px;
  background-repeat: no-repeat;
  background-position: center;
  width: 42px;
  height: 42px;
  color: #e6e6e6;
  :hover {
    background-color: #35c5f0;
    border-radius: 100px;
    color: white;
  }
`;
export const MyPageButton = styled.button`
  width: 120px;
  height: 50px;
  background-color: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #757575;
  :active {
    position: relative;
    top: 2px;
    border-radius: 10px;
  }
  :hover {
    color: #35c5f0;
  }
`;
