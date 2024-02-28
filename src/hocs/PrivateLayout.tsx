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
import { getDisplayTerms, getMyRole } from "../store/actions";
import { Loader } from "../common/loader";

interface PrivateLayoutProps {
    children: React.ReactNode;
}

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
    const sidebar = useSelector((state: RootState) => state.layout.sidebar);
    const sidebarStyle = useSelector((state: RootState) => state.settings.sidebar);
    const user = useSelector((state: RootState) => state.profile.user)
    const isLoading = useSelector((state: RootState) => state.loading.isLoading)
    const termId = useSelector((state: RootState) => state.term.current)

    const dispatch = useDispatch<any>();

    useEffect(() => {
        if(user.instituteId) dispatch(getDisplayTerms({ instituteId: user.instituteId._id! }))
    }, [user.instituteId, dispatch])

    useEffect(() => {
        if(termId)
            dispatch(getMyRole({ termId }))
    }, [termId, dispatch])

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
            {isLoading && <Loader />}
        </div>
    );
};

export default PrivateLayout;
