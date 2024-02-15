import React from "react";
import Search from "./Search";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Popups = () => {
	const layout = useSelector((state: RootState) => state.layout);

	return layout.popup ? (
		<div className="popup__Wrapper">
			{layout.search ? <Search /> : null}
		</div>
	) : (
		<></>
	);
};

export default Popups;
