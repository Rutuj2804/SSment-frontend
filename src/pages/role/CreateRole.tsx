import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Button, Input, Select } from "../../library";
import { Paper } from "../../components/paper";
import { useNavigate, useParams } from "react-router-dom";
import { createRoleDefinition, getRole } from "../../store/actions";
import { RootState } from "../../store";
import { useAccessRole } from "../../utils/helpers";

const options = [
	{ name: "No Access", value: 1 },
	{ name: "Read Only", value: 101 },
	{ name: "Read & Write", value: 201 },
	{ name: "Module Access", value: 301 },
];

const CreateRole = () => {
	const [name, setName] = useState("");
	const [alias, setAlias] = useState("");

	const [formData, setFormData] = useState({
		institute: 1,
		batch: 1,
		term: 1,
		test: 1,
		role: 1,
	});

	const instituteId = useAccessRole()

	const roleOnMount = useSelector((state: RootState) => state.role.roleOnMount)

	const dispatch = useDispatch<any>();

	const { id } = useParams()

	const navigate = useNavigate()

	const { institute, batch, term, test, role } = formData;

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Responsibilities", "Role Definition", "Create"],
				link: "/roles/create",
			})
		);
	}, [dispatch]);

	useEffect(() => {
		if(id) {
			dispatch(getRole({ roleId: id, instituteId }))
		}
	}, [id, instituteId, dispatch])

	useEffect(() => {
		if(id) {
			setFormData({
				institute: roleOnMount.institute!,
				batch: roleOnMount.batch!,
				term: roleOnMount.term!,
				test: roleOnMount.test!,
				role: roleOnMount.role!,
			})
			setName(roleOnMount.name!)
			setAlias(roleOnMount.alias!)
		}
	}, [roleOnMount, id])

	const onChange = (type: string, value: any) => setFormData((f) => ({ ...f, [type]: value }));

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(createRoleDefinition({ ...formData, alias, name, navigate, instituteId }))
	};

	return (
		<main className="createRole__Wrapper">
			<Paper className="p-3">
				<div className="createRole__Form">
					<div className="header">
						<h4>Define a new Role</h4>
					</div>

					<form onSubmit={handleSubmit}>
						<div className="row">
							<div className="col-lg-6 col-md-6 col-12">
								<Input
									type="text"
									value={name}
									name="name"
									onChange={(e) => setName(e.target.value.toUpperCase())}
									required
									autoComplete="Off"
									label="Role Name"
									placeholder="Role Name"
									autoFocus
								/>
							</div>
							<div className="col-lg-6 col-md-6 col-12">
								<Input
									type="text"
									value={alias}
									name="alias"
									onChange={(e) => setAlias(e.target.value)}
									required
									autoComplete="Off"
									label="Display Name"
									placeholder="Display Name"
									autoFocus
								/>
							</div>

							<div className="col-12">
								<div className="createRole__SwitchBox">
									<div className="createRole__Details">
										<h5>Institute</h5>
										<p>
											Gives user access to create and
											update new lectures
										</p>
									</div>
									<div className="col-lg-4 col-md-6 col-12">
										<Select
											options={options}
											name="name"
											value="value"
											selected={institute}
											onChange={(v) =>
												onChange("institute", v)
											}
											label="Select Access"
										/>
									</div>
								</div>

								<div className="createRole__SwitchBox">
									<div className="createRole__Details">
										<h5>Batch</h5>
										<p>
											Gives user access to create and
											update new lectures
										</p>
									</div>
									<div className="col-lg-4 col-md-6 col-12">
										<Select
											options={options}
											name="name"
											value="value"
											selected={batch}
											onChange={(v) =>
												onChange("batch", v)
											}
											label="Select Access"
										/>
									</div>
								</div>
								<div className="createRole__SwitchBox">
									<div className="createRole__Details">
										<h5>Term</h5>
										<p>
											Gives user access to create and
											update new lectures
										</p>
									</div>
									<div className="col-lg-4 col-md-6 col-12">
										<Select
											options={options}
											name="name"
											value="value"
											selected={term}
											onChange={(v) =>
												onChange("term", v)
											}
											label="Select Access"
										/>
									</div>
								</div>
								<div className="createRole__SwitchBox">
									<div className="createRole__Details">
										<h5>Test</h5>
										<p>
											Gives user access to create and
											update new lectures
										</p>
									</div>
									<div className="col-lg-4 col-md-6 col-12">
										<Select
											options={options}
											name="name"
											value="value"
											selected={test}
											onChange={(v) =>
												onChange("test", v)
											}
											label="Select Access"
										/>
									</div>
								</div>
								<div className="createRole__SwitchBox">
									<div className="createRole__Details">
										<h5>Role</h5>
										<p>
											Gives user access to create and
											update new lectures
										</p>
									</div>
									<div className="col-lg-4 col-md-6 col-12">
										<Select
											options={options}
											name="name"
											value="value"
											selected={role}
											onChange={(v) =>
												onChange("role", v)
											}
											label="Select Access"
										/>
									</div>
								</div>
							</div>

							<div className="createRole__Button">
								<Button type="submit">Create Role</Button>
							</div>
						</div>
					</form>
				</div>
			</Paper>
		</main>
	);
};

export default CreateRole;
