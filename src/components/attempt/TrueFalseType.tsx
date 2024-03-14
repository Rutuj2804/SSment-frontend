import React from "react";
import { QuestionInterface } from "../../utils/types";

interface TrueFalseTypeInterface {
	question: QuestionInterface;
	serialNumber: number;
}

const TrueFalseType = ({ question, serialNumber }: TrueFalseTypeInterface) => {
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
				<div className="multipleChoiceQuestion__Choice">True</div>
				<div className="multipleChoiceQuestion__Choice">False</div>
			</div>
		</div>
	);
};

export default TrueFalseType;
