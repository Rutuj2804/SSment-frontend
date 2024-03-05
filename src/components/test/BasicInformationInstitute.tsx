import { Input, Textarea } from "../../library";
import { CreateTestFormDataInterface } from "../../pages/test";

interface BasicInformationProps {
    formData: CreateTestFormDataInterface,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const BasicInformation = ({ formData, onChange }: BasicInformationProps) => {
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
				<Input
					name="image"
					type="file"
					accept="image/*"
					label="Test Image"
				/>
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