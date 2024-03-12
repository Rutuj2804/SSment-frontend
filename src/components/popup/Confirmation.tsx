import React, { useRef } from "react";
import { useOutsideClick } from "../../utils/hooks";
import { useDispatch, useSelector } from "react-redux";
import { setConfirmation } from "../../store/layout/slice";
import { IconButton } from "@mui/material";
import { Button, OutlineButton } from "../../library";
import { RootState } from "../../store";
import { CloseRounded } from "@mui/icons-material";

const Confirmation = () => {
	const dispatch = useDispatch();

	const deleteData = useSelector((state: RootState) => state.layout.confirmation);

	const confirmationRef = useRef<HTMLDivElement>(null);

	const close = () =>
		dispatch(
			setConfirmation({
				callback: () => {},
				isActive: false,
				text: "",
			})
		);

	useOutsideClick(confirmationRef, close);

	const startCallback = () => {
		close()
		deleteData.callback()
	}

	return (
		<div
			ref={confirmationRef}
			className="confirmation__Wrapper"
		>
			<div className="confirmation__Header">
				<h5>Confirmation</h5>
				<IconButton size="small" onClick={close}>
					<CloseRounded />
				</IconButton>
			</div>
			<div className="confirmation__Body">
				<p>{deleteData.text}</p>
			</div>
			<div className="confirmation__Footer">
				<OutlineButton className="confirmation__Outline" onClick={close}>Go Back</OutlineButton>
				<Button className="confirmation__Fill" onClick={startCallback}>Yes</Button>
			</div>
		</div>
	);
};

export default Confirmation;
