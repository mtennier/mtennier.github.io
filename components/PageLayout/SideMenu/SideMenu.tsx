import { Menu, type MenuProps } from "antd";
import { type FC } from "react";
const SideMenu: FC = () => {
  const items: MenuProps["items"] = [
    { label: "About Me", key: "about" },
    { label: "Knitting", key: "knitting" },
    { label: "Resume", key: "resume" },
  ];
  return (
    <Menu
      mode={"inline"}
      style={{ height: "100%", borderRight: 0, backgroundColor: "#f9c8ac" }}
      items={items}
    />
  );
};

export default SideMenu;
