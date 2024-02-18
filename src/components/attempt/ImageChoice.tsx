import { Checkbox } from "@mui/material";
import React from "react";

const ImageChoice = () => {
	return (
		<div className="imageChoiceQuestion__Wrapper">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-12">
					<div className="imageChoiceQuestion__Left">
						<h5>Q1) Who will cook meth for me?</h5>
						<p>
							Browse through the icons below to find the one you
							need. The search field supports synonyms—for
							example, try searching for "hamburger" or "logout."
							Browse through the icons below to find the one you
							need. The search field supports synonyms—for
							example, try searching for "hamburger" or "logout."
							Browse through the icons below to find the one you
							need. The search field supports synonyms—for
							example, try searching for "hamburger" or "logout."
						</p>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-12 imageChoiceQuestion__Right">
					<div className="">
						<h5>Options:</h5>
						<div className="imageChoiceQuestion__Option">
							<Checkbox />
							<img
								alt="reference-img"
								src="https://positivechoices.org.au/pic/iLtr5JK8R7/4/methamphetamine"
							/>
						</div>
						<div className="imageChoiceQuestion__Option">
							<Checkbox />
							<img
								alt="reference-img"
								src="https://positivechoices.org.au/pic/iLtr5JK8R7/4/methamphetamine"
							/>
						</div>
						<div className="imageChoiceQuestion__Option">
							<Checkbox />
							<img
								alt="reference-img"
								src="https://positivechoices.org.au/pic/iLtr5JK8R7/4/methamphetamine"
							/>
						</div>
						<div className="imageChoiceQuestion__Option">
							<Checkbox />
							<img
								alt="reference-img"
								src="https://positivechoices.org.au/pic/iLtr5JK8R7/4/methamphetamine"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageChoice;
