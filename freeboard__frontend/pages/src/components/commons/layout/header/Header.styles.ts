import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 158px;
  background-color: #ffffff;
  text-align: center;
`;
export const HeaderMain = styled.div`
  height: 158px;
  width: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;
export const HeaderLogo = styled.img`
  width: 200px;
  height: 150px;
  text-align: center;
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
  /* height: 50px; */
  color: #616161;
  border: none;
  cursor: pointer;
  font-size: 20px;
  /* border-right: 1px solid #bdbdbd; */
  background-color: #ffffff;
  :active {
    position: relative;
    top: 2px;
    border-radius: 10px;
  }
  :hover {
    color: #512771;
  }
`;

// export const MyPageButton = styled.button`
//   width: 120px;
//   height: 50px;
//   color: #616161;
//   border: none;
//   cursor: pointer;
//   font-size: 20px;
//   background-color: #ffffff;
//   :active {
//     position: relative;
//     top: 2px;
//     border-radius: 10px;
//   }
//   :hover {
//     color: #512771;
//   }
// `;
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;
export const TooltipImg = styled.img`
  width: 20px;
  transform: ${(props: { isMore: boolean }) =>
    props.isMore ? "rotate(0.5turn)" : ""};
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const UserName = styled.div`
  font-size: 20px;
  margin-right: 10px;
`;
