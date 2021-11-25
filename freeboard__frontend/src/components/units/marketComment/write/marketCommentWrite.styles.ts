import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  /* border-top: 1px solid #bdbdbd; */
  margin: 0px 0px 40px 0;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const Image = styled.img`
  margin-right: 10px;
  margin-bottom: 20px;
`;

export const Text = styled.div`
  color: #bdbdbd;
  padding-left: 20px;
`;
export const ButtonWrapper = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ClearWrapper = styled.div``;
// export const Text = styled.div``
// export const Text = styled.div``
// export const Text = styled.div``
