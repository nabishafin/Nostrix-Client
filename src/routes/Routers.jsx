import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Services from "../pages/service/Services";
import Projects from "../pages/projects/Projects";
import Blogs from "../pages/blogs/Blogs";
import AboutPage from "../pages/about/AboutPage";
import ContactUs from "../pages/contact/ContactPage";
import ContactPage from "../pages/contact/ContactPage";
import WebDevelopmentDetails from "../servicedetails/WebDevelopmentDetails";
import UIUXDesignDetails from "../servicedetails/UIUXDesignDetails";
import GraphicsDesignDetails from "../servicedetails/GraphicsDesignDetails";
import DigitalMarketingDetails from "../servicedetails/DigitalMarketingDetails";




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
                path: "/services/web",
                element: < WebDevelopmentDetails />,
            },
            {
                path: "/services/uiux",
                element: < UIUXDesignDetails />,
            },
            {
                path: "/services/graphics",
                element: < GraphicsDesignDetails />,
            },
            {
                path: "/services/digital",
                element: < DigitalMarketingDetails />,
            },
            {
                path: "/projects",
                element: < Projects />,
            },
            {
                path: "/blogs",
                element: < Blogs />,
            },
            {
                path: "/aboutus",
                element: < AboutPage />,
            },
            {
                path: "/Contact",
                element: < ContactPage />,
            },
        ],
    },
]);

export default router