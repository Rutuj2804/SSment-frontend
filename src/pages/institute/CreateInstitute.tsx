import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Paper } from "../../components/paper";
import { Stepper } from "../../components/stepper";
import { AddRoles, BasicInformation, Confirmation } from "../../components/institute";

const steps = [
	"Basic Information",
	"Add Roles",
	"Confirmation",
];

const CreateInstitute = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Administration", "Institute", "Create"],
				link: "/institutes/create",
			})
		);
	}, [dispatch]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate("/institutes");
	};

    const controller = (i: number) => {
        return true;
    }

	return (
		<div>
			<Paper className="p-3">
				<Stepper
					steps={steps}
					onSubmit={onSubmit}
					submitButtonText="Create Institute"
					controller={controller}
                    components={[
                        <BasicInformation key={1} />,
                        <AddRoles key={2} />,
                        <Confirmation key={3} />
                    ]}
				/>
			</Paper>
		</div>
	);
};

export default CreateInstitute;
