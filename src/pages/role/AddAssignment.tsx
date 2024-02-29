import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { Button, Input, Select } from "../../library";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { RootState } from "../../store";
import { createRoleAssignment, getAllRoleDefinitions, getAllTerms } from "../../store/actions";

const AddAssignment = () => {

	const [role, setRole] = useState("")
	const [term, setTerm] = useState("")
	const [email, setEmail] = useState("")

	const dispatch = useDispatch<any>();

	const navigate = useNavigate();

	const termId = useSelector((state: RootState) => state.term.current)

	const terms = useSelector((state: RootState) => state.term.terms)
	const roles = useSelector((state: RootState) => state.role.roles)

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Responsibilities", "Role Assigned", "Assign Role"],
				link: "/assignments/create",
			})
		);
	}, [dispatch]);

	useEffect(() => {
		if(termId) dispatch(getAllTerms({ termId, status: 1 }))
	} ,[termId, dispatch])

	useEffect(() => {
		if(termId)
			dispatch(getAllRoleDefinitions({ termId, status: 1 }));
	}, [dispatch, termId]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(createRoleAssignment({ termId: term, roleId: role, email, navigate, term }))
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
						<div className="col-lg-6 col-md-6 col-12">
							<Select
								name="name"
								value="_id"
								options={terms}
								selected={term}
								onChange={c=>setTerm(c)}
								label="Select Term"
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
