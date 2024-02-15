import React from "react";
import { Logo } from "../../common/logo";
import { MultipleChoice } from "../../components/attempt";
import { Paper } from "../../components/paper";
import { Button, OutlineButton } from "../../library";
import {
	BookmarkBorderRounded,
	ChevronLeftRounded,
	ChevronRightRounded,
} from "@mui/icons-material";

const AttemptTest = () => {
	return (
		<div className="attemptTest__Wrapper">
			<div className="attemptTest__Body">
				<div className="attemptTest__Left">
					<div className="attemptTest__Logo">
						<Logo />
					</div>
					<div className="attemptTest__Timer">
						<h6>Time Remaining:</h6>
						<p>96:22 mins</p>
					</div>
					<hr />
					<div className="attemptTest__QuestionPallete">
						<div className="attemptTest__Question completed">1</div>
						<div className="attemptTest__Question marked">2</div>
						<div className="attemptTest__Question completedmarked">
							3
						</div>
						<div className="attemptTest__Question">4</div>
						<div className="attemptTest__Question">5</div>
						<div className="attemptTest__Question completed">6</div>
						<div className="attemptTest__Question">7</div>
						<div className="attemptTest__Question completed">8</div>
						<div className="attemptTest__Question">9</div>
						<div className="attemptTest__Question marked">10</div>
						<div className="attemptTest__Question">11</div>
						<div className="attemptTest__Question completedmarked">
							12
						</div>
						<div className="attemptTest__Question completed">
							13
						</div>
						<div className="attemptTest__Question marked">14</div>
						<div className="attemptTest__Question completedmarked">
							15
						</div>
						<div className="attemptTest__Question">16</div>
						<div className="attemptTest__Question">17</div>
						<div className="attemptTest__Question completed">
							18
						</div>
						<div className="attemptTest__Question">19</div>
						<div className="attemptTest__Question completed">
							20
						</div>
						<div className="attemptTest__Question">21</div>
						<div className="attemptTest__Question marked">22</div>
						<div className="attemptTest__Question">23</div>
						<div className="attemptTest__Question completedmarked">
							24
						</div>
						<div className="attemptTest__Question completed">
							25
						</div>
						<div className="attemptTest__Question completedmarked">
							26
						</div>
						<div className="attemptTest__Question marked">27</div>
						<div className="attemptTest__Question">28</div>
						<div className="attemptTest__Question completed">
							29
						</div>
						<div className="attemptTest__Question completedmarked">
							30
						</div>
						<div className="attemptTest__Question">31</div>
						<div className="attemptTest__Question marked">32</div>
						<div className="attemptTest__Question marked">33</div>
						<div className="attemptTest__Question ">34</div>
						<div className="attemptTest__Question completed">
							35
						</div>
						<div className="attemptTest__Question">36</div>
						<div className="attemptTest__Question marked">37</div>
						<div className="attemptTest__Question">38</div>
						<div className="attemptTest__Question completedmarked">
							39
						</div>
						<div className="attemptTest__Question completedmarked">
							40
						</div>
						<div className="attemptTest__Question">41</div>
						<div className="attemptTest__Question marked">42</div>
						<div className="attemptTest__Question">43</div>
						<div className="attemptTest__Question completedmarked">
							44
						</div>
						<div className="attemptTest__Question completed">
							45
						</div>
						<div className="attemptTest__Question completedmarked">
							46
						</div>
						<div className="attemptTest__Question marked">47</div>
						<div className="attemptTest__Question">48</div>
						<div className="attemptTest__Question completed">
							49
						</div>
						<div className="attemptTest__Question completedmarked">
							50
						</div>
						<div className="attemptTest__Question">51</div>
						<div className="attemptTest__Question marked">52</div>
						<div className="attemptTest__Question marked">53</div>
						<div className="attemptTest__Question ">54</div>
						<div className="attemptTest__Question completed">
							55
						</div>
						<div className="attemptTest__Question">56</div>
						<div className="attemptTest__Question marked">57</div>
						<div className="attemptTest__Question">58</div>
						<div className="attemptTest__Question completedmarked">
							59
						</div>
						<div className="attemptTest__Question completedmarked">
							60
						</div>
					</div>
				</div>
				<div className="attemptTest__QuestionArea">
					<Paper className="p-3 attemptTest__LayoutBox">
						<div className="attemptTest__Question">
							<MultipleChoice />
						</div>
						<div className="attemptTest__Footer">
							<Button startIcon={<ChevronLeftRounded />}>
								Prev
							</Button>
							<Button startIcon={<ChevronRightRounded />}>
								Next
							</Button>
							<OutlineButton
								startIcon={<BookmarkBorderRounded />}
							>
								Mark for review
							</OutlineButton>
						</div>
					</Paper>
				</div>
				<div className="attemptTest__Right">
					<div className="attemptTest__Conventions">
						<div className="convention">
							<div>1</div>
							<p>Not attempted</p>
						</div>
						<div className="convention">
							<div className="completed">1</div>
							<p>Attempted</p>
						</div>
						<div className="convention">
							<div className="marked">1</div>
							<p>Marked for review</p>
						</div>
						<div className="convention">
							<div className="completedmarked">1</div>
							<p>Attempted & Marked for review</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AttemptTest;
