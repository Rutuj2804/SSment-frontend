import { useDispatch, useSelector } from "react-redux";
import { Input, Select, Textarea } from "../../library";
import { CreateTestFormDataInterface } from "../../pages/test";
import { RootState } from "../../store";
import { useEffect, useState } from "react";
import { useAccessRole } from "../../utils/helpers";
import { getAllInstitutes, getTermsOfInstitute } from "../../store/actions";

interface BasicInformationProps {
    formData: CreateTestFormDataInterface,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	termId: string;
	setTermId: Function;
}

const BasicInformation = ({ formData, onChange, setTermId, termId }: BasicInformationProps) => {

	const [selectedInstitute, setSelectedInstitute] = useState("")

	const institutes = useSelector((state: RootState) => state.institute.institutes)
	const terms = useSelector((state: RootState) => state.term.terms)

	const dispatch = useDispatch<any>();

	const instituteId = useAccessRole()

	useEffect(() => {
		if(instituteId) {
			dispatch(getAllInstitutes({ instituteId }))
		}
	}, [dispatch, instituteId])

	useEffect(() => {
		if(selectedInstitute) {
			dispatch(getTermsOfInstitute({ instituteId, institute: selectedInstitute }))
		}
	}, [selectedInstitute])

	return (
		<div className="row">
			<div className="col-12">
				<Input
					name="title"
					label="Title *"
					placeholder="Title"
					required
					autoFocus
					value={formData.title}
					onChange={onChange}
				/>
			</div>
			<div className="col-12">
				<Input
					name="image"
					type="file"
					accept="image/*"
					label="Test Image"
				/>
			</div>
			<div className="col-lg-6 col-md-6 col-12 mb-2">
				<Select 
					options={institutes}
					name="name"
					value="_id"
					selected={selectedInstitute}
					label="Select Institute *"
					onChange={c=>setSelectedInstitute(c)}
				/>
			</div>
			<div className="col-lg-6 col-md-6 col-12 mb-2">
				<Select 
					options={terms}
					name="name"
					value="_id"
					selected={termId}
					label="Select Term *"
					onChange={c=>setTermId(c)}
				/>
			</div>
			<div className="col-lg-6 col-md-6 col-12"></div>
			<div className="col-12">
				<Textarea
					name="description"
					label="Description"
					placeholder="Description"
					rows={7}
					value={formData.description}
					onChange={onChange}
				/>
			</div>
		</div>
	);
};

export default BasicInformation