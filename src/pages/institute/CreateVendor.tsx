import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Paper } from "../../components/paper";
import { Button, Input } from "../../library";
import { createVendor } from "../../store/actions";

const CreateVendor = () => {
	const [name, setName] = useState("");

	const dispatch = useDispatch<any>();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Administration", "Vendor", "Create"],
				link: "/vendor/create",
			})
		);
	}, [dispatch]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(createVendor({ name, description: "" }));
	};

	return (
		<div>
			<Paper className="p-3">
				<form onSubmit={onSubmit}>
					<div className="row">
						<div className="col-12">
							<Input
								type="text"
								label="Vendor Name"
								placeholder="Vendor Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<Button type="submit">Create Vendor</Button>
					</div>
				</form>
			</Paper>
		</div>
	);
};

export default CreateVendor;
