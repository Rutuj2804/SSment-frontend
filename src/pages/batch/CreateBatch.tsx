import React from "react";
import { Paper } from "../../components/paper";
import { Button, Input, Textarea } from "../../library";
import { AddRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const CreateBatch = () => {

    const navigate = useNavigate()

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate("/batch/123")
    }

	return (
		<div className="createBatch__Wrapper">
			<Paper className="p-3">
				<div className="createBatch__Header">
					<h4>Create Batch</h4>
				</div>
				<form onSubmit={onSubmit}>
					<Input label="Title" placeholder="Title" />
					<Textarea
						label="Description"
						placeholder="Description"
						rows={5}
					/>
                    <Input
                        type="file"
                        label="Add student CSV"
                    />
					<div className="d-flex justify-content-end">
						<Button startIcon={<AddRounded />} type="submit">
							Create Batch
						</Button>
					</div>
				</form>
			</Paper>
		</div>
	);
};

export default CreateBatch;
