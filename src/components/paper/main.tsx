import React from "react";

interface PaperProps {
	children: React.ReactNode;
	className?: string;
}

const Paper = ({ children, className }: PaperProps) => {
	return (
		<div className={className ? `paper__Wrapper ${className}` : "paper__Wrapper"}>{children}</div>
	);
};

export default Paper;
