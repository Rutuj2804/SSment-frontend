import React from "react";
import { Message } from "../common/message";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Popups } from "../components/popup";
import { Backdrop } from "../common/backdrop";

interface PublicLayoutProps {
	children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {

	const messages = useSelector((state: RootState) => state.messages.messages)

	return (
		<div>
			{children}
			{messages.length ? <Message /> : null}
			<Popups />
            <Backdrop />
		</div>
	);
};

export default PublicLayout;
