import { Input, RichTextEditor } from "../../library";
import { CreateTestFormDataInterface } from "../../pages/test";

interface BasicInformationProps {
    formData: CreateTestFormDataInterface,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	setDescription: any;
	description: string;
}

const BasicInformation = ({ formData, onChange, description, setDescription }: BasicInformationProps) => {
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
			<div className="col-12">
				<RichTextEditor
					label="Description *"
					placeholder="Description"
					// rows={7}
					value={description}
					onChange={setDescription}
				/>
			</div>
		</>
	);
};

export default BasicInformation