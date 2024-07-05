import Footer from "./Universal/Footer";



type LayoutProp = {
    children: React.ReactNode;
  };
const Layout = (prop:LayoutProp) => {
    return ( 
        <div>
            
            {prop.children}
            <Footer />
        </div>
     );
}
 
export default Layout;