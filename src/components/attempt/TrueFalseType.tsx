import React from "react";

const TrueFalseType = () => {
	return (
		<div className="multipleChoiceQuestion__Wrapper">
			<div className="multipleChoiceQuestion__Left">
				<h5>Q1) Who will cook meth for me?</h5>
				<div className="referenceSection">
					<img
						alt="reference-img"
						src="https://positivechoices.org.au/pic/iLtr5JK8R7/4/methamphetamine"
					/>
					<p>
						Browse through the icons below to find the one you need.
						The search field supports synonyms—for example, try
						searching for "hamburger" or "logout." Browse through
						the icons below to find the one you need. The search
						field supports synonyms—for example, try searching for
						"hamburger" or "logout." Browse through the icons below
						to find the one you need. The search field supports
						synonyms—for example, try searching for "hamburger" or
						"logout."
					</p>
				</div>
			</div>
			<div className="multipleChoiceQuestion__ChoiceType">
				<div className="multipleChoiceQuestion__Choice">True</div>
				<div className="multipleChoiceQuestion__Choice">False</div>
			</div>
		</div>
	);
};

export default TrueFalseType;
