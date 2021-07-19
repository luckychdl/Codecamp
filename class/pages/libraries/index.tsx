import {
  YoutubeOutlined,
  AppleOutlined,
  AndroidOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";

const Youtube = styled(YoutubeOutlined)`
  color: red;
  font-size: 200px;
`;

const Apple = styled(AppleOutlined)`
  font-size: 200px;
`;

const Android = styled(AndroidOutlined)`
  font-size: 200px;
  color: lightgreen;
`;

export default function LibrariesPage() {
  function onClickIcon(event: any) {
    console.log(event.target);
    console.log(event.target.id);
  }
  return (
    <>
      <div>라이브러리 페이지</div>
      <Youtube id={"1234"} onClick={onClickIcon} />
      <Apple />
      <Android />
    </>
  );
}
