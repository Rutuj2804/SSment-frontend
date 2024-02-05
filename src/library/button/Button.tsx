import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
    children?: React.ReactNode;
}

const CustomButton = ({ children, className, ...props }: CustomButtonProps) => {
    return <Button className={`customButton ${className}`} {...props}>{children}</Button>;
};

export default CustomButton;
