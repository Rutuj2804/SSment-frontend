import React, { useEffect, useState } from "react";
import { Button, Input, Select } from "../../library";
import { AddRounded } from "@mui/icons-material";
import { UserCardSmall } from "../card";
import { useDispatch, useSelector } from "react-redux";
import { getAllRoleDefinitions } from "../../store/actions";
import { RootState } from "../../store";

interface RoleAssignment {
	email: string;
	roleId: string;
}

interface AddRolesCProps {
	setRole: Function;
	role: RoleAssignment[];
}

const AddRoles = ({ role, setRole }: AddRolesCProps) => {
	const [selectedRole, setSelectedRole] = useState("");
	const [email, setEmail] = useState("");

	const dispatch = useDispatch<any>();

	const roles = useSelector((state: RootState) => state.role.roles);

    const termId = useSelector((state: RootState) => state.term.current)

	useEffect(() => {
		if(termId)
			dispatch(getAllRoleDefinitions({ termId }));
	}, [dispatch, termId]);

	const onSubmit = () => {
		setRole((v: RoleAssignment[]) => [...v, { email: email, roleId: selectedRole }]);
	};

	return (
		<div>
			<div className="row">
				<div className="col-lg-6 col-md-6 col-12">
					<Input
						label="Email *"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="example@email.com"
					/>
				</div>
				<div className="col-lg-6 col-md-6 col-12">
					<Select
						label="Role *"
						options={roles}
						name="name"
						value="_id"
						selected={selectedRole}
						onChange={(c) => setSelectedRole(c)}
					/>
				</div>
			</div>
			<div className="d-flex justify-content-end">
				<Button startIcon={<AddRounded />} onClick={onSubmit}>
					Add Role
				</Button>
			</div>
			<div className="row mt-3">
				{role.map((_, i) => (
					<div key={i} className="col-lg-4 col-md-4 col-12">
						<UserCardSmall />
					</div>
				))}
			</div>
		</div>
	);
};

export default AddRoles;
