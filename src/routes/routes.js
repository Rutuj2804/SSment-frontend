import { Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { Dashboard } from "../pages/dashboard";
import { AdminBatch, Batch, BatchDetail, CreateBatch, CreateBatchInstitute, EditBatch, RenewBatch } from "../pages/batch";
import { Result } from "../pages/result";
import { AddQuestion, CreateTest, CreateTestInstitute, MyTests, Section, Test, TestDetail } from "../pages/test";
import { ContactUs, ForgotPassword, Login } from "../pages/authentication";
import { Assignments, Roles, AddAssignment, AddAssignmentInstitute } from "../pages/role";
import { CreateTerm, CreateTermInstitute, Term } from "../pages/term";
import { EditProfile, Logout, Profile, ResetPassword } from "../pages/profile";
import { AttemptTest, EndTest, StartTest, TermsAndCondition } from "../pages/attempt";
import { CreateInstitute, CreateVendor, Institute, Vendors } from "../pages/institute";
import { Practice } from "../pages/tools";

export const regularRoutes = [
    { path: "/dashboard", element: <Dashboard /> },

    { path: "/institutes", element: <Institute /> },
    { path: "/institutes/create", element: <CreateInstitute /> },
    { path: "/institute/edit/:id", element: <CreateInstitute /> },
    
    { path: "/vendors", element: <Vendors /> },
    { path: "/vendor/create", element: <CreateVendor /> },

    { path: "/batches", element: <Batch /> },
    { path: "/a/batches", element: <AdminBatch /> },
    { path: "/batches/create", element: <CreateBatchInstitute /> },
    { path: "/a/batches/create", element: <CreateBatch /> },
    { path: "/batch/renew/:id", element: <RenewBatch /> },
    { path: "/batch/edit/:id", element: <EditBatch /> },
    { path: "/batch/:id", element: <BatchDetail /> },

    { path: "/results", element: <Result /> },

    { path: "/terms", element: <Term /> },
    { path: "/terms/create", element: <CreateTermInstitute /> },
    { path: "/a/terms/create", element: <CreateTerm /> },
    { path: "/terms/edit/:id", element: <CreateTermInstitute /> },
    { path: "/a/terms/edit/:id", element: <CreateTerm /> },

    { path: "/roles", element: <Roles /> },
    { path: "/assignments", element: <Assignments /> },
    { path: "/assignments/create", element: <AddAssignmentInstitute /> },
    { path: "/a/assignments/create", element: <AddAssignment /> },
    { path: "/assignment/edit/:id", element: <AddAssignmentInstitute /> },
    { path: "/a/assignment/edit/:id", element: <AddAssignment /> },

    { path: "/tests", element: <MyTests /> },
    { path: "/a/tests", element: <Test /> },
    { path: "/tests/create", element: <CreateTestInstitute /> },
    { path: "/a/tests/create", element: <CreateTest /> },
    { path: "/test/edit/:id", element: <CreateTestInstitute /> },
    { path: "/test/:id", element: <TestDetail /> },
    { path: "/test/sections/:id", element: <Section /> },
    { path: "/test/questions/:id", element: <AddQuestion /> },

    { path: "/tools/practice", element: <Practice /> },

    { path: "/c/:email", element: <Profile /> },
    { path: "/edit/:email", element: <EditProfile /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "/logout", element: <Logout /> },
    
    { path: "/", element: <Navigate to="/dashboard" /> },
];

export const authRoutes = [
    { path: "/home", element: <Home /> },

    { path: "/login", element: <Login /> },
    // { path: "/register", element: <Register /> },
    { path: "/contact-us", element: <ContactUs /> },
    { path: "/forgot-password", element: <ForgotPassword /> },

    { path: "/attempt-test/:id", element: <AttemptTest /> },
    { path: "/start-test/:id", element: <StartTest /> },
    { path: "/terms-and-conditions/:id", element: <TermsAndCondition /> },
    { path: "/end-test/:id", element: <EndTest /> },

    { path: "/404", element: <h1>404 Not Found</h1> },
]