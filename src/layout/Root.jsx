import { Outlet } from "react-router-dom"
import Navbar from "../Components/Header/Navbar/Navbar"
import { Toaster } from "react-hot-toast"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Root = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (<>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Toaster/>
    

  </>
  )
}

export default Root