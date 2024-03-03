import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { Button, Input, Select } from "../../library";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { RootState } from "../../store";
import { createRoleAssignment, getAllInstitutes, getAllRoleDefinitions, getRoleAssignment, updateRoleAssignment } from "../../store/actions";
import { useAccessRole } from "../../utils/helpers";

const AddAssignment = () => {
	const [role, setRole] = useState("")
	const [email, setEmail] = useState("")

	const dispatch = useDispatch<any>();

	const navigate = useNavigate();

	const { id } = useParams()

	const instituteId = useAccessRole()
	const institutes = useSelector((state: RootState) => state.institute.institutes)
	const roles = useSelector((state: RootState) => state.role.roles)
	const assignment = useSelector((state: RootState) => state.role.assignment)

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Responsibilities", "Role Assigned", "Assign Role"],
				link: "/assignments/create",
			})
		);
	}, [dispatch]);

	useEffect(() => {
		if(instituteId) {
			dispatch(getAllInstitutes({ instituteId }))
			dispatch(getAllRoleDefinitions({ instituteId, status: 1 }));
		}
	} ,[instituteId, dispatch])

	useEffect(() => {
		if(id) {
			dispatch(getRoleAssignment({ roleId: id, instituteId }))
		}
	}, [dispatch, id, instituteId]);

	useEffect(() => {
		if(id) {
			setRole(assignment.roleId!)
			setEmail(assignment.userId?.email!)
		}
	}, [assignment, id])

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(id)
			dispatch(updateRoleAssignment({ instituteId, roleId: role, navigate, institute: instituteId!, assignmentId: id }))
		else
			dispatch(createRoleAssignment({ instituteId, roleId: role, email, navigate, institute: instituteId! }))
	};

	return (
		<div className="addAssignment__Wrapper">
			<Paper className="p-3">
				<h4>Assign Role</h4>
				<form onSubmit={onSubmit}>
					<div className="row">
						<div className="col-lg-6 col-md-6 col-12">
							<Input
								type="email"
								value={email}
								onChange={e=>setEmail(e.target.value)}
								label="User Email"
								placeholder="User Email"
								required
								autoFocus
								disabled={!!id}
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Select
								name="alias"
								value="_id"
								options={roles}
								selected={role}
								onChange={c=>setRole(c)}
								label="Select Role"
								className="mb-2"
							/>
						</div>
					</div>

					<Button type="submit">{id ? "Update" : "Assign"} Role</Button>
				</form>
			</Paper>
		</div>
	);
};

export default AddAssignment;
