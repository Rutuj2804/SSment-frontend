import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Paper } from "../../components/paper";
import { Stepper } from "../../components/stepper";
import { BasicInformation, Confirmation } from "../../components/institute";
import { setMessage } from "../../store/messages/slice";
import { errorType } from "../../store/messages/types";
import { createInstitute } from "../../store/actions";

const steps = ["Basic Information", "Confirmation"];

const CreateInstitute = () => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const dispatch = useDispatch<any>();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Administration", "Institute", "Create"],
				link: "/institutes/create",
			})
		);
	}, [dispatch]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(createInstitute({ name, description, navigate }))
	};

	const controller = (i: number) => {
		if (i === 0) {
			if (name.trim() === "") {
				dispatch(
					setMessage({
						_id: Date.now().toString(),
						text: "Name is should not be empty",
						type: errorType.ERROR,
					})
				);
				return false
			}
		}

		return true
	};

	return (
		<div>
			<Paper className="p-3">
				<Stepper
					steps={steps}
					onSubmit={onSubmit}
					submitButtonText="Create Institute"
					controller={controller}
					components={[
						<BasicInformation
							key={1}
							name={name}
							description={description}
							setName={setName}
							setDescription={setDescription}
						/>,
						<Confirmation key={3} />,
					]}
				/>
			</Paper>
		</div>
	);
};

export default CreateInstitute;
