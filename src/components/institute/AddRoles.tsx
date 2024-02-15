import React, { useState } from "react";
import { Button, Input, Select } from "../../library";
import { AddRounded, CloseRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { UserCardSmall } from "../card";

const options = [
	{ name: "ADMIN", value: 1 },
	{ name: "INSTITUTE_OWNER", value: 1 },
	{ name: "INSTITUTE_HELPER", value: 1 },
];

const AddRoles = () => {
	const [role, setRole] = useState<number[]>([]);

	const onSubmit = () => {
		setRole((v) => [...v, Math.random()]);
	};

	return (
		<div>
			<div className="row">
				<div className="col-lg-6 col-md-6 col-12">
					<Input label="Email *" placeholder="example@email.com" />
				</div>
				<div className="col-lg-6 col-md-6 col-12">
					<Select
						label="Role *"
						options={options}
						name="name"
						value="value"
						selected={1}
					/>
				</div>
			</div>
			<div className="d-flex justify-content-end">
				<Button startIcon={<AddRounded />} onClick={onSubmit}>
					Add Role
				</Button>
			</div>
			<div className="row mt-3">
				{role.map((i) => (
					<div key={i} className="col-lg-4 col-md-4 col-12">
						<UserCardSmall />
					</div>
				))}
			</div>
		</div>
	);
};

export default AddRoles;
