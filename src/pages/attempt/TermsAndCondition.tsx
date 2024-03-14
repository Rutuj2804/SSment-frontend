import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { Button, Checkbox } from "../../library";
import { PlayArrowRounded } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getTestRegistrationDetails, loadTest } from "../../store/actions";
import { goFullScreen } from "../../utils/helpers";

const TermsAndCondition = () => {

	const [agreed, setAgreed] = useState(false)

	const { id } = useParams()

	const dispatch = useDispatch<any>()

	const test = useSelector((state: RootState) => state.test.test)

	const navigate = useNavigate()

	useEffect(() => {
		if(id)
			dispatch(getTestRegistrationDetails({ testId: id, navigate }))
	}, [dispatch, id])

	const onStartTestClick = () => {
		if(agreed) {
			goFullScreen()
			dispatch(loadTest({ testId: id!, navigate }))
		}
	}

	return (
		<div className="termsAndCondition__Wrapper container mt-5">
			<Paper className="p-3">
				<h4>{test.termsAndConditionsLabel}</h4>
				<div className="my-3" dangerouslySetInnerHTML={{ __html: test.termsAndConditionsDescription! }}></div>
				<Checkbox
					id="terms-and-conditions"
					label={test.termsAndConditionsCheckboxLabel}
					checked={agreed}
					onChange={(_,c) => setAgreed(c)}
				/>
				<div className="d-flex justify-content-end">
					<Button onClick={onStartTestClick} startIcon={<PlayArrowRounded />}>{test.startTestButton}</Button>
				</div>
			</Paper>
		</div>
	);
};

export default TermsAndCondition;
