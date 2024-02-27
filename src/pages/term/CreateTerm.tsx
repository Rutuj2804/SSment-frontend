import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { useNavigate } from "react-router-dom";
import {
	AddRoles,
	BasicInformation,
	Confirmation,
} from "../../components/term";
import { Stepper } from "../../components/stepper";
import { createTerm } from "../../store/actions";

const steps = ["Basic Information", "Add Roles", "Confirmation"];

interface RoleAssignment {
	email: string;
	roleId: string;
}

const CreateTerm = () => {
	const [institute, setInstitute] = useState("");
	const [term, setTerm] = useState("");
	const [role, setRole] = useState<RoleAssignment[]>([]);

	const dispatch = useDispatch<any>();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Administration", "Terms", "Create"],
				link: "/terms/create",
			})
		);
	}, [dispatch]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(createTerm({ navigate, termId: "", name: term, instituteId: institute, roles: role  }))
	};

	const controller = () => {
		return true;
	};

	return (
		<div className="createTerm__Wrapper">
			<Paper className="p-3">
				<Stepper
					steps={steps}
					onSubmit={onSubmit}
					submitButtonText="Create Institute"
					controller={controller}
					components={[
						<BasicInformation
							key={1}
							setTerm={setTerm}
							term={term}
							setInstitute={setInstitute}
							institute={institute}
						/>,
						<AddRoles key={2} setRole={setRole} role={role} />,
						<Confirmation key={3} />,
					]}
				/>
			</Paper>
		</div>
	);
};

export default CreateTerm;
