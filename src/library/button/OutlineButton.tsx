import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface OutlineButtonProps extends ButtonProps {
    children?: React.ReactNode;
}

const OutlineButton = ({ children, className, ...props }: OutlineButtonProps) => {
    return <Button className={`outlineButton ${className}`} {...props}>{children}</Button>;
};

export default OutlineButton;
;
