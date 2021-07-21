import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
const Body = styled.div`
  height: 500px;
`;
const SideMenu = styled.div`
  background-color: skyblue;
`;
const Wrapper = styled.div`
  display: flex;
`;
export default function Layout(props: any) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Wrapper>
        <SideMenu>사이드메뉴 컴포넌트</SideMenu>
        <Body>{props.children}</Body>
      </Wrapper>
      <LayoutFooter />
    </>
  );
}
