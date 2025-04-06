import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Services from "../pages/service/Services";
import Projects from "../pages/projects/Projects";
import Blogs from "../pages/blogs/Blogs";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/services",
                element: < Services />,
            },
            {
                path: "/projects",
                element: < Projects />,
            },
            {
                path: "/blogs",
                element: < Blogs />,
            },
        ],
    },
]);

export default router