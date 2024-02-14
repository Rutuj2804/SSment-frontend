import React from "react";
import { Button, Dropzone } from "../../library";
import { CloudDownloadRounded, DangerousRounded } from "@mui/icons-material";

const AddParticipants = () => {
	return (
		<div>
			<div className="d-flex justify-content-between align-items-center">
				<Button className="my-3" startIcon={<CloudDownloadRounded />}>Download CSV Format</Button>
				<h6>0 participants selected</h6>
			</div>
			<h6>Upload file:</h6>
			<Dropzone title="Upload a csv file in the given format to add participants in batch." />
			<div className="layoutMessage__Message layoutMessage__Danger mt-3">
				<DangerousRounded />
				<p>Error occured while parsing the csv. Please check and upload again.</p>
			</div>
		</div>
	);
};

export default AddParticipants;
