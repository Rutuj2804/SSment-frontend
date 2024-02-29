import React, { useEffect, useState } from "react";
import { Button, Dropzone } from "../../library";
import { CloudDownloadRounded, DangerousRounded } from "@mui/icons-material";
import { useCsvReader } from "../../utils/hooks";

interface AddParticipantsCProps {
	setParticipants: Function;
	participants: any[];
}

const AddParticipants = ({
	setParticipants,
	participants,
}: AddParticipantsCProps) => {
	const [file, setFile] = useState<File | null>(null);

	const { data, error, parseCsv } = useCsvReader();

	useEffect(() => {
		if (file) {
			parseCsv(file);
		}
	}, [file]);

	useEffect(() => {
		setParticipants(data);
	}, [data, setParticipants]);

	return (
		<div>
			<div className="d-flex justify-content-between align-items-center">
				<Button className="my-3" startIcon={<CloudDownloadRounded />}>
					Download CSV Format
				</Button>
				<h6>{participants.length} participants selected</h6>
			</div>
			<h6>Upload file:</h6>
			<Dropzone
				title="Upload a csv file in the given format to add participants in batch."
				onChange={(f: File[]) => setFile(f[0])}
			/>
			{error ? (
				<div className="layoutMessage__Message layoutMessage__Danger mt-3">
					<DangerousRounded />
					<p>
						Error occured while parsing the csv. Please check and
						upload again.
					</p>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default AddParticipants;
