import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = () => {
    return <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
}

export default Layout;