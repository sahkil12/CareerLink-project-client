import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayout = () => {
    return (
        <div>
            <header className="bg-blue-50">
                <Navbar></Navbar>
            </header>
           <div className="min-h-[calc(100vh-310px)] bg-blue-50">
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;