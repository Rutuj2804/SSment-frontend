import React from "react";

interface SelectPlanCProps {
	setPlan: Function;
	plan: number;
}

enum PlanTypes {
	"Monthly"=1,
	"Quaterly"=3,
	"Yearly"=12,
}

const SelectPlan = ({ plan, setPlan } : SelectPlanCProps) => {
	return (
		<div>
			<div className="row">
				<div className="col-lg-4 col-md-6 col-12 dropzone__Wrapper" onClick={() => setPlan(PlanTypes.Monthly)}>
					Monthly
				</div>
				<div className="col-lg-4 col-md-6 col-12 dropzone__Wrapper" onClick={() => setPlan(PlanTypes.Quaterly)}>
					Quaterly
				</div>
				<div className="col-lg-4 col-md-6 col-12 dropzone__Wrapper" onClick={() => setPlan(PlanTypes.Yearly)}>
					Yearly
				</div>
			</div>
		</div>
	);
};

export default SelectPlan;
