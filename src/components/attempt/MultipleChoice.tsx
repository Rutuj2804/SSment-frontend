import { Checkbox } from "@mui/material";
import React from "react";

const MultipleChoice = () => {
	return (
		<div className="multipleChoiceQuestion__Wrapper">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-12">
					<div className="multipleChoiceQuestion__Left">
						<h5>Q1) Who will cook meth for me?</h5>
                        <p>Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout."
                        Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout."
                        Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout."
                        </p>
						<img
							alt="reference-img"
							src="https://positivechoices.org.au/pic/iLtr5JK8R7/4/methamphetamine"
						/>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-12 multipleChoiceQuestion__Right">
					<div className="">
						<h5>Options:</h5>
						<div className="multipleChoiceQuestion__Option">
							<Checkbox />
							<span>A.</span> Don't cook directly consume.
						</div>
						<div className="multipleChoiceQuestion__Option">
							<Checkbox />
							<span>B.</span> Buy from me, I have a lot of stock.
						</div>
						<div className="multipleChoiceQuestion__Option">
							<Checkbox />
							<span>C.</span> I can cook in my backyard but I will
							consume half.
						</div>
						<div className="multipleChoiceQuestion__Option">
							<Checkbox />
							<span>D.</span> We can together kill some drug
							peddlers and take over their business.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MultipleChoice;
