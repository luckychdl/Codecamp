import {
  Main,
  Wrapper,
  Row,
  ListColumn,
  Column,
  ButtonWrapper,
  Button,
  Title,
  Page,
  PageWrapper,
  Next,
  Prev,
  SearchWrapper,
  Search,
  SearchButton,
  // Word,
} from "./BoardMain.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { MouseEvent, ChangeEvent } from "react";
import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { EditOutlined } from "@ant-design/icons";

interface IBoardMainUIProps {
  data: any;
  startPage: number;
  lastPage: number;
  prevButton: any;
  nextButton: any;
  nextActive: boolean;
  prevActive: boolean;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  onClickMoveDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickregister: () => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickSearch: () => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function BoardMainUI(props: IBoardMainUIProps) {
  return (
    <Main>
      <SearchWrapper>
        <Search
          placeholder="제목을 검색해주세요."
          type="text"
          onChange={props.onChangeSearch}
        />
        <SearchButton onClick={props.onClickSearch}>검색하기</SearchButton>
      </SearchWrapper>
      <Wrapper>
        <Row>
          <ListColumn>번호</ListColumn>
          <ListColumn>제목</ListColumn>
          <ListColumn>작성자</ListColumn>
          <ListColumn>날짜</ListColumn>
        </Row>
        {props.data?.fetchBoards.map((data: any, index: number) => (
          <Row key={data._id}>
            <Column>{index + 1}</Column>
            <Title id={data._id} onClick={props.onClickMoveDetail}>
              {data.title}
            </Title>
            <Column>{data.writer}</Column>
            <Column>{getDate(data.createdAt)}</Column>
          </Row>
        ))}
        {/* {props.data?.fetchBoards.map((data, index) => (
          <Row key={data._id}>
            <Column>{index + 1}</Column>
            <Column>{data.title}</Column>
            <Column>{data.writer}</Column>
            <Column>{index}</Column>
          </Row>
        ))} */}
      </Wrapper>
      <PageWrapper>
        <Prev
          onClick={props.onClickPrevPage}
          disabled={props.prevButton}
          prevActive={props.prevActive}
        >
          {"<"}
        </Prev>
        {new Array(10).fill(1).map((_, index) => {
          const currentPage = props.startPage + index;
          return (
            currentPage <= props.lastPage && (
              <Page
                key={currentPage}
                onClick={props.onClickPage}
                id={String(currentPage)}
              >
                {currentPage}
              </Page>
            )
          );
        })}
        <Next
          onClick={props.onClickNextPage}
          disabled={props.nextButton}
          nextActive={props.nextActive}
        >
          {">"}
        </Next>
      </PageWrapper>
      <ButtonWrapper>
        <EditOutlined
          src="/FreeBoard/Register.png"
          style={{ color: "white", marginRight: "10px", fontSize: "18px" }}
        />
        <Button onClick={props.onClickregister}>게시물 등록하기</Button>
      </ButtonWrapper>
    </Main>
  );
}
