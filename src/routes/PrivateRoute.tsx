import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store";

interface PrivateRouteProps {
    children: any
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
    children,
}) => {

    const authenticated = useSelector((state: RootState) => state.authentication.isAuthenticated)

    if (typeof authenticated === "boolean" && !authenticated) {
        console.log("inside", authenticated)
        return <Navigate to="/login" replace />
    }

    return children;
};

export default PrivateRoute;
