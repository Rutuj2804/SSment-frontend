import React from "react";
import { Checkbox, Input, Textarea } from "../../library";
import { CreateTestFormDataInterface } from "../../pages/test";

interface TermsAndConditionProps {
	formData: CreateTestFormDataInterface;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	onCheckboxChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		c: boolean
	) => void;
}

const TermsAndCondition = ({
	formData,
	onChange,
	onCheckboxChange,
}: TermsAndConditionProps) => {
	return (
		<div className="row">
			<div className="col-lg-6 col-md-6 col-12">
				<Checkbox
					name="useCustomTermsAndConditions"
					id="useCustomTermsAndConditions"
					label="Use custom Terms & Condition"
					description="Allows you to create your own custom terms & condition which will be presented before the exam."
					onChange={onCheckboxChange}
					checked={formData.useCustomTermsAndConditions}
				/>
			</div>
			<div className="col-lg-6 col-md-6 col-12">
				<Checkbox
					name="useDefaultTermsAndConditions"
					id="useDefaultTermsAndConditions"
					label="Use default Terms & Condition"
					description="It will display default terms & conditions designed by SSment team."
					onChange={onCheckboxChange}
					checked={formData.useDefaultTermsAndConditions}
				/>
			</div>
			{formData.useCustomTermsAndConditions && (
				<>
					<div className="col-12">
						<Input
							name="termsAndConditionsLabel"
							label="Terms & Conditions Label *"
							placeholder="Terms & Conditions"
							value={formData.termsAndConditionsLabel}
							onChange={onChange}
						/>
					</div>
					<div className="col-12">
						<Textarea
							name="termsAndConditionsDescription"
							label="Terms & Conditions Description *"
							placeholder="Description"
							rows={6}
							value={formData.termsAndConditionsDescription}
							onChange={onChange}
						/>
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						<Input
							name="termsAndConditionsCheckboxLabel"
							label="Checkbox Label *"
							placeholder="I Agree to terms & conditions"
							value={formData.termsAndConditionsCheckboxLabel}
							onChange={onChange}
						/>
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						<Input
							name="startTestButton"
							label="Start test Button Label *"
							placeholder="Start Test"
							value={formData.startTestButton}
							onChange={onChange}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default TermsAndCondition;
