import { Outlet } from "react-router-dom"
import Navbar from "../Components/Header/Navbar/Navbar"
import { Toaster } from "react-hot-toast"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from "../Components/Footer/Footer";

const Root = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (<>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    <Toaster/>
    

  </>
  )
}

export default Root