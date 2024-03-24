import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsCloudUpload, BsFileEarmarkCheck } from "react-icons/bs";
import { fileSize } from "../../utils/helpers";
import { DeleteRounded } from "@mui/icons-material";

interface FileUploadCP {
	title?: string;
	onChange?: Function;
	type?: string;
	file?: File | null;
	showPreview?: boolean;
}

const FileUpload = ({
	title,
	onChange,
	type,
	file,
	showPreview,
}: FileUploadCP) => {
	const [error, setError] = useState("");

	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			console.log(fileSize(acceptedFiles[0].size));

			if (fileSize(acceptedFiles[0].size).isValid) {
				if (onChange) onChange(acceptedFiles);
				setError("");
			} else {
				setError("File size exceeded the standard limit of 10 MB.");
			}
		},
		[onChange]
	);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
	});

	return (
		<div
			className={`fileupload__Wrapper ${
				error ? "fileupload__Error" : ""
			}`}
		>
			<label htmlFor="fileUpload">{title}</label>
			<div {...getRootProps()} className="fileupload__Dropzone">
				{showPreview && file ? (
					<div className="fileupload__Preview">
						<img
							src={URL.createObjectURL(file)}
							alt="image-preview"
						/>
						<div className="vr"></div>
						<div className="fileupload__FileDetails">
							<span>
								<BsFileEarmarkCheck />
							</span>
							<h6>{file.name}</h6>
							<div className="flexbox">
								<p>{fileSize(file.size).size}</p>
								<div
									className="removefile"
									onClick={() => onChange!([])}
								>
									<DeleteRounded /> Remove
								</div>
							</div>
						</div>
					</div>
				) : (
					<>
						<input
							id="fileUpload"
							accept={type}
							{...getInputProps()}
						/>
						{file ? (
							<>
								<span>
									<BsFileEarmarkCheck />
								</span>
								<h6>{file.name}</h6>
								<div className="flexbox">
									<p>{fileSize(file.size).size}</p>
									<div
										className="removefile"
										onClick={() => onChange!([])}
									>
										<DeleteRounded /> Remove
									</div>
								</div>
							</>
						) : (
							<>
								<span>
									<BsCloudUpload />
								</span>
								<p>
									Drag 'n' drop files here, or click to select
									files.
								</p>
								<h6>{error}</h6>
							</>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default FileUpload;
