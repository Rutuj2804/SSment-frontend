import { Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import { Button } from "../../library";
import {
	AddRounded,
	ChevronLeftRounded,
	ChevronRightRounded,
} from "@mui/icons-material";

enum JumpType {
    "NEXT"=1,
    "PREV"=2,
}

interface StepperProps {
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
	steps: string[];
	components?: React.ReactNode[];
    submitButtonText?: string;
    controller?: Function;
}

const CustomStepper = ({ steps, onSubmit, components, submitButtonText, controller }: StepperProps) => {
	const [activeStep, setActiveStep] = useState(0);

    const navigation = (jumpType: JumpType) => {
        if(jumpType === JumpType.NEXT) {
            const proceedConfirmation = controller ? controller(activeStep) : null;
    
            if(!proceedConfirmation) return; 

            setActiveStep(v=>v+1)
        }
        else if(jumpType === JumpType.PREV) setActiveStep(v=>v-1)
    }

	return (
		<form className="mt-3" onSubmit={onSubmit}>
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map((label, i) => (
					<Step key={i}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>

			<div className="createTest__Form">
				{components?.map((c, i) => activeStep === i && c)}
			</div>

			<div className="d-flex justify-content-end gap-2">
				{activeStep !== 0 && (
					<Button
						startIcon={<ChevronLeftRounded />}
						onClick={() => navigation(JumpType.PREV)}
					>
						Prev
					</Button>
				)}
				{activeStep !== steps.length - 1 && (
					<Button
						endIcon={<ChevronRightRounded />}
						onClick={() => navigation(JumpType.NEXT)}
					>
						Next
					</Button>
				)}
				{activeStep === steps.length - 1 && (
					<Button type="submit" startIcon={<AddRounded />}>
						{submitButtonText || "Submit"}
					</Button>
				)}
			</div>
		</form>
	);
};

export default CustomStepper;
