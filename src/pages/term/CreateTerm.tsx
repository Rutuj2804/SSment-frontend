import React, { useEffect } from "react";
import { Paper } from "../../components/paper";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Button, Input, Select, Textarea } from "../../library";
import { AddRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const options = [
	{ name: "MIT ADT University", id: 1 },
	{ name: "IIT Bombay", id: 2 },
	{ name: "IIIT Delhi", id: 3 },
]

const CreateTerm = () => {

	const dispatch = useDispatch();

	const navigate = useNavigate()

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Administration", "Terms", "Create"],
				link: "/terms/create",
			})
		);
	}, [dispatch]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		navigate("/terms")
	}

	return <div className="createTerm__Wrapper">
		<Paper className="p-3">
			<div className="header">
				<h4>Create Term</h4>
			</div>
			<form onSubmit={onSubmit}>
				<div className="row">
					<div className="col-lg-6 col-md-6 col-12">
						<Input
							name="name"
							placeholder="Name"
							title="Name"
							required
						/>
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						<Select 
							options={options}
							name="name"
							value="id"
							selected={1}
						/>
					</div>
					<Textarea
						name="description"
						label="Description"
						placeholder="Description"
						rows={5}
					/>
				</div>
				<div className="d-flex justify-content-end">
					<Button type="submit" startIcon={<AddRounded />}>Create Term</Button>
				</div>
			</form>
		</Paper>
	</div>;
};

export default CreateTerm;
