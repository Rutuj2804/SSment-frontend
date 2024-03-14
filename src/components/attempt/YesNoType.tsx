import React from "react";
import { QuestionInterface } from "../../utils/types";

interface YesNoTypeInterface {
	question: QuestionInterface;
	serialNumber: number;
}

const YesNoType = ({ question, serialNumber }: YesNoTypeInterface) => {
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
				<div className="multipleChoiceQuestion__Choice">Yes</div>
				<div className="multipleChoiceQuestion__Choice">No</div>
			</div>
		</div>
	);
};

export default YesNoType;
