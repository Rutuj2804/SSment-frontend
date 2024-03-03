import React, { useEffect } from "react";
import { Input, Select } from "../../library";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getAllInstitutes } from "../../store/actions";
import { useAccessRole } from "../../utils/helpers";

interface BasicInformationCProps {
    setInstitute: Function;
    setTerm: Function;
    institute: string;
    term: string;
}

const BasicInformation = ({ setInstitute, institute, setTerm, term }: BasicInformationCProps) => {
    
    const dispatch = useDispatch<any>()

    const institutes = useSelector((state: RootState) => state.institute.institutes)

    const instituteId = useAccessRole()

	useEffect(() => {
        if(instituteId)
		    dispatch(getAllInstitutes({ instituteId }));
	}, [dispatch, instituteId]);

	return (
		<div className="row">
            <div className="col-lg-6 col-md-6 col-12">
			    <Input label="Title *" onChange={e=>setTerm(e.target.value)} value={term} placeholder="Title" />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
                <Select
                    name="name"
                    value="_id"
                    selected={institute}
                    onChange={c=>setInstitute(c)}
                    options={institutes}
                    label="Select Institute *"
                />
            </div>
		</div>
	);
};

export default BasicInformation;
