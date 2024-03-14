import { Checkbox } from "@mui/material";
import React from "react";
import { QuestionInterface } from "../../utils/types";

interface MultipleChoiceInterface {
	question: QuestionInterface;
	serialNumber: number;
}

const MultipleChoice = ({ question, serialNumber }: MultipleChoiceInterface) => {
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
					<div key={o._id} className="multipleChoiceQuestion__Option">
						<Checkbox />
						<span>{o.bullet}.</span> {o.title}
					</div>
				))}
			</div>
		</div>
	);
};

export default MultipleChoice;
