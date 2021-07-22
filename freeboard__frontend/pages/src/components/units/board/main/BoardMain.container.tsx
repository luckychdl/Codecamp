import BoardMainUI from "./BoardMain.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardMain.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";

export default function BoardMain() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: count } = useQuery(FETCH_BOARDS_COUNT, {
    variables: { startPage: 1 },
  });
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil(Number(count?.fetchBoardsCount) / 10);
  const [nextButton, setNextButton] = useState(false);
  const [prevButton, setPrevButton] = useState(true);
  const [nextActive, setNextActive] = useState(true);
  const [prevActvie, setPrevActive] = useState(true);

  function onClickregister() {
    router.push("/boards/new");
  }

  function onClickMoveDetail(event: MouseEvent<HTMLDivElement>) {
    router.push(`/detail/${(event.target as Element).id}`);
  }

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    refetch({ page: Number((event.target as Element).id) });
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) {
      setNextButton(true);
      setNextActive(false);
      setPrevButton(false);
      console.log(nextActive);
    } else if (startPage + 10 < lastPage) {
      setStartPage((prev) => prev + 10);
      setPrevButton(false);
    }
  }
  function onClickPrevPage() {
    if (startPage <= 1) {
      setPrevButton("disabled");
      setPrevActive(false);
      setNextButton("");
    } else if (startPage < lastPage) {
      setStartPage((prev) => prev - 10);
      setNextButton("");
    }
  }

  return (
    <BoardMainUI
      nextActive={nextActive}
      prevActvie={prevActvie}
      data={data}
      startPage={startPage}
      lastPage={lastPage}
      prevButton={prevButton}
      nextButton={nextButton}
      onClickregister={onClickregister}
      onClickMoveDetail={onClickMoveDetail}
      onClickPage={onClickPage}
      onClickNextPage={onClickNextPage}
      onClickPrevPage={onClickPrevPage}
    />
  );
}
