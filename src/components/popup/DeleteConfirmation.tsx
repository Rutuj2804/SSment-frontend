import React, { useRef } from "react";
import { useOutsideClick } from "../../utils/hooks";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteConfirmation } from "../../store/layout/slice";
import { IconButton } from "@mui/material";
import { Button, OutlineButton } from "../../library";
import { RootState } from "../../store";
import { CloseRounded } from "@mui/icons-material";

const DeleteConfirmation = () => {
	const dispatch = useDispatch();

	const deleteData = useSelector((state: RootState) => state.layout.delete);

	const deleteConfirmationRef = useRef<HTMLDivElement>(null);

	const close = () =>
		dispatch(
			setDeleteConfirmation({
				callback: () => {},
				isActive: false,
				text: "",
			})
		);

	useOutsideClick(deleteConfirmationRef, close);

	const startCallback = () => {
		close()
		deleteData.callback()
	}

	return (
		<div
			ref={deleteConfirmationRef}
			className="deleteConfirmation__Wrapper"
		>
			<div className="deleteConfirmation__Header">
				<h5>Delete</h5>
				<IconButton size="small" onClick={close}>
					<CloseRounded />
				</IconButton>
			</div>
			<div className="deleteConfirmation__Body">
				<p>{deleteData.text}</p>
			</div>
			<div className="deleteConfirmation__Footer">
				<OutlineButton className="deleteConfirmation__Outline" onClick={close}>Cancel</OutlineButton>
				<Button className="deleteConfirmation__Fill" onClick={startCallback}>Delete</Button>
			</div>
		</div>
	);
};

export default DeleteConfirmation;
