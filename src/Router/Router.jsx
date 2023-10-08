import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Events from "../pages/Events/Events";
import EventDetails from "../pages/EventDetails/EventDetails";
import MyTickets from "../pages/MyTickets/MyTickets";
import ContactUs from "../pages/ContactUs/ContactUs";


const myCreatedRoute =  createBrowserRouter([
    {

        path : "/",
        element : <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element: <Home></Home>,
            
            },
            {
                path : "/login",
                element: <Login></Login>,
            },
            {
                path : "/register",
                element: <Register></Register>,
            },
            {
                path : "/contact",
                element: <ContactUs></ContactUs>,
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            },
            {
                path: "/my-tickets",
                element: <PrivateRoute><MyTickets></MyTickets></PrivateRoute>,
            },
            {
                path: "/events",
                element: <PrivateRoute><Events></Events></PrivateRoute>,
                loader: () => fetch("./data/events.json")
            },
            {
                path: "/events/:id",
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
                loader: () => fetch("/data/events.json")
            }
        ]

    }
])

export default myCreatedRoute