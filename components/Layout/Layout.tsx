import Header from "./Header";
import { PropsWithChildren } from "react";
const Layout = ({ children }: PropsWithChildren) => {
    return (
      <>
        <Header />
        {children}
      </>
    );
  };
  export default Layout;