import React, { useEffect, useState } from "react";
import { QuestionInterface } from "../../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setQuestionResponse } from "../../store/test/slice";
import { updateFailedTestResponse, updateTestResponse } from "../../store/actions";

interface TrueFalseTypeInterface {
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

const TrueFalseType = ({ question, serialNumber, testId }: TrueFalseTypeInterface) => {
	const [optionSelected, setOptionSelected] = useState<boolean | null>(null)

	const storedResponse = useSelector((state: RootState) => state.test.storedResponse)
	const failedResponses = useSelector((state: RootState) => state.test.failedResponses)

	const dispatch = useDispatch<any>();

	useEffect(() => {
		if(storedResponse.attempts[question._id!] !== QuestionResponseType.NOT_ATTEMPTED) {
			const queResponse = storedResponse.response.filter(q=> q.questionId === question._id)

			if(queResponse.length && typeof queResponse[0].response === "boolean") setOptionSelected(queResponse[0].response as boolean) 
		} else setOptionSelected(null)
	}, [storedResponse, question._id])

	const onOptionClick = (value: boolean) => {
		dispatch(setQuestionResponse({ questionId: question._id!, questionType: question.questionType!, response: value }))
		dispatch(updateTestResponse({ testId: testId, response: [{ questionId: question._id!, questionType: question.questionType!, response: value }] }))
		dispatch(updateFailedTestResponse({ testId: testId, response: failedResponses }))
	}

	return (
		<div className="multipleChoiceQuestion__Wrapper">
			<div className="multipleChoiceQuestion__Left">
				<h5>
					{serialNumber}.&nbsp;{question.title}
				</h5>
				{question.addReferenceImage ? (
					<div className="referenceSection">
						<img
							alt="reference-img"
							src="https://positivechoices.org.au/pic/iLtr5JK8R7/4/methamphetamine"
						/>
					</div>
				) : null}
			</div>
			<div className="multipleChoiceQuestion__ChoiceType">
				<div onClick={() => onOptionClick(true)} className={optionSelected === true ? "multipleChoiceQuestion__Choice multipleChoiceQuestion__Selected" : "multipleChoiceQuestion__Choice" }>True</div>
				<div onClick={() => onOptionClick(false)} className={optionSelected === false ? "multipleChoiceQuestion__Choice multipleChoiceQuestion__Selected" : "multipleChoiceQuestion__Choice" }>False</div>
			</div>
		</div>
	);
};

export default TrueFalseType;
