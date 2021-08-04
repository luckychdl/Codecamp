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
            <LogoImg src="/FreeBoard/todayLogo.webp" />
          </ImgWrapper>
          <ImgWrapper>
            <Img src="/FreeBoard/banner2.png" />
          </ImgWrapper>
          <ImgWrapper>
            <Img src="/FreeBoard/banner3.webp" />
          </ImgWrapper>
          <ImgWrapper>
            <Img src="/FreeBoard/banner4.jpeg" />
          </ImgWrapper>
        </Slider>
      </Banner>
    </BannerWrapper>
  );
}
