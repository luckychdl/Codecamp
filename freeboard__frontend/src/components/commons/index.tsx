import LayoutBanner from "./layout/banner/Banner.container";
import LayoutHeader from "./layout/header/Header.container";
import LayoutNavigation from "./layout/navigation/Navigation.container";
import LayoutFooter from "./layout/footer/Footer.container";
import styled from "@emotion/styled";
const Body = styled.div`
  /* height: 500px; */
  width: 100%;
  min-height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function Layout(props: any) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
      <LayoutFooter />
    </>
  );
}
