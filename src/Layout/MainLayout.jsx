import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar";
import  { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Toaster />
        </div>
    );
};

export default MainLayout;