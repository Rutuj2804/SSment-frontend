import React from "react";
import { Paper } from "../../components/paper";
import { Logo } from "../../common/logo";
import { Avatar } from "@mui/material";
import { ImageChoice, MultipleChoice } from "../../components/attempt";
import { Button, OutlineButton } from "../../library";
import { BookmarkBorderRounded, ChevronLeftRounded, ChevronRightRounded, DoneRounded } from "@mui/icons-material";

const AttemptTest = () => {
	return (
		<div className="attemptTest__Wrapper">
			<Paper className="attemptTest__Body">
				<div className="attemptTest__MainArea">
					<div className="top">
						<Logo />
						<div className="timer">
							<div className="hours timertab">01</div>
							<span>:</span>
							<div className="mins timertab">20</div>
							<span>:</span>
							<div className="seconds timertab">36</div>
							<span>hours</span>
						</div>
					</div>
					<hr />
					<div className="body">
						<MultipleChoice />
					</div>
					<div className="footer">
						<Button startIcon={<ChevronLeftRounded />}>Prev</Button>
						<Button startIcon={<DoneRounded />}>Submit</Button>
						<OutlineButton startIcon={<BookmarkBorderRounded />}>Mark for Review</OutlineButton>
						<Button startIcon={<ChevronRightRounded />}>Next</Button>
					</div>
				</div>
				<div className="attemptTest__Navigation">
					<div className="top">
						<Avatar />
						<div className="details">
							<h6>Rutuj Jeevan Bokade</h6>
							<p>bokaderutuj36@gmail.com</p>
						</div>
					</div>
					<div className="middle">
						<div className="question">1</div>
						<div className="question marked">2</div>
						<div className="question markedcompleted">3</div>
						<div className="question completed">4</div>
						<div className="question marked">5</div>
						<div className="question markedcompleted">6</div>
						<div className="question completed">7</div>
						<div className="question">8</div>
						<div className="question markedcompleted">9</div>
						<div className="question completed">10</div>
						<div className="question marked">11</div>
						<div className="question">12</div>
						<div className="question markedcompleted">13</div>
						<div className="question completed">14</div>
						<div className="question marked">15</div>
						<div className="question markedcompleted">16</div>
						<div className="question completed">17</div>
					</div>
					<div className="bottom">
						<div className="unit">
							<div className="question">1</div>
							<span>Not Attempted</span>
						</div>
						<div className="unit">
							<div className="question completed">1</div>
							<span>Attempted</span>
						</div>
						<div className="unit">
							<div className="question marked">1</div>
							<span>Marked for Review</span>
						</div>
						<div className="unit">
							<div className="question markedcompleted">1</div>
							<span>Attempted & Marked for Review</span>
						</div>
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default AttemptTest;
