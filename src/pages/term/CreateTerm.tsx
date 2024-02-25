import React, { useEffect } from "react";
import { Paper } from "../../components/paper";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { useNavigate } from "react-router-dom";
import { AddRoles, BasicInformation, Confirmation } from "../../components/term";
import { Stepper } from "../../components/stepper";

const steps = [
	"Basic Information",
	"Add Roles",
	"Confirmation",
];

const CreateTerm = () => {

	const dispatch = useDispatch();

	const navigate = useNavigate()

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Administration", "Terms", "Create"],
				link: "/terms/create",
			})
		);
	}, [dispatch]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		navigate("/terms")
	}

	const controller = () => {
		return true
	}

	return <div className="createTerm__Wrapper">
		<Paper className="p-3">
			<Stepper
				steps={steps}
				onSubmit={onSubmit}
				submitButtonText="Create Institute"
				controller={controller}
				components={[
					<BasicInformation key={1} />,
					<AddRoles key={2} />,
					<Confirmation key={3} />
				]}
			/>
		</Paper>
	</div>;
};

export default CreateTerm;
