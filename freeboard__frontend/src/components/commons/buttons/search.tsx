import styled from "@emotion/styled";

const SearchWrapper = styled.div`
  display: flex;
  width: 1200px;
  height: 40px;
  margin-top: 70px;
  justify-content: flex-end;
`;
const Search = styled.input`
  width: 350px;
  height: 50px;
  background-image: url("/FreeBoard/search.svg");
  background-repeat: no-repeat;
  background-size: 35px;
  background-position-y: center;
  background-position-x: 10px;
  padding-left: 50px;
  font-size: 20px;
  outline-color: #512771;
`;
const SearchBtn = styled.button`
  margin-left: 20px;
  width: 80px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #512771;
  color: #ffffff;
`;
const SearchBtn01 = (props: any) => {
  return (
    <SearchWrapper>
      <Search onChange={props.onChange} type="text" />
      <SearchBtn onClick={props.onClick}>검색</SearchBtn>
    </SearchWrapper>
  );
};

export default SearchBtn01;
