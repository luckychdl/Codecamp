import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px;
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 15px 0;
`;
export const MainTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #9eb2b8;
  margin-bottom: 60px;
  padding-bottom: 30px;
`;
export const SubTitle = styled.div`
  margin-bottom: 15px;
  font-size: 16px;
  color: #9e9e9e;
`;
export const EmailAdress = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 0px 5px 15px 5px;
  color: #bdbdbd;
`;
export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;
export const SignUpEmail = styled.input`
  /* font-size: 20px; */
  /* font-weight: bold; */
  margin-bottom: 15px;
  padding-left: 15px;
  width: 215px;
  height: 50px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  outline-color: #35c5f0;
  ::placeholder {
    color: #bdbdbd;
  }
`;
export const SignUp = styled.input`
  margin-bottom: 30px;
  width: 460px;
  height: 50px;
  border-radius: 4px;
  padding-left: 15px;
  color: #9e9e9e;
  border: 1px solid #bdbdbd;
  outline-color: #35c5f0;
  ::placeholder {
    color: #bdbdbd;
  }
`;
export const TermsWrapper = styled.div`
  width: 460px;
  height: 350px;
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;
export const TermsSubWrapper = styled.div`
  display: flex;
  margin: 15px;
`;
export const TotalTerms = styled.input`
  width: 30px;
  height: 30px;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
  :checked {
    background-color: #35c5f0;
  }
`;
export const SubTerms = styled.input`
  width: 30px;
  height: 30px;
  border: 1px solid #bdbdbd;
  border-radius: 40px;
  :checked {
    background-color: #35c5f0;
  }
`;

export const TermsText = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-left: 15px;
`;
export const TermsSubText = styled.div`
  font-size: 20px;
  margin-left: 15px;
`;
export const SignUpButton = styled.button`
  margin: 30px 0;
  width: 460px;
  height: 70px;
  background-color: #35c5f0;
  color: white;
  font-size: 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
    border-radius: 10px;
  }
`;
export const SubText = styled.div`
  font-size: 20px;
  color: #35c5f0;
  text-align: center;
  margin-left: 5px;
`;
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 100px;
`;
export const MoveLogIn = styled.div`
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid black;
  margin-left: 10px;
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
    border-radius: 10px;
  }
  :hover {
    color: #bdbdbd;
    border-bottom: 1px solid #bdbdbd;
  }
`;
