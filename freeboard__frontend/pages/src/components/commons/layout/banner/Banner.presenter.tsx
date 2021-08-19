import {
  Banner,
  BannerWrapper,
  LogoImg,
  Img,
  ImgWrapper,
} from "./Banner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function LayoutBannerUI() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };
  return (
    <BannerWrapper>
      <Banner>
        <Slider {...settings}>
          <ImgWrapper>
            <LogoImg src="/FreeBoard/marketBanner1.webp" />
          </ImgWrapper>
          <ImgWrapper>
            <Img src="/FreeBoard/marketBanner2.webp" />
          </ImgWrapper>
          <ImgWrapper>
            <Img src="/FreeBoard/marketBanner3.webp" />
          </ImgWrapper>
          <ImgWrapper>
            <Img src="/FreeBoard/marketBanner4.webp" />
          </ImgWrapper>
        </Slider>
      </Banner>
    </BannerWrapper>
  );
}
