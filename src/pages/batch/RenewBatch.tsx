import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Paper } from "../../components/paper";
import { PaymentAndConfirmation, SelectPlan } from "../../components/batch";
import { Stepper } from "../../components/stepper";
import { useNavigate } from "react-router-dom";

const steps = [
    "Select Plan",
    "Payment & Confirmation"
]

const RenewBatch = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Batch", "Renew Batch"],
				link: "/batch/renew/123",
			})
		);
	}, [dispatch]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate("/batch/123");
	};

    const controller = (i: number) => {
        return true;
    }

	return (
		<div>
			<Paper className="p-3">
				<Stepper
					steps={steps}
					onSubmit={onSubmit}
					submitButtonText="Proceed to Payment"
					controller={controller}
					components={[
						<SelectPlan key={1} />,
						<PaymentAndConfirmation key={2} />,
					]}
				/>
			</Paper>
		</div>
	);
};

export default RenewBatch;
