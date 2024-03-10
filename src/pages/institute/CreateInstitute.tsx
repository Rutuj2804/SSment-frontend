import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Paper } from "../../components/paper";
import { Stepper } from "../../components/stepper";
import { BasicInformation, Confirmation } from "../../components/institute";
import { setMessage } from "../../store/messages/slice";
import { errorType } from "../../store/messages/types";
import { createInstitute, getInstitute } from "../../store/actions";
import { RootState } from "../../store";

const steps = ["Basic Information", "Confirmation"];

const CreateInstitute = () => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const { id } = useParams()

	const dispatch = useDispatch<any>();

	const navigate = useNavigate();

	const institute = useSelector((state: RootState) => state.institute.institute)

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Administration", "Institute", "Create"],
				link: "/institutes/create",
			})
		);
	}, [dispatch]);

	useEffect(() => {
		if(id) {
			dispatch(getInstitute({ institute: id}))
		}
	}, [dispatch, id])

	useEffect(() => {
		if(id) {
			setName(institute.name!)
			setDescription(institute.description!)
		}
	}, [institute, id])

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
