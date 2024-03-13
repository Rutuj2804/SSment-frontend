import { Avatar } from "@mui/material";
import { Logo } from "../../common/logo";
import { Paper } from "../../components/paper";
import {
	LongAnswer,
	MultipleChoice,
	ShortAnswer,
	YesNoType,
	TrueFalseType,
} from "../../components/attempt";
import {
	BookmarkAddRounded,
	ChevronLeftRounded,
	ChevronRightRounded,
} from "@mui/icons-material";
import { Button } from "../../library";
import { useFullScreenChange, useUserActivity } from "../../utils/hooks";
import { useEffect } from "react";

const AttemptTest = () => {

	const isFullScreen = useFullScreenChange()
	const isActive = useUserActivity()

	useEffect(() => {
		console.log(isFullScreen, isActive)
	}, [isFullScreen, isActive])

	return (
		<div className="attemptTest__Wrapper">
			<Paper className="attemptTest__Body">
				<div className="attemptTest__Header">
					<Logo />
					<div className="user">
						<Avatar />
						<div className="details">
							<h6>Rutuj Jeevan Bokade</h6>
							<p>rutuj.bokade@ssment.in</p>
						</div>
					</div>
				</div>
				<div className="attemptTest__Ribbon">
					<div className="left"></div>
				</div>
				<div className="attemptTest__Body">
					<div className="container">
						<TrueFalseType />
					</div>
				</div>
				<div className="attemptTest__Sidebar">
					<div className="timeLeft__Section">
						<div className="ribbon">Time Left</div>
						<div className="timer">
							<div className="element">
								<p>00</p>
								<span>hour</span>
							</div>
							:
							<div className="element">
								<p>01</p>
								<span>minute</span>
							</div>
							:
							<div className="element">
								<p>40</p>
								<span>seconds</span>
							</div>
						</div>
					</div>
					<div className="questions__Section">
						<div className="ribbon">
							<ChevronLeftRounded />
							Coding
							<ChevronRightRounded />
						</div>
						<div className="questions__Grid">
							<div className="question">1</div>
							<div className="question">2</div>
							<div className="question">3</div>
							<div className="question">4</div>
							<div className="question">5</div>
							<div className="question">6</div>
							<div className="question">7</div>
							<div className="question">8</div>
							<div className="question">9</div>
							<div className="question">10</div>
							<div className="question">11</div>
							<div className="question">12</div>
							<div className="question">13</div>
							<div className="question">14</div>
							<div className="question">15</div>
							<div className="question">16</div>
							<div className="question">17</div>
							<div className="question">18</div>
							<div className="question">1</div>
							<div className="question">2</div>
							<div className="question">3</div>
							<div className="question">4</div>
							<div className="question">5</div>
							<div className="question">6</div>
							<div className="question">7</div>
							<div className="question">8</div>
							<div className="question">9</div>
							<div className="question">10</div>
							<div className="question">11</div>
							<div className="question">12</div>
							<div className="question">13</div>
							<div className="question">14</div>
							<div className="question">15</div>
							<div className="question">16</div>
							<div className="question">17</div>
							<div className="question">18</div>
							<div className="question">1</div>
							<div className="question">2</div>
							<div className="question">3</div>
							<div className="question">4</div>
							<div className="question">5</div>
							<div className="question">6</div>
							<div className="question">7</div>
							<div className="question">8</div>
							<div className="question">9</div>
							<div className="question">10</div>
							<div className="question">11</div>
							<div className="question">12</div>
							<div className="question">13</div>
							<div className="question">14</div>
							<div className="question">15</div>
							<div className="question">16</div>
							<div className="question">17</div>
							<div className="question">18</div>
							<div className="question">1</div>
							<div className="question">2</div>
							<div className="question">3</div>
							<div className="question">4</div>
							<div className="question">5</div>
							<div className="question">6</div>
							<div className="question">7</div>
							<div className="question">8</div>
							<div className="question">9</div>
							<div className="question">10</div>
							<div className="question">11</div>
							<div className="question">12</div>
							<div className="question">13</div>
							<div className="question">14</div>
							<div className="question">15</div>
							<div className="question">16</div>
							<div className="question">17</div>
							<div className="question">18</div>
							<div className="question">1</div>
							<div className="question">2</div>
							<div className="question">3</div>
							<div className="question">4</div>
							<div className="question">5</div>
							<div className="question">6</div>
							<div className="question">7</div>
							<div className="question">8</div>
							<div className="question">9</div>
							<div className="question">10</div>
							<div className="question">11</div>
							<div className="question">12</div>
							<div className="question">13</div>
							<div className="question">14</div>
							<div className="question">15</div>
							<div className="question">16</div>
							<div className="question">17</div>
							<div className="question">18</div>
						</div>
					</div>
				</div>
				<div className="attemptTest__Buttons">
					<div className="left">
						<Button startIcon={<BookmarkAddRounded />}>
							Mark For Review
						</Button>
						<Button startIcon={<ChevronLeftRounded />}>Prev</Button>
						<Button endIcon={<ChevronRightRounded />}>Next</Button>
					</div>
					<div className="right">
						<Button>Submit</Button>
					</div>
				</div>
				<div className="attemptTest__Footer">
					<div className="attemptTest__DisplayElement">
						<div className="question">1</div>
						<p>Not Attempted</p>
					</div>
					<div className="attemptTest__DisplayElement">
						<div className="question">1</div>
						<p>Attempted</p>
					</div>
					<div className="attemptTest__DisplayElement">
						<div className="question">1</div>
						<p>Marked For Review</p>
					</div>
					<div className="attemptTest__DisplayElement">
						<div className="question">1</div>
						<p>Attempted and Marked For Review</p>
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default AttemptTest;
