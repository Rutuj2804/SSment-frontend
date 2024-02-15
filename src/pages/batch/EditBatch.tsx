import React, { useEffect } from "react";
import { Paper } from "../../components/paper";
import { Button, Input, RichTextEditor } from "../../library";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";

const EditBatch = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Batch", "Batch Awesome"],
				link: "/batches",
			})
		);
	}, [dispatch]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate("/batch/123");
	};

	return (
		<div>
			<Paper className="p-3">
				<h4>Edit Batch</h4>
				<form onSubmit={onSubmit}>
					<Input label="Title *" placeholder="Batch Awesome" />
					<RichTextEditor
						label="Description *"
						placeholder="Description"
					/>
					<Button type="submit">Edit Batch</Button>
				</form>
			</Paper>
		</div>
	);
};

export default EditBatch;
