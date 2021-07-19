import { DatePicker, Rate } from "antd";
import ReactPlayer from "react-player";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function LibrariesPage2() {
  function onChangeStar(value: any) {
    console.log(value);
  }

  return (
    <div>
      <br />
      <DatePicker />
      <br />
      <Rate tooltips={desc} onChange={onChangeStar} />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="300px"
        height="200px"
        playing={true}
        muted={true}
      />
    </div>
  );
}
