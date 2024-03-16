import { Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import { QuestionInterface } from "../../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setQuestionResponse } from "../../store/test/slice";
import { updateTestResponse } from "../../store/actions";

interface MultipleChoiceInterface {
	question: QuestionInterface;
	serialNumber: number;
	testId: string;
}

enum QuestionResponseType {
	"NOT_ATTEMPTED" = 0,
	"ATTEMPTED" = 1,
	"MARKED_FOR_REVIEW" = 2,
	"ATTEMPTED_AND_MARKED_FOR_REVIEW" = 3,
}

const MultipleChoice = ({ question, serialNumber, testId }: MultipleChoiceInterface) => {

	const [optionSelected, setOptionSelected] = useState("")

	const storedResponse = useSelector((state: RootState) => state.test.storedResponse)
	const failedResponses = useSelector((state: RootState) => state.test.failedResponses)

	const dispatch = useDispatch<any>();

	useEffect(() => {
		if(storedResponse.attempts[question._id!] !== QuestionResponseType.NOT_ATTEMPTED) {
			const queResponse = storedResponse.response.filter(q=> q.questionId === question._id)

			if(queResponse.length && queResponse[0].response) setOptionSelected(queResponse[0].response as string) 
		}
	}, [storedResponse, question._id])

	const onOptionClick = (id: string) => {
		dispatch(setQuestionResponse({ questionId: question._id!, questionType: question.questionType!, response: id }))
		dispatch(updateTestResponse({ testId: testId, response: [{ questionId: question._id!, questionType: question.questionType!, response: id }] }))
		dispatch(updateTestResponse({ testId: testId, response: failedResponses }))
	}

	return (
		<div className="multipleChoiceQuestion__Wrapper">
			<div className="multipleChoiceQuestion__Left">
				<h5>{serialNumber}.&nbsp;{question.title}</h5>
				{question.addReferenceImage ? (
					<div className="referenceSection">
						<img
							alt="reference-img"
							src="https://positivechoices.org.au/pic/iLtr5JK8R7/4/methamphetamine"
						/>
					</div>
				) : null}
			</div>
			<div className="multipleChoiceQuestion__Right">
				{question.optionId?.map((o) => (
					<div key={o._id} onClick={() => onOptionClick(o._id!)} className="multipleChoiceQuestion__Option">
						<Checkbox checked={o._id === optionSelected} />
						<span>{o.bullet}.</span> {o.title}
					</div>
				))}
			</div>
		</div>
	);
};

export default MultipleChoice;
