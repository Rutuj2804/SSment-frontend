import { Avatar } from "@mui/material";
import { Logo } from "../../common/logo";
import { Paper } from "../../components/paper";
import {
	LongAnswer,
	MultipleChoice,
	ShortAnswer,
	YesNoType,
	TrueFalseType,
	ImageChoice,
	CodingType,
	Timer
} from "../../components/attempt";
import {
	BookmarkAddRounded,
	ChevronLeftRounded,
	ChevronRightRounded,
} from "@mui/icons-material";
import { Button } from "../../library";
import { useFullScreenChange, useUserActivity } from "../../utils/hooks";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { QuestionInterface } from "../../utils/types";
import { username } from "../../utils/helpers";
import { useParams } from "react-router-dom";
import { setSubmitConfirmation } from "../../store/layout/slice";
import { setMarked } from "../../store/test/slice";

enum QuestionTypeEnum {
	"MULTIPLECHOICE" = 1,
	"IMAGECHOICE" = 2,
	"SHORTANSWER" = 3,
	"LONGANSWER" = 4,
	"YESNOTYPE" = 5,
	"TRUEFALSETYPE" = 6,
	"OPINIONCASE" = 7,
	"CODINGTYPE" = 8,
}

enum QuestionResponseType {
	"NOT_ATTEMPTED" = 0,
	"ATTEMPTED" = 1,
	"MARKED_FOR_REVIEW" = 2,
	"ATTEMPTED_AND_MARKED_FOR_REVIEW" = 3,
}

const AttemptTest = () => {
	const [activeSection, setActiveSection] = useState(0);

	const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)

	const [activeQuestion, setActiveQuestion] =
		useState<QuestionInterface | null>(null);

	const isFullScreen = useFullScreenChange();
	const isActive = useUserActivity();

	const dispatch = useDispatch();

	const { id } = useParams()

	const loadTest = useSelector((state: RootState) => state.test.loadTest);
	const storedResponse = useSelector((state: RootState) => state.test.storedResponse);

	useEffect(() => {
		console.log(isFullScreen, isActive);
	}, [isFullScreen, isActive]);

	useEffect(() => {
		if(loadTest.sections.length) {
			setActiveQuestion(loadTest[loadTest.sections[activeSection]][0])
			setActiveQuestionIndex(0)
		}
	}, [loadTest, activeSection])

	const onSectionNavigate = (i: number) => {
		if (i === -1 && 0 < activeSection) {
			setActiveSection((s) => s - 1);
			setActiveQuestionIndex(0)
		} else if (i === 1 && loadTest.sections.length - 1 > activeSection) {
			setActiveSection((s) => s + 1);
			setActiveQuestionIndex(0)
		}
	};

	const getCurrentQuestion = () => {
		switch (activeQuestion?.questionType) {
			case QuestionTypeEnum.MULTIPLECHOICE:
				return <MultipleChoice testId={id!} question={activeQuestion} serialNumber={activeQuestionIndex + 1} />;
			case QuestionTypeEnum.IMAGECHOICE:
				return <ImageChoice />;
			case QuestionTypeEnum.SHORTANSWER:
				return <ShortAnswer />;
			case QuestionTypeEnum.LONGANSWER:
				return <LongAnswer />;
			case QuestionTypeEnum.YESNOTYPE:
				return <YesNoType testId={id!} question={activeQuestion} serialNumber={activeQuestionIndex + 1} />;
			case QuestionTypeEnum.TRUEFALSETYPE:
				return <TrueFalseType testId={id!} question={activeQuestion} serialNumber={activeQuestionIndex + 1} />;
			case QuestionTypeEnum.CODINGTYPE:
				return <CodingType />;
			default:
				return null;
		}
	};

	const onQuestionNavigate = (i: number) => {
		setActiveQuestion(loadTest[loadTest.sections[activeSection]][i])
		setActiveQuestionIndex(i)
	}

	const onButtonNavigation = (i: number) => {
		if(i === -1 && 0 < activeQuestionIndex) {
			onQuestionNavigate(activeQuestionIndex - 1)
		} else if(i === 1 && loadTest[loadTest.sections[activeSection]].length - 1 > activeQuestionIndex) {
			onQuestionNavigate(activeQuestionIndex + 1)
		}
	}

	const getAdditionalQuestionClass = (id: string) => {
		if(storedResponse.attempts[id] === QuestionResponseType.ATTEMPTED) {
			return "attempted"
		} else if(storedResponse.attempts[id] === QuestionResponseType.MARKED_FOR_REVIEW) {
			return "marked"
		} else if(storedResponse.attempts[id] === QuestionResponseType.ATTEMPTED_AND_MARKED_FOR_REVIEW) {
			return "attempt_marked"
		} else return;
	}

	return (
		<div className="attemptTest__Wrapper">
			<Paper className="attemptTest__Body">
				<div className="attemptTest__Header">
					<Logo />
					<div className="user">
						<Avatar />
						<div className="details">
							<h6>{username(loadTest.user)}</h6>
							<p>{loadTest.user.email}</p>
						</div>
					</div>
				</div>
				<div className="attemptTest__Ribbon">
					<div className="left"></div>
				</div>
				<div className="attemptTest__Body">
					<div className="container">
						{getCurrentQuestion()}
					</div>
				</div>
				<div className="attemptTest__Sidebar">
					<div className="timeLeft__Section">
						<div className="ribbon">Time Left</div>
						<Timer minutes={loadTest.test.timeLimit} />
					</div>
					<div className="questions__Section">
						<div className="ribbon">
							<div onClick={() => onSectionNavigate(-1)}>
								<ChevronLeftRounded />
							</div>
							{loadTest.sections.length
								? loadTest.sections[activeSection]
								: ""}
							<div onClick={() => onSectionNavigate(1)}>
								<ChevronRightRounded />
							</div>
						</div>
						<div className="questions__Grid">
							{loadTest[loadTest.sections[activeSection]] &&
								loadTest[loadTest.sections[activeSection]].map(
									(_: QuestionInterface, i: number) => (
										<div key={i} className={`question ${getAdditionalQuestionClass(_._id!)}`} onClick={() => onQuestionNavigate(i)}>
											{i + 1}
										</div>
									)
								)}
						</div>
					</div>
				</div>
				<div className="attemptTest__Buttons">
					<div className="left">
						<Button onClick={() => dispatch(setMarked(activeQuestion?._id!))} startIcon={<BookmarkAddRounded />}>
							Mark For Review
						</Button>
						<Button onClick={() => onButtonNavigation(-1)} startIcon={<ChevronLeftRounded />}>Prev</Button>
						<Button onClick={() => onButtonNavigation(1)} endIcon={<ChevronRightRounded />}>Next</Button>
					</div>
					<div className="right">
						<Button onClick={() => dispatch(setSubmitConfirmation(true))}>Submit</Button>
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
