import { createBrowserRouter } from "react-router-dom";

// Layout
import MainLayout from "../layout/MainLayout";

// Pages
import Home from "../pages/home/Home";
import Services from "../pages/service/Services";
import Projects from "../pages/projects/Projects";
import ProjectDetails from "../pages/projects/ProjectDetails";
import Blogs from "../pages/blogs/Blogs";
import BlogDetails from "../pages/blogs/BlogDetails";
import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";

// Service Details
import WebDevelopmentDetails from "../servicedetails/WebDevelopmentDetails";
import UIUXDesignDetails from "../servicedetails/UIUXDesignDetails";
import GraphicsDesignDetails from "../servicedetails/GraphicsDesignDetails";
import DigitalMarketingDetails from "../servicedetails/DigitalMarketingDetails";
import NotFound from "../components/shared/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/services", element: <Services /> },
            { path: "/services/web", element: <WebDevelopmentDetails /> },
            { path: "/services/uiux", element: <UIUXDesignDetails /> },
            { path: "/services/graphics", element: <GraphicsDesignDetails /> },
            { path: "/services/digital", element: <DigitalMarketingDetails /> },
            { path: "/projects", element: <Projects /> },
            { path: "/projects/:id", element: <ProjectDetails /> },
            { path: "/blogs", element: <Blogs /> },
            { path: "/blogs/:id", element: <BlogDetails /> },
            { path: "/aboutus", element: <AboutPage /> },
            { path: "/contact", element: <ContactPage /> },
        ],
    },
]);

export default router;
