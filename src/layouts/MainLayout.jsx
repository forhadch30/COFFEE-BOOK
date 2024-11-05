import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Toaster position="top-center"></Toaster>
            {/* Navbar */}
            <div className="h-10">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-292px)] py-12 container mx-auto px-12">
                {/* Dynamic page */}
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;