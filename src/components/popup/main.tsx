import React from "react";
import Search from "./Search";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import DeleteConfirmation from "./DeleteConfirmation";
import AddQuestion from "./AddQuestion";

const Popups = () => {
	const layout = useSelector((state: RootState) => state.layout);

	return layout.popup ? (
		<div className="popup__Wrapper">
			{layout.search ? <Search /> : null}
			{layout.delete.isActive ? <DeleteConfirmation /> : null}
			{layout.question ? <AddQuestion /> : null}
		</div>
	) : (
		<></>
	);
};

export default Popups;
