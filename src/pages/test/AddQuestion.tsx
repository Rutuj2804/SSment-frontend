import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { Avatar } from "@mui/material";
import { ImageChoice, LongAnswer, MultipleChoice, SelectQuestion, ShortAnswer, TrueFalseType, YesNoType } from "../../components/test";
import { AddRounded } from "@mui/icons-material";
import { questionTypeData } from "../../assets/data/question-type";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { useDispatch } from "react-redux";

interface QuestionProps {
	type: number
}

const Question = ({ type }: QuestionProps) => {
	return (
		<div className="question__Wrapper">
			<div className="left">
				<Avatar variant="rounded" />
				<div className="details">
					<h6>This is a question which has a long title.</h6>
					<p>{questionTypeData[type-1].name}</p>
				</div>
			</div>
		</div>
	)
}

enum QuestionType {
	"MULTIPLECHOICE"= 1,
	"IMADECHOICE"= 2,
	"SHORTANSWER"= 3,
	"LONGANSWER"= 4,
	"YESNOTYPE"= 5,
	"TRUEFALSETYPE"= 6,
	"SELECTQUESTION"= 7,
}

const AddQuestion = () => {

	const [activeState, setActiveState] = useState(QuestionType.SELECTQUESTION)

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Test", "Add Questions"],
				link: "/test/questions/:id",
			})
		);
	}, [dispatch]);

	return (
		<div className="addQuestion__Wrapper">
			<div className="row">
				<div className="col-lg-4 col-md-4 col-12">
					<Paper className="p-2">
						<Question type={1} />
						<Question type={2} />
						<Question type={3} />
						<Question type={4} />
						<Question type={5} />
						<Question type={6} />
						<div className="addQuestion__SelectQuestion" onClick={() => setActiveState(QuestionType.SELECTQUESTION)}>
							<AddRounded style={{ height: 40, width: 40 }} />
							<p>Add New Question</p>
						</div>
					</Paper>
				</div>
				<div className="col-lg-8 col-md-8 col-12">
					<Paper className="p-3">
						{activeState === QuestionType.SELECTQUESTION && <SelectQuestion onChange={(i) => setActiveState(i)} />}
						{activeState === QuestionType.MULTIPLECHOICE && <MultipleChoice />}
						{activeState === QuestionType.IMADECHOICE && <ImageChoice/>}
						{activeState === QuestionType.SHORTANSWER && <ShortAnswer/>}
						{activeState === QuestionType.LONGANSWER && <LongAnswer/>}
						{activeState === QuestionType.YESNOTYPE && <YesNoType/>}
						{activeState === QuestionType.TRUEFALSETYPE && <TrueFalseType/>}
					</Paper>
				</div>
			</div>
		</div>
	);
};

export default AddQuestion;
