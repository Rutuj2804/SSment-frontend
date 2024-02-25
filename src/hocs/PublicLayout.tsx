import React from "react";
import { Message } from "../common/message";

interface PublicLayoutProps {
	children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
	return (
		<div>
			{children}
			<Message />
		</div>
	);
};

export default PublicLayout;
