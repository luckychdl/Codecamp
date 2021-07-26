import { Banner, BannerWrapper, Img } from "./Banner.styles";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
export default function LayoutBannerUI() {
  return (
    <BannerWrapper>
      <Banner>
        <Img src="/FreeBoard/todayLogo.png">
          {/* <Slider>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Slider> */}
        </Img>
      </Banner>
    </BannerWrapper>
  );
}
