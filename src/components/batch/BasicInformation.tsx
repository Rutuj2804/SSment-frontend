import React, { useEffect } from "react";
import { Input, RichTextEditor, Select, Textarea } from "../../library";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useAccessRole } from "../../utils/helpers";
import { getAllInstitutes, getTermsOfInstitute } from "../../store/actions";

interface BasicInformationProps {
	title: string;
	description: string;
	setTitle: any;
	setDescription: any;
	setInstitute: any;
	institute: string;
	term: string;
	setTerm: any;
}

const BasicInformation = ({ title, description, setTitle, setDescription, institute, setInstitute, setTerm, term }: BasicInformationProps) => {

	const dispatch = useDispatch<any>();

	const instituteId = useAccessRole()

	const institutes = useSelector((state: RootState) => state.institute.institutes)

	const terms = useSelector((state: RootState) => state.term.terms)

	useEffect(() => {
		if(instituteId)
			dispatch(getAllInstitutes({ instituteId }))
	}, [instituteId, dispatch])

	useEffect(() => {
		if(institute)
			dispatch(getTermsOfInstitute({ instituteId, institute }))
	}, [institute, instituteId, dispatch])

	return (
		<div>
			<Input
				label="Title of Batch"
				name="title"
				placeholder="Batch Awesome"
				value={title}
				onChange={e=>setTitle(e.target.value)}
			/>
			<div className="row">
				<div className="col-lg-6 col-md-6 col-12">
					<Select 
						options={institutes}
						name="name"
						value="_id"
						label="Select Institute"
						selected={institute}
						onChange={c=>setInstitute(c)}
					/>
				</div>
				<div className="col-lg-6 col-md-6 col-12">
					<Select 
						options={terms}
						name="name"
						value="_id"
						label="Select Term"
						selected={term}
						onChange={c=>setTerm(c)}
					/>
				</div>
			</div>
			<Textarea
				label="Description of Batch"
				name="description"
				placeholder="Description of Batch"
				value={description}
				rows={5}
				onChange={e=>setDescription(e.target.value)}
			/>
		</div>
	);
};

export default BasicInformation;
