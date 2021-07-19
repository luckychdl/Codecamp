import ReactPlayer from "react-player";

export default function Youtube() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=v7bnOxV4jAc"
      width="800px"
      height="600px"
      playing={true}
      muted={true}
    />
  );
}
