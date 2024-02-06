import React from "react";

interface PublicLayoutProps {
    children: React.ReactNode
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
    return <div>{children}</div>;
};

export default PublicLayout;
