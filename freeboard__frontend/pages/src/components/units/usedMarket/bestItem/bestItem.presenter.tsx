import {
  MainWrapper,
  MainTitle,
  BestWrapper,
  Best,
  Name,
  Remarks,
  Price,
  Tags,
  ColumnWrapper,
  Heart,
  HeartCount,
  HeartWrapper,
  ColumnSubWrapper,
  ContentsWrapper,
} from "./bestItem.styles";

const BestItemUI = (props: any) => {
  return (
    <MainWrapper>
      <MainTitle>베스트상품</MainTitle>
      <BestWrapper>
        {props.data?.fetchUseditemsOfTheBest.map((el: any, index: number) => (
          <>
            <ColumnWrapper
              onClick={props.onClickMove(el._id)}
              key={`${el}_${index}`}
            >
              <Best src={`https://storage.googleapis.com/${el.images[0]}`} />
              <ContentsWrapper>
                <ColumnSubWrapper>
                  <Name>{el.name}</Name>
                  <Remarks>{el.remarks}</Remarks>
                  <Price>{el.price}원</Price>
                  <Tags>#{el.tags}</Tags>
                </ColumnSubWrapper>
                <HeartWrapper>
                  <Heart src="/FreeBoard/heart.svg" />

                  <HeartCount>{el.pickedCount}</HeartCount>
                </HeartWrapper>
              </ContentsWrapper>
            </ColumnWrapper>
          </>
        ))}
      </BestWrapper>
    </MainWrapper>
  );
};

export default BestItemUI;
