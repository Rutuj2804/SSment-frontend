import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { Button, Input, RichTextEditor } from "../../library";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { useAccessRole } from "../../utils/helpers";
import { getBatch, updateBatch } from "../../store/batch/actions";
import { RootState } from "../../store";

const EditBatch = () => {

	const [name, setName] = useState("")
	const [description, setDescription] = useState("")

	const navigate = useNavigate();

	const dispatch = useDispatch<any>();

	const instituteId = useAccessRole()

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
		if(instituteId && id)
			dispatch(getBatch({ batchId: id, instituteId }))
	}, [instituteId, id, dispatch])

	useEffect(() => {
		if(batch._id) {
			setName(batch.name!)
			setDescription(batch.description!)
		}
	}, [batch])

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(updateBatch({ batchId: id!, name, description, navigate, instituteId }))
	};

	return (
		<div>
			<Paper className="p-3">
				<h4>Edit Batch</h4>
				<form onSubmit={onSubmit}>
					<Input label="Title *" value={name} onChange={e=>setName(e.target.value)} placeholder="Batch Awesome" />
					<RichTextEditor
						label="Description *"
						placeholder="Description"
						value={description}
						onChange={c=>setDescription(c)}
					/>
					<Button type="submit">Edit Batch</Button>
				</form>
			</Paper>
		</div>
	);
};

export default EditBatch;
