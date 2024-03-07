import { CloseRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { CodingType, ImageChoice, LongAnswer, MultipleChoice, OpinionCase, SelectQuestion, ShortAnswer, TrueFalseType, YesNoType } from "../test";
import { useDispatch, useSelector } from "react-redux";
import { setQuestion } from "../../store/layout/slice";
import { useOutsideClick } from "../../utils/hooks";
import { RootState } from "../../store";
import { QuestionInterface } from "../../utils/types";

export enum QuestionType {
	"MULTIPLECHOICE" = 1,
	"IMADECHOICE" = 2,
	"SHORTANSWER" = 3,
	"LONGANSWER" = 4,
	"YESNOTYPE" = 5,
	"TRUEFALSETYPE" = 6,
	"OPINIONCASE" = 7,
	"CODINGTYPE" = 8,
	"SELECTQUESTION" = 9,
}

const AddQuestion = () => {
	const [activeState, setActiveState] = useState(QuestionType.SELECTQUESTION);

	const [questionToEdit, setQuestionToEdit] = useState<QuestionInterface>()

	const dispatch = useDispatch();

	const question = useSelector((state: RootState) => state.layout.question)

	const questions = useSelector((state: RootState) => state.test.questions)

	const ref = useRef<HTMLDivElement>(null);

	const close = () => dispatch(setQuestion({ isActive: false, testId: "", sectionId: "" }));

	useEffect(() => {
		if(question.questionId) {
			var q = questions.filter(t=>t._id === question.questionId)[0]

			if(q) {
				setActiveState(q.questionType!)
				setQuestionToEdit(q)
			}
		}
	}, [question, questions])

	useOutsideClick(ref, close);

	return (
		<div className="addQuestionPo__Wrapper" ref={ref}>
			<div className="addQuestionPo__Header">
				<h5>Add Question</h5>
				<IconButton onClick={close}>
					<CloseRounded />
				</IconButton>
			</div>
			<hr />
			<div className="addQuestionPo__Body">
                {activeState === QuestionType.SELECTQUESTION && <SelectQuestion onChange={(i) => setActiveState(i)} />}
                {activeState === QuestionType.MULTIPLECHOICE && <MultipleChoice onChange={(i) => setActiveState(i)} />}
                {activeState === QuestionType.IMADECHOICE && <ImageChoice onChange={(i) => setActiveState(i)}/>}
                {activeState === QuestionType.SHORTANSWER && <ShortAnswer que={questionToEdit} onChange={(i) => setActiveState(i)}/>}
                {activeState === QuestionType.LONGANSWER && <LongAnswer onChange={(i) => setActiveState(i)}/>}
                {activeState === QuestionType.YESNOTYPE && <YesNoType onChange={(i) => setActiveState(i)}/>}
                {activeState === QuestionType.TRUEFALSETYPE && <TrueFalseType onChange={(i) => setActiveState(i)}/>}
                {activeState === QuestionType.OPINIONCASE && <OpinionCase onChange={(i) => setActiveState(i)}/>}
                {activeState === QuestionType.CODINGTYPE && <CodingType onChange={(i) => setActiveState(i)}/>}
			</div>
		</div>
	);
};

export default AddQuestion;
