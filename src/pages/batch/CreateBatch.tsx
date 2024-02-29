import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { useNavigate } from "react-router-dom";
import { Stepper } from "../../components/stepper";
import {
	AddParticipants,
	BasicInformation,
	PaymentAndConfirmation,
	SelectPlan,
} from "../../components/batch";
import { useDispatch } from "react-redux";
import { setMessage } from "../../store/messages/slice";
import { setBreadcrumps } from "../../store/breadcrumps/slice";

const steps = [
	"Basic Information",
	"Add Participants",
	"Select Plan",
	"Payment & Confirmation",
];

export interface CreateBatchFormData {
	title: string;
	description: string;
}

const CreateBatch = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	
	const [participants, setParticipants] = useState<any[]>([])

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate("/batch/123");
	};

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Batch", "Create Batch"],
				link: "/batches/create",
			})
		);
	}, [dispatch]);

	const controller = (i: number) => {
		var proceedAllowed = true;

		if (i === 0) {
			if (title === "") {
				dispatch(
					setMessage({
						_id: Date.now().toString(),
						text: "Please fill out the important fields.",
						type: "ERROR",
					})
				);
				proceedAllowed = false;
			}
		}

		if (!proceedAllowed) return false;

		return true;
	};

	return (
		<div className="createBatch__Wrapper">
			<Paper className="p-3">
				<Stepper
					steps={steps}
					onSubmit={onSubmit}
					submitButtonText="Proceed to Payment"
					controller={controller}
					components={[
						<BasicInformation
							key={1}
							title={title}
							description={description}
							setDescription={setDescription}
							setTitle={setTitle}
						/>,
						<AddParticipants key={2} setParticipants={setParticipants} participants={participants} />,
						<SelectPlan key={3} />,
						<PaymentAndConfirmation key={4} />,
					]}
				/>
			</Paper>
		</div>
	);
};

export default CreateBatch;
