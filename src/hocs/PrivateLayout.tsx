import React from "react";
import { Navbar } from "../common/navbar";
import { Footer } from "../common/footer";
import { Sidebar } from "../common/sidebar";
import { useSelector } from "react-redux";
import { sidebarLayout } from "../store/settings/types";
import { RootState } from "../store";
import { Breadcrumps } from "../common/breadcrumps";
import { Section } from "../common/section";
import { Message } from "../common/message";
import { Popups } from "../components/popup";
import { Backdrop } from "../common/backdrop";

interface PrivateLayoutProps {
    children: React.ReactNode;
}

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
    const sidebar = useSelector((state: RootState) => state.layout.sidebar);
    const sidebarStyle = useSelector((state: RootState) => state.settings.sidebar);

    return (
        <div>
            <Sidebar />
            <Backdrop />
            <div className={sidebar ? `layout__space-${sidebarStyle === sidebarLayout[0] ? "left" : "right" }` : `layout__expand`}>
                <Navbar />
                <Breadcrumps />
                <Popups />
                <Section>
                    {children}
                </Section>
                <Message />
                <Footer />
            </div>
        </div>
    );
};

export default PrivateLayout;
