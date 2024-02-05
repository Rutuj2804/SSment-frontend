import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
    children?: React.ReactNode;
}

const CustomButton = ({ children, ...props }: CustomButtonProps) => {
    return <Button {...props}>{children}</Button>;
};

export default CustomButton;
