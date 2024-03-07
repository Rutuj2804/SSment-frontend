import React from "react";
import { QuestionInterface } from "../../utils/types";
import { Avatar, IconButton } from "@mui/material";
import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { getQuestionType, useAccessRole } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { setQuestion } from "../../store/layout/slice";
import { deleteQuestion } from "../../store/actions";

interface QuestionCProps {
	question: QuestionInterface;
    testId: string;
    sectionId?: string;
}

const Question = ({ question, testId, sectionId }: QuestionCProps) => {

    const dispatch = useDispatch<any>();

	const instituteId = useAccessRole();

	return (
		<div className="questionCard__Wrapper">
			<div className="questionCard__Header">
				<Avatar variant="rounded" sx={{ height: 65, width: 65 }} />
				<div className="details">
					<h6>{question.title}</h6>
					<p>{getQuestionType(question.questionType!)}</p>
				</div>
			</div>
			<div className="questionCard__Footer">
                <div className="left">
                    {question.points} points
                </div>
                <div className="right">
                    <IconButton onClick={() => dispatch(setQuestion({ isActive: true, testId, sectionId, questionId: question._id }))}><EditRounded /></IconButton>
                    <IconButton onClick={() => dispatch(deleteQuestion({ instituteId, questionId: question._id! }))}><DeleteRounded /></IconButton>
                </div>
            </div>
		</div>
	);
};

export default Question;
