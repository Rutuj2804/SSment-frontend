import React from "react";
import Search from "./Search";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import DeleteConfirmation from "./DeleteConfirmation";
import AddQuestion from "./AddQuestion";
import AddSection from "./AddSection";
import Confirmation from "./Confirmation";
import SubmitTestConfirmation from "./SubmitTestConfirmation";

const Popups = () => {
	const layout = useSelector((state: RootState) => state.layout);

	return layout.popup ? (
		<div className="popup__Wrapper">
			{layout.search ? <Search /> : null}
			{layout.delete.isActive ? <DeleteConfirmation /> : null}
			{layout.confirmation.isActive ? <Confirmation /> : null}
			{layout.question.isActive ? <AddQuestion /> : null}
			{layout.section.isActive ? <AddSection /> : null}
			{layout.submitConfirmation ? <SubmitTestConfirmation /> : null}
		</div>
	) : (
		<></>
	);
};

export default Popups;
