import { Checkbox, Input, Select } from "../../library";
import { CreateTestFormDataInterface } from "../../pages/test";

const options = [
	{ name: "Single Pager", value: 1 },
	{ name: "Multi Pager", value: 2 },
];

interface ConfigurationProps {
    formData: CreateTestFormDataInterface,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>, c: boolean) => void;
}

const Configuration = ({ formData, onChange, onCheckboxChange }: ConfigurationProps) => {
	return (
		<div className="row">
			<div className="col-lg-6 col-md-6 col-12">
				<Input
					type="number"
					name="timeLimit"
					label="Time Limit (in mins) *"
					placeholder="Time Limit"
					required
					value={formData.timeLimit}
					onChange={onChange}
				/>
			</div>
			<div className="col-lg-6 col-md-6 col-12">
				<Input
					type="number"
					name="bufferTime"
					label="Buffer Time (in mins) *"
					placeholder="Buffer Time"
					required
					value={formData.bufferTime}
					onChange={onChange}
				/>
			</div>
			<div className="col-lg-6 col-md-6 col-12">
				<Checkbox
					name="autoScore"
					id="autoScore"
					label="Auto Score"
					description="Checking this will automatically calculate the score and generate the result."
					onChange={onCheckboxChange}
					checked={formData.autoScore}
				/>
			</div>
			<div className="col-lg-6 col-md-6 col-12">
				<Checkbox
					name="showResultOnceCompleted"
					id="showResultOnceCompleted"
					label="Show results once completed"
					description="Displays results immediately after completing the test."
					onChange={onCheckboxChange}
					checked={formData.showResultOnceCompleted}
				/>
			</div>
			<div className="col-lg-6 col-md-6 col-12">
				<Checkbox
					name="randomizeQuestions"
					id="randomizeQuestions"
					label="Randomize Questions"
					description="Presensts question randomly while attempting test."
					onChange={onCheckboxChange}
					checked={formData.randomizeQuestions}
				/>
			</div>
			<div className="col-lg-6 col-md-6 col-12">
				<Select
					options={options}
					name="name"
					value="value"
					selected={2}
					label="Test Style"
				/>
			</div>
		</div>
	);
};

export default Configuration