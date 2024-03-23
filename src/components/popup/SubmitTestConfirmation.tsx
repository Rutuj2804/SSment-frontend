import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setSubmitConfirmation } from "../../store/layout/slice";
import { useOutsideClick } from "../../utils/hooks";
import { IconButton } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import { Button, OutlineButton } from "../../library";
import { submitTest, updateFailedTestResponse } from "../../store/actions";
import { useNavigate, useParams } from "react-router-dom";

enum QuestionResponseType {
	"NOT_ATTEMPTED" = 0,
	"ATTEMPTED" = 1,
	"MARKED_FOR_REVIEW" = 2,
	"ATTEMPTED_AND_MARKED_FOR_REVIEW" = 3,
}

const SubmitTestConfirmation = () => {
	const dispatch = useDispatch<any>();

    const storedResponse = useSelector((state: RootState) => state.test.storedResponse);
	const failedResponses = useSelector((state: RootState) => state.test.failedResponses);

	const confirmationRef = useRef<HTMLDivElement>(null);

    const { id } = useParams();

	const close = () => dispatch(setSubmitConfirmation(false));

    const navigate = useNavigate();

	useOutsideClick(confirmationRef, close);

    const onSubmit = () => {
        dispatch(updateFailedTestResponse({ testId: id!, response: failedResponses }))
        dispatch(submitTest({ testId: id!, navigate }));
        close();
    }

    const attemptedResponses = () => Object.values(storedResponse.attempts).filter(v=>v === QuestionResponseType.ATTEMPTED).length
    const notAttemptedResponses = () => Object.values(storedResponse.attempts).filter(v=>v === QuestionResponseType.NOT_ATTEMPTED).length
    const markedResponses = () => Object.values(storedResponse.attempts).filter(v=>v === QuestionResponseType.MARKED_FOR_REVIEW).length
    const attemptedAndMarkedResponses = () => Object.values(storedResponse.attempts).filter(v=>v === QuestionResponseType.ATTEMPTED_AND_MARKED_FOR_REVIEW).length

    const attempts = () => attemptedAndMarkedResponses() + attemptedResponses()
    const skips = () => markedResponses() + notAttemptedResponses()
    
	return (
		<div className="submitTestConfirmation__Wrapper" ref={confirmationRef}>
			<div className="submitTestConfirmation__Header">
				<h5>Confirmation</h5>
                <IconButton onClick={close}><CloseRounded /></IconButton>
			</div>
            <div className="submitTestConfirmation__Body">
                <div className="submitTestConfirmation__Attempts">
                    <p>Attempted Questions</p>
                    <div className="display">
                        <span>{attempts()}</span>
                        <span>/</span>
                        <span>{attempts() + skips()}</span>
                    </div>
                    <p>Total Questions</p>
                </div>
                <div className="submitTestConfirmation__Stats">
                    <div className="unit">
                        <p>{attemptedAndMarkedResponses()}</p>
                        <span>Attempted & Marked for review</span>
                    </div>
                    <div className="unit">
                        <p>{attemptedResponses()}</p>
                        <span>Attempted</span>
                    </div>
                    <div className="unit">
                        <p>{notAttemptedResponses()}</p>
                        <span>Not Attempted</span>
                    </div>
                    <div className="unit">
                        <p>{markedResponses()}</p>
                        <span>Marked For Review</span>
                    </div>
                </div>
            </div>
            <div className="submitTestConfirmation__Footer">
                <OutlineButton onClick={close}>Cancel</OutlineButton>
                <Button onClick={onSubmit}>Submit</Button>
            </div>
		</div>
	);
};

export default SubmitTestConfirmation;
