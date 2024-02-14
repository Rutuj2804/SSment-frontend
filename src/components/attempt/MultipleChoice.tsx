import { Checkbox } from "@mui/material";
import React from "react";

const MultipleChoice = () => {
	return (
		<div className="multipleChoiceQuestion__Wrapper">
			<h5>Question 1</h5>
            <hr />
            <div className="multipleChoiceQuestion__Body">
                <h6>
                    Who will cook meth for me?
                </h6>

                <img src="https://positivechoices.org.au/pic/iLtr5JK8R7/4/methamphetamine" />

                <div className="multipleChoiceQuestion__OptionArea">
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
                        <span>C.</span> I can cook in my backyard but I will consume half.
                    </div>
                    <div className="multipleChoiceQuestion__Option">
                        <Checkbox />
                        <span>D.</span> We can together kill some drug peddlers and take over their business.
                    </div>
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
                        <span>C.</span> I can cook in my backyard but I will consume half.
                    </div>
                    <div className="multipleChoiceQuestion__Option">
                        <Checkbox />
                        <span>D.</span> We can together kill some drug peddlers and take over their business.
                    </div>
                </div>
            </div>
		</div>
	);
};

export default MultipleChoice;
