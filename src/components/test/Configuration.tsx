import { Checkbox, Input, Select } from "../../library";
import { CreateTestFormDataInterface } from "../../pages/test";

const options = [
	{ name: "Sectioned", value: 1 },
	{ name: "Non Sectioned", value: 2 },
];

interface ConfigurationProps {
    formData: CreateTestFormDataInterface,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>, c: boolean) => void;
	testStyle: number;
	setTestStyle: any;
}

const Configuration = ({ formData, onChange, onCheckboxChange, testStyle, setTestStyle }: ConfigurationProps) => {
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
				<Input
					type="date"
					name="startDate"
					label="Start Date *"
					placeholder="Start Date"
					required
					value={formData.startDate}
					onChange={onChange}
				/>
			</div>
			<div className="col-lg-6 col-md-6 col-12">
				<Input
					type="time"
					name="startTime"
					label="Start Time *"
					placeholder="Start Time"
					required
					value={formData.startTime}
					onChange={onChange}
				/>
			</div>
			<div className="col-lg-6 col-md-6 col-12">
				<Select
					options={options}
					name="name"
					value="value"
					selected={testStyle}
					onChange={setTestStyle}
					label="Test Style"
				/>
			</div>
			<div className="col-lg-6 col-md-6 col-12">
				<Checkbox
					name="passFail"
					id="passFail"
					label="Pass & Fail"
					description="Allows to automatically classify students based on Pass and Fail."
					onChange={onCheckboxChange}
					checked={formData.passFail}
				/>
			</div>
			{formData.passFail && (
				<>
					<div className="col-lg-6 col-md-6 col-12">
						<Input
							type="number"
							name="passingPoints"
							label="Passing Points *"
							placeholder="Passing Points"
							value={formData.passingPoints}
							onChange={onChange}
							required
						/>
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						<Checkbox
							name="releasePassFailOnceCompleted"
							id="releasePassFailOnceCompleted"
							label="Release results as Pass or Fail once test is completed."
							description="Lets students know if they are passed or failed."
							onChange={onCheckboxChange}
							checked={formData.releasePassFailOnceCompleted}
						/>
					</div>
				</>
			)}
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
					name="sendEmailOfResultOnceCompleted"
					id="sendEmailOfResultOnceCompleted"
					label="Send email of results once completed"
					description="Sends a email of results to candidate immediately after scoring is completed."
					onChange={onCheckboxChange}
					checked={formData.sendEmailOfResultOnceCompleted}
				/>
			</div>
			<div className="col-lg-6 col-md-6 col-12">
				<Checkbox
					name="randomizeQuestions"
					id="randomizeQuestions"
					label="Randomize Questions"
					description="Presents question randomly while attempting test."
					onChange={onCheckboxChange}
					checked={formData.randomizeQuestions}
				/>
			</div>
		</div>
	);
};

export default Configuration