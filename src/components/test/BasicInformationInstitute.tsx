import { FileUpload, Input, Textarea } from "../../library";
import { CreateTestFormDataInterface } from "../../pages/test";

interface BasicInformationProps {
    formData: CreateTestFormDataInterface,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	testImage: File | null;
	setTestImage: Function;
}

const BasicInformation = ({ formData, onChange, testImage, setTestImage }: BasicInformationProps) => {

	const fileUploaded = (acceptedFiles: File[]) => {
		if(acceptedFiles.length) setTestImage(acceptedFiles[0])
		else setTestImage(null)
	}

	return (
		<>
			<div className="col-12">
				<Input
					name="title"
					label="Title *"
					placeholder="Title"
					required
					autoFocus
					value={formData.title}
					onChange={onChange}
				/>
			</div>
			<div className="col-12 mb-2">
				<FileUpload title="Test Image" type="image/*" showPreview onChange={fileUploaded} file={testImage} />
			</div>
			<div className="col-12">
				<Textarea
					name="description"
					label="Description"
					placeholder="Description"
					rows={7}
					value={formData.description}
					onChange={onChange}
				/>
			</div>
		</>
	);
};

export default BasicInformation