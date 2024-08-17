import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root"
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";



const route = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        // errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader:() =>fetch (`${import.meta.env.VITE_API_URL}/allData`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
           
        ]
    },
])

export default route;