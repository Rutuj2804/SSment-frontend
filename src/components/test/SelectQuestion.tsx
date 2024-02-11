import { Avatar } from "@mui/material";
import React from "react";
import { questionTypeData } from "../../assets/data/question-type";

interface QuestionTypeProps {
    type: number;
}

const QuestionType = ({ type }: QuestionTypeProps) => {
    return (
        <div className="questionType__Wrapper">
            <Avatar sx={{ height: 200, width: 200 }} variant="rounded" />
            <p>{questionTypeData[type-1].name}</p>
        </div>
    )
}

enum QuestionTypeEnum {
	"MULTIPLECHOICE"= 1,
	"IMADECHOICE"= 2,
	"SHORTANSWER"= 3,
	"LONGANSWER"= 4,
	"YESNOTYPE"= 5,
	"TRUEFALSETYPE"= 6,
	"OPINIONCASE"= 7,
	"CODINGTYPE"= 8,
}

interface SelectQuestionProps {
    onChange: (i: number) => void;
}

const SelectQuestion = ({ onChange }: SelectQuestionProps) => {
	return (
		<div className="selectQuestion__Wrapper">
			<div className="row">
				<div className="col-lg-4 col-md-6 col-12" onClick={() => onChange(QuestionTypeEnum.MULTIPLECHOICE)}>
                    <QuestionType type={1} />
                </div>
				<div className="col-lg-4 col-md-6 col-12" onClick={() => onChange(QuestionTypeEnum.IMADECHOICE)}>
                    <QuestionType type={2} />
                </div>
				<div className="col-lg-4 col-md-6 col-12" onClick={() => onChange(QuestionTypeEnum.SHORTANSWER)}>
                    <QuestionType type={3} />
                </div>
				<div className="col-lg-4 col-md-6 col-12" onClick={() => onChange(QuestionTypeEnum.LONGANSWER)}>
                    <QuestionType type={4} />
                </div>
				<div className="col-lg-4 col-md-6 col-12" onClick={() => onChange(QuestionTypeEnum.YESNOTYPE)}>
                    <QuestionType type={5} />
                </div>
				<div className="col-lg-4 col-md-6 col-12" onClick={() => onChange(QuestionTypeEnum.TRUEFALSETYPE)}>
                    <QuestionType type={6} />
                </div>
				<div className="col-lg-4 col-md-6 col-12" onClick={() => onChange(QuestionTypeEnum.OPINIONCASE)}>
                    <QuestionType type={7} />
                </div>
				<div className="col-lg-4 col-md-6 col-12" onClick={() => onChange(QuestionTypeEnum.CODINGTYPE)}>
                    <QuestionType type={8} />
                </div>
			</div>
		</div>
	);
};

export default SelectQuestion;
