import { createBrowserRouter, Navigate } from "react-router-dom";

// Layout
import MainLayout from "../layout/MainLayout";
import AdminLayout from "../layout/AdminLayout";

// Pages
import Home from "../pages/home/Home";
import Services from "../pages/service/Services";
import Projects from "../pages/projects/Projects";
import ProjectDetails from "../pages/projects/ProjectDetails";
import Blogs from "../pages/blogs/Blogs";
import BlogDetails from "../pages/blogs/BlogDetails";
import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";

// Auth Pages
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

// Dashboard
import AdminDashboardHome from "../pages/dashboard/AdminDashboardHome";
import ManageUsers from "../pages/dashboard/ManageUsers";
import ManageBlogs from "../pages/dashboard/ManageBlogs";
import ManageProjects from "../pages/dashboard/ManageProjects";
import AdminRoute from "../components/shared/AdminRoute";

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
            { path: "/login", element: <LoginPage /> },
            { path: "/register", element: <RegisterPage /> },
        ],
    },
    {
        path: "/admin",
        element: <AdminRoute><AdminLayout /></AdminRoute>,
        children: [
            { path: "", element: <Navigate to="/admin/dashboard" replace /> },
            { path: "dashboard", element: <AdminDashboardHome /> },
            { path: "users", element: <ManageUsers /> },
            { path: "blogs", element: <ManageBlogs /> },
            { path: "projects", element: <ManageProjects /> },
        ],
    },
]);

export default router;
