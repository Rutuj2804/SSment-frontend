import React, { useEffect } from "react";
import { IconButton } from "@mui/material";
import { AddRounded } from "@mui/icons-material";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { useDispatch, useSelector } from "react-redux";
import { setQuestion } from "../../store/layout/slice";
import { useAccessRole } from "../../utils/helpers";
import { useParams } from "react-router-dom";
import { getQuestionsOfTest } from "../../store/actions";
import { RootState } from "../../store";
import { QuestionCard } from "../../components/card";

const AddQuestion = () => {

	const dispatch = useDispatch<any>();

	const instituteId = useAccessRole();

	const questions = useSelector((state: RootState) => state.test.questions)

	const { id } = useParams()

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Test", "Test Awesome", "Add Questions"],
				link: "/test/questions/:id",
			})
		);
	}, [dispatch]);

	useEffect(() => {
		if(instituteId && id) dispatch(getQuestionsOfTest({ testId: id, instituteId }))
	}, [id, instituteId, dispatch])

	return (
		<div className="addQuestion__Wrapper">
			<div className="addQuestion__Body">
				<div className="row">
					{questions.map(q=><div key={q._id} className="col-lg-4 col-md-4 col-12"><QuestionCard question={q} testId={id!} /></div>)}
				</div>
			</div>
			<IconButton onClick={() => dispatch(setQuestion({ isActive: true, testId: id! }))} className="addQuestion__Button"><AddRounded fontSize="large" /></IconButton>
		</div>
	);
};

export default AddQuestion;
