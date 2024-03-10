import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { Button, Input, Textarea } from "../../library";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { getBatch, updateBatch } from "../../store/actions";
import { RootState } from "../../store";

const EditBatch = () => {

	const [name, setName] = useState("")
	const [description, setDescription] = useState("")

	const navigate = useNavigate();

	const dispatch = useDispatch<any>();

	const { id } = useParams()

	const batch = useSelector((state: RootState) => state.batch.batch)

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Batch", "Batch Awesome"],
				link: "/batches",
			})
		);
	}, [dispatch]);

	useEffect(() => {
		if(id)
			dispatch(getBatch({ batchId: id }))
	}, [id, dispatch])

	useEffect(() => {
		if(batch._id) {
			setName(batch.name!)
			setDescription(batch.description!)
		}
	}, [batch])

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(updateBatch({ batchId: id!, name, description, navigate }))
	};

	return (
		<div>
			<Paper className="p-3">
				<h4>Edit Batch</h4>
				<form onSubmit={onSubmit}>
					<Input label="Title *" value={name} onChange={e=>setName(e.target.value)} placeholder="Batch Awesome" />
					<Textarea
						label="Description *"
						placeholder="Description"
						value={description}
						rows={5}
						onChange={e=>setDescription(e.target.value)}
					/>
					<Button type="submit">Edit Batch</Button>
				</form>
			</Paper>
		</div>
	);
};

export default EditBatch;
