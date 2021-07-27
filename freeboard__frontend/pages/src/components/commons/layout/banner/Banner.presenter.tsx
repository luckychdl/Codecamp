import { Banner, BannerWrapper, Img } from "./Banner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <BannerWrapper>
      <Banner>
        <Slider {...settings}>
          <div>
            <Img src="/FreeBoard/todayLogo.png" />
          </div>
          <div>
            <Img src="/FreeBoard/todayLogo.png" />
          </div>
          <div>
            <Img src="/FreeBoard/todayLogo.png" />
          </div>
        </Slider>
      </Banner>
    </BannerWrapper>
  );
}
