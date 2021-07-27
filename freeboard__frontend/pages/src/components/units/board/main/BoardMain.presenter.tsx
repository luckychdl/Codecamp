import {
  Main,
  Wrapper,
  Row,
  ListColumn,
  Column,
  ButtonWrapper,
  Img,
  Button,
  Title,
  Page,
  PageWrapper,
  Next,
  Prev,
} from "./BoardMain.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { MouseEvent } from "react";
import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { IQuery } from "../../../../../../src/commons/types/generated/types";

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
}

export default function BoardMainUI(props: IBoardMainUIProps) {
  return (
    <Main>
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
      </Wrapper>
      <PageWrapper>
        <Prev
          onClick={props.onClickPrevPage}
          disabled={props.prevButton}
          prevActive={props.prevActive}
          refetch={props.refetch}
        >
          {'<'}
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
          refetch={props.refetch}
        >
          {'>'}
        </Next>
      </PageWrapper>
      <ButtonWrapper>
        <Img src="/FreeBoard/Register.png" />
        <Button onClick={props.onClickregister}>게시물 등록하기</Button>
      </ButtonWrapper>
    </Main>
  );
}
