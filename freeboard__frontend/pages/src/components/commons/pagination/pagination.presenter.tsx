import { PageWrapper, Prev, Page, Next } from "./pagination.styles";

const PaginationUI = (props: any) => {
  return (
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
  );
};
export default PaginationUI;
