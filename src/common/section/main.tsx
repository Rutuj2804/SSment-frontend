import React from "react";

interface SectionProps {
    children: React.ReactNode
}

const Section = ({ children }: SectionProps) => {
	return <div className="section__Wrapper mt-2">{children}</div>;
};

export default Section;
