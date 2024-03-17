import React, { useEffect } from "react";
import { Navbar } from "../common/navbar";
import { Footer } from "../common/footer";
import { Sidebar } from "../common/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { sidebarLayout } from "../store/settings/types";
import { RootState } from "../store";
import { Breadcrumps } from "../common/breadcrumps";
import { Section } from "../common/section";
import { Message } from "../common/message";
import { Popups } from "../components/popup";
import { Backdrop } from "../common/backdrop";
import { getDisplayTerms } from "../store/actions";
import { Loader } from "../common/loader";
import { getNotifications } from "../store/core/actions";

interface PrivateLayoutProps {
    children: React.ReactNode;
}

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
    const sidebar = useSelector((state: RootState) => state.layout.sidebar);
    const sidebarStyle = useSelector((state: RootState) => state.settings.sidebar);
    const user = useSelector((state: RootState) => state.profile.user)
    const isLoading = useSelector((state: RootState) => state.loading.isLoading)
    const messages = useSelector((state: RootState) => state.messages.messages)

    const dispatch = useDispatch<any>();

    useEffect(() => {
        if(user.instituteId?._id) dispatch(getDisplayTerms({ instituteId: user.instituteId._id! }))
    }, [user.instituteId, dispatch])

    useEffect(() => {
        if(user._id) dispatch(getNotifications())
    }, [user._id])

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
                {messages.length ? <Message /> : null}
                <Footer />
            </div>
            {isLoading ? <Loader /> : null}
        </div>
    );
};

export default PrivateLayout;
