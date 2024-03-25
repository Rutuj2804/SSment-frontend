import React, { useEffect } from "react";
import { Editor } from "../../components/editor";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { runCodeSnippets } from "../../store/actions";

const Practice = () => {

	const dispatch = useDispatch<any>()

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Tools", "Practice"],
				link: "/tools/practice",
			})
		);
	}, [dispatch]);

	const onRun = ({ code, language }: { code: string, language: string }) => {
		dispatch(runCodeSnippets({ code, language }))
	}

	return (
		<div>
			<Editor onRun={onRun} />
		</div>
	);
};

export default Practice;
