import Footer from "./Universal/Footer";
import Navbar from "./Universal/Navbar";


type LayoutProp = {
    children: React.ReactNode;
  };
const Layout = (prop:LayoutProp) => {
    return ( 
        <div>
            {/* <Navbar /> */}
            {prop.children}
            <Footer />
        </div>
     );
}
 
export default Layout;