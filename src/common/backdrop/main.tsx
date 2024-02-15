import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Backdrop = () => {
	const layout = useSelector((state: RootState) => state.layout);

	return (
		<>
			<div
				className={layout.backdrop ? "backdrop__Wrapper" : ""}
			></div>
		</>
	);
};

export default Backdrop;
