import FooterComp from "./Universal/FooterComp";
import HeaderComp from "./Universal/HeaderComp";

type LayoutProp = {
  children: React.ReactNode;
};
const Layout = (prop: LayoutProp) => {
  return (
    <div>
      <HeaderComp />

      {prop.children}

      <FooterComp />
    </div>
  );
};

export default Layout;
