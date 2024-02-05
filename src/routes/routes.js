import { Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { Dashboard } from "../pages/dashboard";
import { Batch } from "../pages/batch";
import { Result } from "../pages/result";
import { Test } from "../pages/test";
import { ContactUs, ForgotPassword, Login, Register } from "../pages/authentication";

export const regularRoutes = [
    { path: "/dashboard", element: <Dashboard /> },

    { path: "/batches", element: <Batch /> },

    { path: "/results", element: <Result /> },

    { path: "/tests", element: <Test /> },
    
    { path: "/", element: <Navigate to="/dashboard" /> },
];

export const authRoutes = [
    { path: "/home", element: <Home /> },

    { path: "/login", element: <Login /> },
    // { path: "/register", element: <Register /> },
    { path: "/contact-us", element: <ContactUs /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
]