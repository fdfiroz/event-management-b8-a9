import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Profile from "../pages/Profile/Profile";

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
                path: "/profile",
                element: <Profile></Profile>
            }
        ]

    }
])

export default myCreatedRoute