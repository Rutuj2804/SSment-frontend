import { Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { Dashboard } from "../pages/dashboard";
import { Batch } from "../pages/batch";
import { Result } from "../pages/result";
import { CreateTest, Test, TestDetail } from "../pages/test";
import { ContactUs, ForgotPassword, Login } from "../pages/authentication";
import { CreateRole, Assignments, Roles } from "../pages/role";
import { CreateTerm, Term } from "../pages/term";

export const regularRoutes = [
    { path: "/dashboard", element: <Dashboard /> },

    { path: "/batches", element: <Batch /> },

    { path: "/results", element: <Result /> },

    { path: "/terms", element: <Term /> },
    { path: "/terms/create", element: <CreateTerm /> },

    { path: "/roles", element: <Roles /> },
    { path: "/roles/create", element: <CreateRole /> },
    { path: "/assignments", element: <Assignments /> },

    { path: "/tests", element: <Test /> },
    { path: "/tests/create", element: <CreateTest /> },
    { path: "/test/:id", element: <TestDetail /> },
    
    { path: "/", element: <Navigate to="/dashboard" /> },
];

export const authRoutes = [
    { path: "/home", element: <Home /> },

    { path: "/login", element: <Login /> },
    // { path: "/register", element: <Register /> },
    { path: "/contact-us", element: <ContactUs /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
]