import React from "react";
import { Editor } from "../editor";
import { QuestionInterface } from "../../utils/types";

interface CodingTypeInterface {
	question: QuestionInterface;
	serialNumber: number;
	testId: string;
}

const CodingType = ({ question, serialNumber, testId }: CodingTypeInterface) => {
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
				<div dangerouslySetInnerHTML={{ __html: question.description! }}></div>
			</div>
			<div className="multipleChoiceQuestion__Right">
				<Editor />
			</div>
		</div>
	);
};

export default CodingType;
