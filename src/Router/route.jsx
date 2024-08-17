import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
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
                element: <Home></Home>
                // loader:() =>fetch (`${import.meta.env.VITE_API_URL}/foods`)
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element:<Contact></Contact>,
                
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            // {
            //     path: '/addedFood',
            //     element: <PrivetRoute><AddedFood></AddedFood></PrivetRoute>
            // },
            // {
            //     path: '/myAddFood',
            //     element: <PrivetRoute><MyAddFood></MyAddFood></PrivetRoute>
            // },
            // {
            //     path: '/orderFood',
            //     element: <PrivetRoute><OrderFood></OrderFood></PrivetRoute>
            // },
            // {
            //     path: '/update/:id',
            //     element: <Update></Update>,
            //     loader:({params}) =>fetch (`${import.meta.env.VITE_API_URL}/food/${params.id}`)
            // },
            // {
            //     path: '/food/:id',
            //     element: <DetailPage></DetailPage>,
            //     loader:({params}) =>fetch (`${import.meta.env.VITE_API_URL}/food/${params.id}`)
            // },
           
        ]
    },
])

export default route;