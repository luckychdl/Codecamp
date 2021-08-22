import PaginationUI from "./pagination.presenter";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS_COUNT } from "./pagination.queries";
const Pagination = () => {
  const { data: count } = useQuery(FETCH_BOARDS_COUNT, {
    variables: { startPage: 1 },
  });
  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil(Number(count?.fetchBoardsCount) / 10);
  const [nextButton, setNextButton] = useState(false);
  const [prevButton, setPrevButton] = useState(true);
  const [nextActive, setNextActive] = useState(true);
  const [prevActive, setPrevActive] = useState(false);

  function onClickNextPage() {
    if (startPage + 10 > lastPage) {
      setNextButton(true);
      setNextActive(false);
      setPrevActive(true);
      setPrevButton(false);
    } else if (startPage + 10 < lastPage) {
      setStartPage((prev) => prev + 10);
      setPrevButton(false);
      setPrevActive(true);
      setNextActive(true);
    } else {
      setNextActive(false);
      setNextButton(true);
    }
  }
  function onClickPrevPage() {
    if (startPage < 10) {
      setPrevButton(true);
      setPrevActive(false);
      setNextActive(true);
      setNextButton(false);
    } else if (startPage < lastPage) {
      setStartPage((prev) => prev - 10);
      setNextButton(false);
      setPrevActive(true);
      setNextActive(true);
    }
  }
  return (
    <PaginationUI
      nextButton={nextButton}
      prevButton={prevButton}
      nextActive={nextActive}
      prevActive={prevActive}
      onClickNextPage={onClickNextPage}
      onClickPrevPage={onClickPrevPage}
    />
  );
};
export default Pagination;
