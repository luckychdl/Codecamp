import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 1200px;
  padding: 80px 100px 102px 102px;
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
export const Title = styled.h1`
  font-size: 36px;
  color: #757575;
`;
export const Name = styled.div`
  font-size: 16px;
  width: 489px;
  margin: 16px 0px 10px 0px;
`;
export const SubWrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Wrapper = styled.div`
  width: 486px;
  display: flex;
  flex-direction: column;
`;
export const Box = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  margin-bottom: 10px;
  padding: 10px;
  outline-color: #512771;
`;

export const TitleWrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: column;
`;
export const TitleBox = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  margin-bottom: 10px;
  padding: 10px;
  outline-color: #512771;
`;
export const TitleName = styled.div`
  font-size: 16px;
  width: 996px;
  margin: 16px 0 16px 0;
`;
export const ContentWrapper = styled.div`
  width: 996px;
`;

export const ContentName = styled.div`
  margin: 16px 0px;
`;
export const ContentBox = styled.textarea`
  width: 996px;
  height: 480px;
  padding: 10px;
  resize: none;
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  margin-bottom: 10px;
  outline-color: #512771;
`;
export const Adress = styled.div`
  text-align: start;
  font-size: 16px;
  border-radius: 7px;
  margin: 16px 0;
`;
export const AdressBox = styled.input`
  width: 77px;
  height: 52px;
  text-align: center;
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  margin-right: 15px;
  outline-color: #512771;
`;
export const AdressWrapper = styled.div`
  text-align: center;
`;
export const AdressSubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 498px;
`;
export const Search = styled.span`
  width: 110px;
  height: 52px;
  background-color: #512771;
  color: white;
  border-radius: 7px;
  padding: 14px 16px;
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
  }
`;
export const AdressSubBox = styled.input`
  width: 996px;
  height: 52px;
  margin: 10px 0px 12px 0px;
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  outline-color: #512771;
`;
export const AdressBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 12px;
  margin-top: 16px;
`;
export const YoutubeWrapper = styled.div``;
export const YoutubeSubWrapper = styled.div``;
export const YoutubeName = styled.div`
  margin: 36px 0 16px 0;
`;
export const YoutubeBox = styled.input`
  width: 996px;
  height: 45.78px;
  margin-bottom: 36px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  outline-color: #512771;
`;
export const PhotoWarpper = styled.div``;
export const Photo = styled.div`
  font-size: 16px;
  margin: 16px 0;
`;
export const PhotoSubWrapper = styled.button`
  box-sizing: border-box;
  /* border: 1px solid #bdbdbd; */
  border: none;
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 20px;
  cursor: pointer;
  position: relative;
`;
export const PhotoMainWrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: center;
`;
export const Plus = styled.div``;
export const Upload = styled.div``;
export const Img = styled.img`
  box-sizing: border-box;
  border: 1px solid #bdbdbd;
  width: 78px;
  height: 78px;
  /* background-color: #bdbdbd; */
  margin-right: 20px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
`;
export const Set = styled.div`
  margin-top: 36px;
`;
export const RadioWrapper = styled.div`
  display: flex;
  width: 996px;
  flex-direction: column;
  align-items: flex-start;
`;
export const RadioSubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 16px 20px 0;
`;
export const Radio = styled.input`
  margin-right: 12px;
  outline-color: #35c5f0;
`;
export const Word = styled.div`
  margin-right: 16px;
`;
export const Button = styled.button`
  width: 150px;
  height: 52px;
  font-weight: bold;
  background-color: ${(props: { active: boolean }) =>
    props.active ? "#512771" : ""};
  color: ${(props: { active: boolean }) => (props.active ? "white" : "")};
  border: 0px;
  border-radius: 7px;
  margin-top: 30px;
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
  }
`;
export const ErrorMessage = styled.div`
  margin-bottom: 35px;
  color: red;
`;
export const Cancle = styled.button`
  width: 150px;
  height: 52px;
  font-weight: bold;
  font-size: 16px;
  background-color: #512771;
  border: 0px;
  border-radius: 7px;
  margin-top: 30px;
  margin-left: 20px;
  color: white;
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
  }
`;
export const ButtonWrapper = styled.div``;
