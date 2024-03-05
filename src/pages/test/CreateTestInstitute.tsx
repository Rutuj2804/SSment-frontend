import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Paper } from "../../components/paper";
import { useNavigate } from "react-router-dom";
import { Stepper } from "../../components/stepper";
import { setMessage } from "../../store/messages/slice";
import {
	BasicInformationInstitute,
	Batches,
	Configuration,
	Confirmation,
	Grading,
	TermsAndCondition,
} from "../../components/test";
import { createTest } from "../../store/actions";
import { useAccessRole } from "../../utils/helpers";
import moment from "moment";
import { RootState } from "../../store";

const steps = [
	"Basic Information",
	"Batches",
	"Configurations",
	"Terms & Conditions",
	"Grading",
	"Confirmation",
];

export interface Grades {
	start: number;
	end: number;
	grade: string;
}

export interface CreateTestFormDataInterface {
	title: string;
	description: string;
	timeLimit: number;
	bufferTime: number;
	startTime: string;
	startDate: string;
	autoScore: boolean;
	randomizeQuestions: boolean;
	passFail: boolean;
	passingPoints: number;
	sendEmailOfResultOnceCompleted: boolean;
	releasePassFailOnceCompleted: boolean;
	useCustomTermsAndConditions: boolean;
	termsAndConditionsLabel: string;
	termsAndConditionsCheckboxLabel: string;
	startTestButton: string;
	releaseGradesOnceCompleted: boolean;
	enableGrading: boolean;
}

const CreateTest = () => {
	const [formData, setFormData] = useState<CreateTestFormDataInterface>({
		title: "",
		description: "",
		timeLimit: 60,
		bufferTime: 15,
		startTime: "",
		startDate: "",
		autoScore: false,
		randomizeQuestions: false,
		sendEmailOfResultOnceCompleted: false,
		useCustomTermsAndConditions: true,
		releasePassFailOnceCompleted: false,
		releaseGradesOnceCompleted: false,
		termsAndConditionsLabel: "Terms & Conditions",
		termsAndConditionsCheckboxLabel: "I agree to terms & conditions",
		startTestButton: "Start Test",
		passFail: true,
		enableGrading: true,
		passingPoints: 30,
	});

	const [termsAndConditionsDescription, setTermsAndConditionsDescription] = useState("");
	const [batches, setBatches] = useState<string[]>([]);
	const [grades, setGrades] = useState<Grades[]>([]);
	const [testStyle, setTestStyle] = useState(1);
	const [testImage, setTestImage] = useState<File | null>(null);

	const {
		title,
		timeLimit,
		bufferTime,
		termsAndConditionsLabel,
		termsAndConditionsCheckboxLabel,
		startTestButton,
		enableGrading,
		startDate, startTime
	} = formData;

	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onCheckboxChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		c: boolean
	) => {
		setFormData({ ...formData, [e.target.name]: c });
	};

	const dispatch = useDispatch<any>();

	const navigate = useNavigate();

	const instituteId = useAccessRole();

	const termId = useSelector((state: RootState) => state.term.current)

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
		dispatch(
			createTest({
				navigate,
				...formData,
				instituteId,
				testStyle,
				testImage: testImage!,
				batchId: batches,
				startDateTime: moment(startDate + "T" + startTime).format("YYYY-MM-DDTHH:mm"),
				grading: grades,
				termsAndConditionsDescription,
				termId
			})
		);
	};

	const controller = (i: number) => {
		var proceedAllowed = true;
		if (i === 0) {
			if (title === "") {
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
			if (!batches.length) {
				dispatch(
					setMessage({
						_id: Date.now().toString(),
						text: "Please select atleast 1 batch for test.",
						type: "ERROR",
					})
				);
				proceedAllowed = false;
			}
		} else if (i === 2) {
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
		} else if (i === 3) {
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
		} else if (i === 4) {
			if (enableGrading && !grades.length) {
				dispatch(
					setMessage({
						_id: Date.now().toString(),
						text: "Please add gradings to the test.",
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
						<BasicInformationInstitute
							key={1}
							formData={formData}
							onChange={onChange}
						/>,
						<Batches
							key={2}
							setBatches={setBatches}
							batches={batches}
						/>,
						<Configuration
							key={3}
							testStyle={testStyle}
							setTestStyle={setTestStyle}
							formData={formData}
							onChange={onChange}
							onCheckboxChange={onCheckboxChange}
						/>,
						<TermsAndCondition
							key={4}
							formData={formData}
							onChange={onChange}
							onCheckboxChange={onCheckboxChange}
							setDescription={setTermsAndConditionsDescription}
							description={termsAndConditionsDescription}
						/>,
						<Grading
							key={5}
							formData={formData}
							onChange={onChange}
							onCheckboxChange={onCheckboxChange}
							setGrades={setGrades}
							grades={grades}
						/>,
						<Confirmation key={6} />,
					]}
					submitButtonText="Create Test"
					controller={controller}
				/>
			</Paper>
		</div>
	);
};

export default CreateTest;
