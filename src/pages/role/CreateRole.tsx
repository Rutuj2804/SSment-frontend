import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Button, Input, Select } from "../../library";
import { Paper } from "../../components/paper";

const options = [
	{ name: "No Access", value: 0 },
	{ name: "Read Only", value: 1 },
	{ name: "Read, Write & Delete", value: 2 },
	{ name: "Global Access", value: 3 },
];

const CreateRole = () => {
	const [name, setName] = useState("");

	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Responsibilities", "Role Definition", "Create"],
				link: "/roles/create",
			})
		);
	}, [dispatch]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
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
							<div className="createRole__BasicInformation">
								<div className="col-lg-6 col-md-8 col-12">
									<Input
										type="text"
										value={name}
										name="name"
										onChange={(e) =>
											setName(e.target.value)
										}
										required
										autoComplete="Off"
										label="Role Name"
										placeholder="Role Name"
										autoFocus
									/>
								</div>
							</div>

							<div className="col-12">
								<div className="createRole__SwitchBox">
									<div className="createRole__Details">
										<h5>General</h5>
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
											selected={0}
											label="Select Access"
										/>
									</div>
								</div>
								
								<div className="createRole__SwitchBox">
									<div className="createRole__Details">
										<h5>Administration</h5>
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
											selected={0}
											label="Select Access"
										/>
									</div>
								</div>
								<div className="createRole__SwitchBox">
									<div className="createRole__Details">
										<h5>Roles</h5>
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
											selected={0}
											label="Select Access"
										/>
									</div>
								</div>
								<div className="createRole__SwitchBox">
									<div className="createRole__Details">
										<h5>Explore</h5>
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
											selected={0}
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
