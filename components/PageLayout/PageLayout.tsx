import { Layout } from "antd";
import { type FC } from "react";
import { PageLayoutProps } from "./types";
import SideMenu from "./SideMenu";

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  const { Header, Content, Sider } = Layout;
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "left",
          backgroundColor: "#fcb58e",
          color: "#424d3e",
        }}
      >
        Madeline Tennier
      </Header>
      <Layout>
        <Sider width={200}>
          <SideMenu />
        </Sider>
        <Layout>
          <Content style={{ backgroundColor: "#fdebe1" }}>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
