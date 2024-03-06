import React, { useEffect } from "react";
import { IconButton } from "@mui/material";
import { AddRounded } from "@mui/icons-material";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { useDispatch } from "react-redux";
import { setQuestion } from "../../store/layout/slice";

const AddQuestion = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Test", "Test Awesome", "Add Questions"],
				link: "/test/questions/:id",
			})
		);
	}, [dispatch]);

	return (
		<div className="addQuestion__Wrapper">
			<IconButton onClick={() => dispatch(setQuestion(true))} className="addQuestion__Button"><AddRounded fontSize="large" /></IconButton>
		</div>
	);
};

export default AddQuestion;
