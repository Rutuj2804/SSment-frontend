import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Paper } from "../../components/paper";
import { Button, Checkbox, Input, Select, Textarea } from "../../library";

const options = [
	{ name: "Single Pager", value: 1 },
	{ name: "Multi Pager", value: 2 }
]

const CreateTest = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Test", "Create"],
				link: "/tests/create",
			})
		);
	}, [dispatch]);

	return (
		<div className="createTest__Wrapper">
			<Paper className="p-3">
				<div className="createTest__Header">
					<h4>Create Test</h4>
				</div>
				<form className="mt-3">
					<div className="row">
						<div className="col-12">
							<Input
								name="title"
								label="Title"
								placeholder="Title"
								required
								autoFocus
							/>
						</div>
						<div className="col-12">
							<Textarea
								name="Description"
								label="Description"
								placeholder="Description"
								rows={5}
								required
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Input
								name="Time Limit"
								label="Time Limit (in mins)"
								placeholder="Time Limit"
								required
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Input
								name="Buffer Time"
								label="Buffer Time (in mins)"
								placeholder="Buffer Time"
								required
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Input
								name="Passing Message"
								label="Passing Message"
								placeholder="Passing Message"
								required
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Input
								name="Failing Message"
								label="Failing Message"
								placeholder="Failing Message"
								required
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Checkbox
								name="Failing Message"
								label="Pass & Fail"
								description="Allows to automatically classify students based on Pass and Fail."
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Input
								name="Passing Points"
								label="Passing Points"
								placeholder="Passing Points"
								required
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Checkbox
								name="Failing Message"
								label="Auto Score"
								description="Checking this will automatically calculate the score and generate the result."
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Checkbox
								name="Failing Message"
								label="Show results once completed"
								description="Displays results immediately after completing the test."
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Checkbox
								name="Failing Message"
								label="Randomize Questions"
								description="Presensts question randomly while attempting test."
							/>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<Select
								options={options}
								name="name"
								value="value"
								selected={2}
								label="Test Style"
							/>
						</div>
						<div className="mt-3 d-flex justify-content-end">
							<Button type="submit">Create Test</Button>
						</div>
					</div>
				</form>
			</Paper>
		</div>
	);
};

export default CreateTest;
