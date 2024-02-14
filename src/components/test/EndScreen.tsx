import React from "react";
import { Checkbox, Input } from "../../library";
import { CreateTestFormDataInterface } from "../../pages/test";

interface EndScreenProps {
	formData: CreateTestFormDataInterface;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	onCheckboxChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		c: boolean
	) => void;
}

const EndScreen = ({
	formData,
	onChange,
	onCheckboxChange,
}: EndScreenProps) => {
	return (
		<div className="row">
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
						<Input
							name="passingMessage"
							label="Passing Message *"
							placeholder="Passing Message"
							value={formData.passingMessage}
							onChange={onChange}
							required
						/>
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						<Input
							name="failingMessage"
							label="Failing Message *"
							placeholder="Failing Message"
							value={formData.failingMessage}
							onChange={onChange}
							required
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default EndScreen;
