import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { useNavigate, useParams } from "react-router-dom";
import {
	Confirmation,
	BasicInformationInstitute
} from "../../components/term";
import { Stepper } from "../../components/stepper";
import { createTerm, getTerms, updateTerm } from "../../store/actions";
import { useAccessRole } from "../../utils/helpers";
import { RootState } from "../../store";

const steps = ["Basic Information", "Confirmation"];

const CreateTermInstitute = () => {
	const [institute, setInstitute] = useState("");
	const [term, setTerm] = useState("");

	const dispatch = useDispatch<any>();

	const { id } = useParams()

	const instituteId = useAccessRole()

	const fetchedTerm = useSelector((state: RootState) => state.term.term)

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Administration", "Terms", "Create"],
				link: "/terms/create",
			})
		);
	}, [dispatch]);

	useEffect(() => {
		if(id)
			dispatch(getTerms({ termId: id, instituteId }))
	}, [id, dispatch, instituteId])

	useEffect(() => {
		if(fetchedTerm._id) {
			setTerm(fetchedTerm.name!)
			setInstitute(fetchedTerm.instituteId!)
		}
	}, [fetchedTerm])

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(id)
			dispatch(updateTerm({ navigate, instituteId, name: term, institute, termId: id }))
		else
			dispatch(createTerm({ navigate, instituteId, name: term, institute: instituteId!  }))
	};

	const controller = () => {
		return true;
	};

	return (
		<div className="createTerm__Wrapper">
			<Paper className="p-3">
				<Stepper
					steps={steps}
					onSubmit={onSubmit}
					submitButtonText={id ? "Update Term" :"Create Term"}
					controller={controller}
					components={[
						<BasicInformationInstitute
							key={1}
							setTerm={setTerm}
							term={term}
						/>,
						<Confirmation key={2} />,
					]}
				/>
			</Paper>
		</div>
	);
};

export default CreateTermInstitute;
