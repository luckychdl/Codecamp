interface IProps {
  aaa: number;
  school: string;
}
export default function FunctionalComponentUI(asdf: IProps) {
  return (
    <>
      <div>컴포넌트 프리젠터 입니다.</div>
      <div>{asdf.aaa}</div>
      <div>{asdf.school}</div>
    </>
  );
}
