import React, { useEffect } from "react";
import { Paper } from "../../components/paper";
import { Button, Input, Select } from "../../library";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";

const options = [
	{ name: "ADMIN", value: 1 },
	{ name: "OWNER", value: 2 },
	{ name: "HELPER", value: 3 },
];

const AddAssignment = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Responsibilities", "Role Assigned", "Assign Role"],
				link: "/assignments/create",
			})
		);
	}, [dispatch]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate("/assignment");
	};

	return (
		<div className="addAssignment__Wrapper">
			<Paper className="p-3">
				<h4>Assign Role</h4>
				<form onSubmit={onSubmit}>
					<div className="row">
						<div className="col-lg-6 col-md-6 col-12">
							<Input
								label="User Email"
								placeholder="User Email"
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Select
								name="name"
								value="value"
								options={options}
								selected={1}
								label="Select Role"
								className="mb-2"
							/>
						</div>
					</div>

					<Button type="submit">Assign Role</Button>
				</form>
			</Paper>
		</div>
	);
};

export default AddAssignment;
