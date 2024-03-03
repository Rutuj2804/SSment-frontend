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
import { createBatch } from "../../store/actions";
import { useAccessRole } from "../../utils/helpers";
import moment from "moment";

const steps = [
	"Basic Information",
	"Add Participants",
	"Select Plan",
	"Payment & Confirmation",
];

enum PlanTypes {
	"Monthly"=1,
	"Quaterly"=3,
	"Yearly"=12,
}

export interface CreateBatchFormData {
	title: string;
	description: string;
}

const CreateBatch = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [participants, setParticipants] = useState<any[]>([])
	const [institute, setInstitute] = useState("")
	const [term, setTerm] = useState("")
	const [plan, setPlan] = useState(PlanTypes.Quaterly)

	const navigate = useNavigate();

	const instituteId = useAccessRole()

	const dispatch = useDispatch<any>();

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const expiryDate = moment().add(plan, "M").subtract(1, "day").toString()

		dispatch(createBatch({ description, name: title, expiryDate, participants, termId: term, navigate, instituteId, navigation: "/a/batches" }))
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
							institute={institute}
							setInstitute={setInstitute}
							term={term}
							setTerm={setTerm}
						/>,
						<AddParticipants key={2} setParticipants={setParticipants} participants={participants} />,
						<SelectPlan key={3} setPlan={setPlan} plan={plan} />,
						<PaymentAndConfirmation key={4} />,
					]}
				/>
			</Paper>
		</div>
	);
};

export default CreateBatch;
