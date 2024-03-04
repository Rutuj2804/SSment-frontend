import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Paper } from "../../components/paper";
import { useNavigate } from "react-router-dom";
import { Stepper } from "../../components/stepper";
import { setMessage } from "../../store/messages/slice";
import {
	BasicInformation,
	Configuration,
	Confirmation,
	EndScreen,
	TermsAndCondition,
} from "../../components/test";

const steps = [
	"Basic Information",
	"Configurations",
	"Terms & Conditions",
	"End Screen",
	"Confirmation",
];

export interface CreateTestFormDataInterface {
	title: string;
	timeLimit: number;
	bufferTime: number;
	autoScore: boolean;
	randomizeQuestions: boolean;
	sendEmailOfResultOnceCompleted: boolean;
	testStyle: number;
	useCustomTermsAndConditions: boolean;
	useDefaultTermsAndConditions: boolean;
	termsAndConditionsLabel: string;
	termsAndConditionsCheckboxLabel: string;
	startTestButton: string;
	passFail: boolean;
	passingPoints: number;
	passingMessage: string;
	failingMessage: string;
}

const CreateTest = () => {
	const [formData, setFormData] = useState<CreateTestFormDataInterface>({
		title: "",
		timeLimit: 0,
		bufferTime: 0,
		autoScore: false,
		randomizeQuestions: false,
		sendEmailOfResultOnceCompleted: false,
		testStyle: 2,
		useCustomTermsAndConditions: true,
		useDefaultTermsAndConditions: false,
		termsAndConditionsLabel: "Terms & Conditions",
		termsAndConditionsCheckboxLabel: "I agree to terms & conditions",
		startTestButton: "Start Test",
		passFail: true,
		passingPoints: 30,
		passingMessage: "",
		failingMessage: "",
	});

	const [description, setDescription] = useState("")
	const [termsAndConditionsDescription, setTermsAndConditionsDescription] = useState("")

	const {
		title,
		timeLimit,
		bufferTime,
		termsAndConditionsLabel,
		termsAndConditionsCheckboxLabel,
		startTestButton,
		passingPoints,
		passingMessage,
		failingMessage,
	} = formData;

	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, c: boolean) => {
		setFormData({ ...formData, [e.target.name]: c });
	}

	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Test", "Create"],
				link: "/tests/create",
			})
		);
	}, [dispatch]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate("/test/123");
	};

	const controller = (i: number) => {
		var proceedAllowed = true;
		if (i === 0) {
			if (title === "" || description === "") {
				dispatch(
					setMessage({
						_id: Date.now().toString(),
						text: "Please fill out the important fields.",
						type: "ERROR",
					})
				);
				proceedAllowed = false;
			}
		} else if (i === 1) {
			if (timeLimit <= 0 || bufferTime <= 0) {
				dispatch(
					setMessage({
						_id: Date.now().toString(),
						text: "Please fill out the important fields.",
						type: "ERROR",
					})
				);
				proceedAllowed = false;
			}
		} else if (i === 2) {
			if (
				termsAndConditionsLabel === "" ||
				termsAndConditionsDescription === "" ||
				termsAndConditionsCheckboxLabel === "" ||
				startTestButton === ""
			) {
				dispatch(
					setMessage({
						_id: Date.now().toString(),
						text: "Please fill out the important fields.",
						type: "ERROR",
					})
				);
				proceedAllowed = false;
			}
		} else if (i === 3) {
			if (
				passingPoints <= 0 ||
				passingMessage === "" ||
				failingMessage === ""
			) {
				dispatch(
					setMessage({
						_id: Date.now().toString(),
						text: "Please fill out the important fields.",
						type: "ERROR",
					})
				);
				proceedAllowed = false;
			}
		}

		if (!proceedAllowed) return false;
		return true;
	};

	return (
		<div className="createTest__Wrapper">
			<Paper className="p-3">
				<Stepper
					steps={steps}
					onSubmit={onSubmit}
					components={[
						<BasicInformation
							key={1}
							formData={formData}
							onChange={onChange}
							setDescription={setDescription}
							description={description}
						/>,
						<Configuration
							key={2}
							formData={formData}
							onChange={onChange}
							onCheckboxChange={onCheckboxChange}
						/>,
						<TermsAndCondition
							key={3}
							formData={formData}
							onChange={onChange}
							onCheckboxChange={onCheckboxChange}
							setDescription={setTermsAndConditionsDescription}
							description={termsAndConditionsDescription}
						/>,
						<EndScreen
							key={4}
							formData={formData}
							onChange={onChange}
							onCheckboxChange={onCheckboxChange}
						/>,
						<Confirmation key={5} />,
					]}
					submitButtonText="Create Test"
					controller={controller}
				/>
			</Paper>
		</div>
	);
};

export default CreateTest;
