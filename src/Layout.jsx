import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";


export default function Layout() {
    return (
        <div className="d-flex justify-content-between align-items-center flex-column vh-100">
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
