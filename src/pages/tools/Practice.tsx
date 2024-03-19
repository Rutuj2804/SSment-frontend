import React, { useEffect } from "react";
import { Editor } from "../../components/editor";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";

const Practice = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Tools", "Practice"],
				link: "/tools/practice",
			})
		);
	}, [dispatch]);

	return (
		<div>
			<Editor />
		</div>
	);
};

export default Practice;
